import css from './ImageGallery.module.css'
import { ImageGalleryItem } from './ImageGalleryItem/ImageGalleryItem'

export const ImageGallery = ({data}) => {
    return(
        <ul className={css.gallery}>
            {data.map(({id, webformatURL, largeImageURL, tags}) => {
                return(
                    <ImageGalleryItem id={id} image={webformatURL} fullImage={largeImageURL} alt={tags}/>
                )
            })}
        </ul>
    )
}
