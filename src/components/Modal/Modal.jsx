import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, StyledModal } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);

    document.body.style.overflow = 'hidden';
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);

    document.body.style.overflow = 'auto';
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <StyledModal>{this.props.children}</StyledModal>
      </Overlay>,
      modalRoot
    );
  }
}

export default Modal;
