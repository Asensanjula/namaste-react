import { useRouteError } from "react-router-dom";

const ErrorComponent = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Opps!!</h2>
      <h4>Something Went Wrong!</h4>
      <p>
        {err.status} : {err.statusText}
      </p>
    </div>
  );
};

export default ErrorComponent;
