import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ id, imgSrc, imgAlt }) => {
  return (
    <li key={id} className={css.galleryItem}>
      <img className={css.galleryItemImage} src={imgSrc} alt={imgAlt} />
    </li>
  );
};
