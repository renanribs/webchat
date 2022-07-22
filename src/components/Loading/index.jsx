import React from "react";
import ClipLoader from "react-spinners/clipLoader";
import * as C from "./styles";

const Loading = () => {
  return (
    <C.Container>
      <ClipLoader />
    </C.Container>
  );
};

export default Loading;
