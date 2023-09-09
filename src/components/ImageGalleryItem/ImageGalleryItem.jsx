import css from './ImageGalleryItem.module.css';

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
