import { memo } from "react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";

const NotFound_ = () => {
  const error = useRouteError();

  const isNotFound = isRouteErrorResponse(error);

  if (isNotFound) {
    return <>Not Found</>;
  }
  return <>Errror page: {error?.toString()}</>;
};

const NotFound = memo(NotFound_);
export default NotFound;
