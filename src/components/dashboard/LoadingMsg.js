import { Loading } from "../../constant";

const LoadingMsg = () => {
  return (
    <div>
      <i className="fa fa-bell-o"></i>
      <strong className="ms-2">{Loading}</strong>{" "}
      {"page Do not close this page..."}
    </div>
  );
};

export default LoadingMsg;
