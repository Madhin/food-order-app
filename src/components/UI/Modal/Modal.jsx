import React from 'react'
import styles from './Modal.module.scss'
import reactDom from 'react-dom';

const Backdrop = props => {
  return <div className = {styles.backdrop} />
};

const ModalOverlay = props => {
  return <div className = {styles.modal}>
    <div className = {styles.content}>{props.children}</div>
  </div>
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
    {reactDom.createPortal(<Backdrop />, portalElement )}
    {reactDom.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </>
  )
}

export default Modal
