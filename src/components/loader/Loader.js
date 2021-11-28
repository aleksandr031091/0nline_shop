import Loader from "react-loader-spinner";
import LoaderStyled from "./LoaderStyled";

const LoaderSpinner = () => {
  return (
    <LoaderStyled>
      <Loader type="ThreeDots" color="#FF6B08" height={100} width={100} />
    </LoaderStyled>
  );
};

export default LoaderSpinner;
