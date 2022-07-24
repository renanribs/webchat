import styled from "styled-components";

export const Container = styled.div`
  height: 50px;
  padding: 10px;
  display: flex;
  margin-bottom: 10px;
`;

export const Options = styled.div`
  display: flex;
  gap: 4rem;
  padding: 5px 25px;
  svg {
    width: 30px;
    height: 30px;
    color: #b9c0c8;
    cursor: pointer;
  }
  @media screen and (max-width: 500px) {
    padding: 5px 15px;
    gap: 10px;
  }
  @media screen and (max-width: 700px) {
    padding: 5px 20px;
    gap: 10px;
  }
`;
