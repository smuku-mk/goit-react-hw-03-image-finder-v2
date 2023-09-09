import css from './Modal.module.css';

export const Modal = ({ imgSrc, imgAlt, onClose }) => {
  return (
    <div onClick={onClose} className={css.overlay}>
      <div className={css.modal}>
        <img src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};
