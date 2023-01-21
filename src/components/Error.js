import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);
  return (
    <>
      <h1>Opps!!!! Something went wrong!</h1>
      <h2>{err.status + " - " + err.error.message}</h2>
    </>
  );
};

export default Error;
