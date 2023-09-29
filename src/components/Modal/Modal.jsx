import { Component } from 'react';
import css from './Modal.module.css';

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.hendleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.hendleKeyDown);
  }
  hendleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.toggleModal();
    }
  };
  hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.toggleModal();
    }
  };
  render() {
    const { largeImage, tags } = this.props;
    return (
      <div className={css.overlay} onClick={this.hendleOverlayClick}>
        <div className={css.modal}>
          <img src={largeImage} alt={tags} />
        </div>
      </div>
    );
  }
}