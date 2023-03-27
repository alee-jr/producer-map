import React from "react";
import * as S from "./styles";
import Image from "next/image";
import close from "../../../public/assets/icons/close.svg";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleExclude: () => void;
  title: string;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  handleExclude,
  onClose,
  title,
}) => {
  if (!isOpen) return null;

  return (
    <div>
      <S.Overlay>
        <S.Content>
          <S.Header>
            <button onClick={onClose}>
              <Image src={close} alt="" />
            </button>
          </S.Header>
          <S.Title>
            <h1>{title}</h1>
          </S.Title>
          <S.AttentionText>
            <h3>Atenção!</h3>
            <p>Essa ação não poderá ser desfeita.</p>
          </S.AttentionText>
          <S.ActionsButtons>
            <S.ExcludeButton onClick={handleExclude}>
              <svg
                width="12"
                height="14"
                viewBox="0 0 12 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.857143 12.6875C0.857143 13.4258 1.41964 14 2.14286 14H9.85714C10.5536 14 11.1429 13.4258 11.1429 12.6875V3.5H0.857143V12.6875ZM8.14286 5.6875C8.14286 5.46875 8.33036 5.25 8.57143 5.25C8.78571 5.25 9 5.46875 9 5.6875V11.8125C9 12.0586 8.78571 12.25 8.57143 12.25C8.33036 12.25 8.14286 12.0586 8.14286 11.8125V5.6875ZM5.57143 5.6875C5.57143 5.46875 5.75893 5.25 6 5.25C6.21429 5.25 6.42857 5.46875 6.42857 5.6875V11.8125C6.42857 12.0586 6.21429 12.25 6 12.25C5.75893 12.25 5.57143 12.0586 5.57143 11.8125V5.6875ZM3 5.6875C3 5.46875 3.1875 5.25 3.42857 5.25C3.64286 5.25 3.85714 5.46875 3.85714 5.6875V11.8125C3.85714 12.0586 3.64286 12.25 3.42857 12.25C3.1875 12.25 3 12.0586 3 11.8125V5.6875ZM11.5714 0.875H8.57143L8.25 0.246094C8.16964 0.109375 8.03571 0 7.875 0H4.09821C3.9375 0 3.80357 0.109375 3.72321 0.246094L3.42857 0.875H0.428571C0.1875 0.875 0 1.09375 0 1.3125V2.1875C0 2.43359 0.1875 2.625 0.428571 2.625H11.5714C11.7857 2.625 12 2.43359 12 2.1875V1.3125C12 1.09375 11.7857 0.875 11.5714 0.875Z"
                  fill="white"
                />
              </svg>
              EXCLUIR
            </S.ExcludeButton>
            <S.CancelButton onClick={onClose}>CANCELAR</S.CancelButton>
          </S.ActionsButtons>
        </S.Content>
      </S.Overlay>
    </div>
  );
};

export default Modal;
