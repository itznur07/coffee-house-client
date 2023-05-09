import React from "react";
import { useLoaderData } from "react-router-dom";

const Coffee = () => {
  const loadedData = useLoaderData();

  return <div>coffee: {loadedData.length}</div>;
};

export default Coffee;
