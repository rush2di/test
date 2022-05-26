import Link from "next/link";
import { v4 as uuid } from "uuid";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import useWindowSize from "helpers/hooks/useWindowSize";
import { joinClassNames } from "helpers/utils";
import { SquareBTN } from "components/Button";

import SearchBar from "../Search";
import styles from "./styles.module.scss";
import { navigationList } from "../constants";

const { navbar__wrapper, navbar__header, navbar__mobile } = styles;

const Navbar = () => {
  const router = useRouter();
  const size = useWindowSize();
  const [isActiveSearch, setIsActiveSearch] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const toggleSearch = () => {
    setIsActiveSearch(!isActiveSearch);
  };

  const closeSearch = () => {
    setIsActiveSearch(false);
  };

  useEffect(() => {
    if (size.width < 767 && isActiveSearch === false) {
      setIsActiveSearch(true);
    }
  }, [size]);

  useEffect(() => {
    router.events.on("routeChangeComplete", () => {
      setIsOpen(false);
    });
  }, [router.events]);

  return (
    <>
      <header className={joinClassNames([navbar__header, "bg-dark"])}>
        <div className="container">
          <div className="d-flex flex-wrap justify-between py-1">
            <p className="color-light">We Make You Feel Comfortable</p>
            <div className="d-flex flex-wrap">
              <p className="color-light mr-1">Mon - Fri 9.00 - 18.00</p>
              <p className="color-light">Sat - Sun 9.00 - 12.00</p>
            </div>
          </div>
          <nav
            role="navigation"
            className={joinClassNames([
              navbar__wrapper,
              "bg-white py-1-25 px-1-50",
            ])}
          >
            <div className="nav__block nav__block--between">
              <Link href="/">
                <a className="d-flex">
                  <img
                    src="/assets/images/LOGO_DEFAULT.png"
                    alt="Holidaz logo"
                  />
                </a>
              </Link>
              <ul className="nav__block nav--not-mobile">
                {navigationList.map(({ href, text }) => {
                  return (
                    <li
                      key={uuid()}
                      className="mx-0-50 font-weight-medium color-dark"
                    >
                      <Link href={href}>
                        <a className="nav__item-txt">{text}</a>
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <ul className="nav__block">
                <li className="mx-0-50">
                  <SquareBTN href="/login">
                    <FontAwesomeIcon icon={["far", "user"]} size="xs" />
                  </SquareBTN>
                </li>
                <li className="mx-0-50 nav--not-mobile">
                  <SquareBTN onClick={toggleSearch}>
                    <FontAwesomeIcon icon={["fas", "search"]} size="xs" />
                  </SquareBTN>
                </li>
                <li className="mx-0-50 nav--mobile">
                  <SquareBTN onClick={handleClick}>
                    <FontAwesomeIcon
                      icon={["fas", isOpen ? "times" : "bars"]}
                      size="xs"
                    />
                  </SquareBTN>
                </li>
              </ul>
            </div>
            {isActiveSearch && <SearchBar closeSearch={closeSearch} />}
          </nav>
        </div>
        <nav
          style={{ display: isOpen ? "block" : "none" }}
          className={navbar__mobile}
        >
          <div className="nav__mobile">
            <ul className="nav__block flex-column">
              {navigationList.map(({ href, text }) => {
                return (
                  <li
                    key={uuid()}
                    className="mx-0-50 my-1 font-weight-medium color-dark"
                  >
                    <Link href={href}>
                      <a className="nav__item-txt">{text}</a>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
