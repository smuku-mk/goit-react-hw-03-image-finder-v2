import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = () => {
  return (
    <li className={css.galleryItem}>
      <img className={css.galleryItemImage} src="" alt="" />
    </li>
  );
};
