import css from './ImageGalleryItem.module.css';
import PropTypes from 'prop-types';

export const ImageGalleryItem = ({ images, onClick }) => {
  return (
    <>
      {images.map(image => (
        <li li key={image.id} className={css.galleryItem}>
          <img
            className={css.galleryItemImage}
            src={image.webformatURL}
            alt={image.tags}
            onClick={() => onClick(image)}
          />
        </li>
      ))}
    </>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
};
