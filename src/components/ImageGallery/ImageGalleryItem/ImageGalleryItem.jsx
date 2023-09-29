import { useState } from 'react'
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css'

export function ImageGalleryItem({image, fullImage, alt}) {
    
    // eslint-disable-next-line no-unused-vars
    const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(s => !s)
    };
    
        return(
        <li className={css.galleryItem}>
        <img className={css.img} src={image} alt={alt} onClick={toggleModal}/>
        {modalOpen && (
          <Modal tags={alt} largeImage={fullImage} toggleModal={toggleModal} />
          )}
        </li>
        )
    }
