import styled from "styled-components";

export const Container = styled.div`
  max-width: 300px;
  height: 700px;
  background-color: rgb(36, 43, 61);
  overflow: auto;
  border: 2px solid rgb(100, 131, 160);
  border-radius: 10px;
  margin-right: 1px;
  padding-left: 10rem;
  padding-right: 1rem;
  padding: 10px;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: rgba(0, 0, 0, 0.2);
  }

  @media screen and (max-width: 500px) {
    gap: 10px;
  }
  @media screen and (max-width: 700px) {
    gap: 10px;
  }
`;

export const Content = styled.div`
  border: 2px solid rgb(100, 131, 160);
  border-radius: 10px;
`;

export const Divider = styled.div`
  margin: 5px 10px 10px 10px;
  border-top: solid 1px #ddd;
`;
