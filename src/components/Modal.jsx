import "./Modal.scss";
import { useRef } from "react";

export default function Modal(props) {
  const modalRef = useRef();

  return (
    <>
      <div ref={modalRef} className={`modal ${props.show ? "active" : ""}`}>
        <div className='modal__content'>{props.children}</div>
      </div>
    </>
  );
}

export const ModalHeader = (props) => {
  return (
    <div className='modal__header'>
      <div className='modal__title'>{props.children}</div>
    </div>
  );
};

export const ModalBody = (props) => {
  return (
    <div className='modal__body'>
      <div className='modal__text'>{props.children}</div>
    </div>
  );
};

export const ModalFooter = (props) => {
  return (
    <div className='modal__footer'>
      <div className='modal__end'>{props.children}</div>
    </div>
  );
};
