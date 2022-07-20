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
  border: 4px solid #1298a5;
  padding: 2px 1em 0 1em;
  border-radius: 10px;
  background-color: #2f3a4e;
`;

export const Button = styled.button`
  outline: none;
  font-size: 18px;
  padding: 14px 18px;
  cursor: pointer;
  margin-top: 45px;
  border-radius: 8px;
`;
