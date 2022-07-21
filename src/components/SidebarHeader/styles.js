import styled from "styled-components";

export const Container = styled.div`
  height: 59px;
  background-color: #333d52;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 5px;
  box-shadow: 0 1px 2px #0003;
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

  svg {
    width: 24px;
    height: 24px;
    color: #b9c0c8;
    cursor: pointer;
  }
`;
