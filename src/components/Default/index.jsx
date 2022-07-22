import React from "react";
import * as C from "./styles";
import Logo from "./logo.svg";

const Default = () => {
  return (
    <C.Container>
      <img src={Logo} alt="Logo" />

      <C.Info>
        Tudo o que seu time precisa para agilizar e simplificar o atendimento no
        seu WhatsApp, Facebook, Instagram e Chat para Site
      </C.Info>
    </C.Container>
  );
};

export default Default;
