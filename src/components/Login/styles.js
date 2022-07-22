import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  align-items: center;
  justify-content: center;
  max-width: 500px;
  max-height: 300px;
  margin: 200px auto;

  min-height: 300px;
  border: 0.2rem solid #1298a5;
  padding: 1rem 1em 0 1em;
  border-radius: 10px;
  background-color: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0)
  );

  -webkit-backdrop-filter: blur(20px);
  backdrop-filter: blur(20px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
  border: 1px solig rgba(255, 255, 255, 0.18);
  border-radius: 32px;
`;

export const Button = styled.button`
  outline: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
  margin-top: 45px;
  border-radius: 8px;
`;
