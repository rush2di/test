import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LoadingScreen = () => {
  return (
    <div className="py-5 my-3 d-flex align-center justify-center">
      <div>
        <FontAwesomeIcon
          icon={["fas", "circle-notch"]}
          style={{ fontSize: 30 }}
          spin={true}
        />
      </div>
    </div>
  );
};

export default LoadingScreen;
