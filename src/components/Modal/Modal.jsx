import { useEffect } from 'react';
import css from './Modal.module.css';

export function Modal({ toggleModal, tags, largeImage }) {
  
 useEffect(() => {
    const hendleKeyDown = e => {
      if (e.code === 'Escape') {
        toggleModal();
      }
    };
   window.addEventListener('keydown', hendleKeyDown);
   
    return () => {
      window.removeEventListener('keydown', hendleKeyDown);
    };
 }, [toggleModal]);
  
  const hendleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      toggleModal();
    }
  };
    return (
      <div className={css.overlay} onClick={hendleOverlayClick}>
        <div className={css.modal}>
          <img src={largeImage} alt={tags} />
        </div>
      </div>
    );
  }