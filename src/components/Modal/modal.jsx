import { PureComponent } from 'react';
import { Overlay, ModalS, ExitCross } from './modal.styled';
import PropTypes from 'prop-types';

export class Modal extends PureComponent {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeydown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeydown);
  }

  handleKeydown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdrop = evt => {
    if (evt.currentTarget === evt.target) {
      this.props.onClose();
    }
  };
  
  render() {
    const { largeImageURL, onClose } = this.props;
    return (
      <>
        <Overlay onClick={this.handleBackdrop}>
          <ModalS>
            <ExitCross size="24px" onClick={onClose} />
            <img src={largeImageURL} alt="" />
          </ModalS>
        </Overlay>
      </>
    );
  }
}

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
}