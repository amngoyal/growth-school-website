import React from "react";
import { CloseButton, ModalContent, ModalWrapper } from "./styles";
import PlusIcon from "../../assets/icons/plus.png";

const Modal = ({ open = false, onClose = () => {}, children }) => {
  return (
    <ModalWrapper open={open}>
      <ModalContent>
        <CloseButton onClick={onClose}>
          <img src={PlusIcon} alt="close" />
        </CloseButton>
        <iframe
          src="https://player.vimeo.com/video/568087241"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          frameborder="0"
          width="100%"
          height="100%"
          title="YouTube video player"
          webkitallowfullscreen
          mozallowfullscreen
          allowfullscreen
        ></iframe>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;
