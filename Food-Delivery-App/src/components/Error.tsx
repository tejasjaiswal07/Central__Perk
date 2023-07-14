import React from "react";
import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();

  return (
    <div>
      <h1>Oops!!!</h1>
      <h2>Something Went Wrong, Please Check if your Connection is OK.</h2>
      <p>{`${error}`}</p>
    </div>
  );
}
