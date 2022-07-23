import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #333d52;
  padding: 10px 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  box-shadow: 0 10px 2px #0003;
`;

export const Options = styled.div`
  display: flex;
  gap: 5rem;
  padding: 10px 10px 10px 30px;

  svg {
    width: 30px;
    height: 30px;
    color: #b9c0c8;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    padding: 10px 10px 10px 10px;
    gap: 10px;
  }
  @media screen and (max-width: 700px) {
    padding: 10px 10px 10px 30px;
    gap: 10px;
  }
`;
