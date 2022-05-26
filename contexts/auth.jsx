import { createContext, useState, useContext, useEffect } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";

import api from "services/api";
import LoadingScreen from "components/LoadingScreen";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [connectedUser, setConnectedUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadUserFromCookies() {
      const token = Cookies.get("token");
      if (token) {
        api.defaults.headers.Authorization = `Bearer ${token}`;
        const savedUser = JSON.parse(sessionStorage.getItem("connected_user"));
        if (savedUser && token === savedUser.jwt) {
          setConnectedUser(savedUser.user);
        }
      }
      setLoading(false);
    }
    loadUserFromCookies();
  }, []);

  const login = async (email, password) => {
    const response = await api.post("/api/auth/local", {
      identifier: email,
      password: password,
    });

    const { jwt, user } = response.data;

    if (jwt) {
      Cookies.set("token", jwt, { expires: 60 });
      api.defaults.headers.Authorization = `Bearer ${jwt}`;
      sessionStorage.setItem("connected_user", JSON.stringify({ user, jwt }));
      setConnectedUser(user);
      return true;
    }
    return false;
  };

  const logout = () => {
    Cookies.remove("token");
    setConnectedUser(null);
    delete api.defaults.headers.Authorization;
    router.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: !!connectedUser,
        user: connectedUser,
        login,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const ProtectRoute = ({ children }) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated && router.pathname.includes("/admin")) {
    useEffect(() => {
      const savedUser = JSON.parse(sessionStorage.getItem("connected_user"));
      if (!savedUser) router.push("/login");
    }, []);

    return <LoadingScreen />;
  } else {
    return children;
  }
};

export const useAuth = () => useContext(AuthContext);
