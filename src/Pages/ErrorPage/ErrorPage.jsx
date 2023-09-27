import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  let error = useRouteError();

  return (
    <div className="h-[90vh] flex flex-col gap-4 items-center justify-center">
      
      <p className="text-5xl">Opps</p>
      <p>error: <span className="text-red-500 text-2xl">{error.status}</span></p>
      <p className="text-red-600">{error.data}</p>
      <Link to='/' className="underline text-xl">Home</Link>
      
    </div>
  );
};

export default ErrorPage;
