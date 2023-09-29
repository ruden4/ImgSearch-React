import { Component } from 'react'
import { Modal } from 'components/Modal/Modal';
import css from './ImageGalleryItem.module.css'

export class ImageGalleryItem extends Component {
    state = {
        modalOpen: false
    }
    toggleModal = () => {
        this.setState(({ modalOpen }) => ({
            modalOpen: !modalOpen
        }));
      };

    render() {
        const {id, image, fullImage, alt} = this.props;
        return(
        <li className={css.galleryItem} key={id}>
        <img className={css.img} src={image} alt={alt} onClick={this.toggleModal}/>
        {this.state.modalOpen && (
          <Modal tags={alt} largeImage={fullImage} toggleModal={this.toggleModal} />
          )}
        </li>
        )
    }
}
