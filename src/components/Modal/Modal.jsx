import css from './Modal.module.css';

export const Modal = ({ onClose, imgSrc, imgAlt }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <img onClose={onClose} src={imgSrc} alt={imgAlt} />
      </div>
    </div>
  );
};
