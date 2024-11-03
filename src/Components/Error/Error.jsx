import { Link, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="text-center mt-16 space-y-2">
      <h1 className="text-5xl">Oops!</h1>
      <p className="text-2xl">Sorry, an unexpected error has occurred.</p>
      <p className="text-2xl">
        <i>{error.statusText || error.message}</i>
      </p>
      <Link className="btn" to={-1}>Go Back</Link>
    </div>
  );
}