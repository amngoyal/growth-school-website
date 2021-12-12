import styled from "styled-components";

export const TimerWrapper = styled.div`
  display: flex;
  gap: 24px;
  justify-content: space-between;
  max-width: 380px;
  margin: 0 auto;
`;

export const TimerColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    margin-top: 15px;
    font-size: 0.875rem;
    color: rgb(1, 73, 73);
  }

  > div {
    width: 100%;
    max-width: 111px;
    background-color: rgba(8, 212, 192, 0.1);
    border-radius: 15px;
    padding: 35px 0px 30px;

    span {
      display: block;
      color: #46c6cc;
      font-size: 3rem;
      text-align: center;
      font-weight: 800;
    }
  }
`;
