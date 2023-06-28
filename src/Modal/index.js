import React from 'react';
import ReactDOM from 'react-dom';
import './Modal.css'

export function Modal({ children }) {
  const modalRoot = document.getElementById('modal');
  const [modalElement] = React.useState(document.createElement('div'));

  React.useEffect(() => {
    modalRoot.appendChild(modalElement);
    return () => {
      modalRoot.removeChild(modalElement);
    };
  }, [modalElement, modalRoot]);

  return ReactDOM.createPortal(
    <div className="ModalBackground">{children}</div>, modalElement);
    
}