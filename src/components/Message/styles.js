import styled from "styled-components";

export const Container = styled.div``;

export const Line = styled.div`
  margin: 10px;
  display: flex;

  &.me {
    > div {
      background-color: #066069;
    }
    justify-content: right;
  }
`;

export const Content = styled.div`
  background-color: #58677e;
  border-radius: 10px;
  box-shadow: 0 1px 1px #ccc;
  display: flex;
  flex-direction: column;
  padding: 3px;
  max-width: 80%;
`;

export const Message = styled.span`
  font-size: 14px;
  margin: 5px 40px 5px 5px;
  color: white;
`;

export const MessageDate = styled.span`
  font-size: 11px;
  color: white;
  text-align: right;
  height: 15px;
  margin: -5px 5px 0;
`;
