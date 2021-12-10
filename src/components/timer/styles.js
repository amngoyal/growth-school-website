import styled from "styled-components";

export const TimerWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: center;
`;

export const TimerColumn = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin-top: 15px;
    font-size: 14px;
    color: rgb(1, 73, 73);
  }

  > div {
    width: 111px;
    background-color: rgba(8, 212, 192, 0.1);
    border-radius: 15px;
    padding: 35px 0px 30px;

    span {
      color: #46c6cc;
      font-size: 48px;
      text-align: center;
      font-weight: 800;
    }
  }
`;
