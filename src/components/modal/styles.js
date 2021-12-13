import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  height: 100vh;
  width: 100vw;

  display: ${({ open }) => (open ? "flex" : "none")};
  position: fixed;
  z-index: 9999;
  left: 0;
  top: 0;

  overflow: auto;

  align-items: center;
  justify-content: center;

  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalContent = styled.div`
  width: 100%;
  height: 100%;
  margin: 30px;
  max-width: 780px;
  max-height: 445px;

  position: relative;

  background-color: #fefefe;
  padding: 0;
  border: 1px solid #888;
  border-radius: 10px;

  iframe {
    border-radius: 10px;
    object-fit: cover;
  }
`;

export const CloseButton = styled.div`
  cursor: pointer;
  position: absolute;
  top: -18px;
  right: -15px;
  width: 36px;
  z-index: 20;
  height: 36px;

  display: flex;

  align-items: center;

  justify-content: center;
  border-radius: 50%;
  background-image: linear-gradient(to right, #21b5e0, #00deb4);
  transform: rotate(45deg);

  img {
    width: 18px;
    object-fit: contain;
  }
`;
