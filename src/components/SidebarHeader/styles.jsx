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

export const Avatar = styled.div`
  display: flex;
  gap: 15px;

  svg {
    width: 24px;
    height: 24px;
    color: #b9c0c8;
    cursor: pointer;
  }
`;

export const Options = styled.div`
  display: flex;
  gap: 15px;
  padding: 10px 10px 10px 10px;

  svg {
    width: 24px;
    height: 24px;
    color: #b9c0c8;
    cursor: pointer;
  }
`;
