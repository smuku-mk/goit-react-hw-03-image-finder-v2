import css from './Button.module.css';

export const Button = ({ onClick }) => {
  return (
    <div className={css.btnWrapper}>
      <button className={css.btn} onClick={onClick}>
        Load more
      </button>
    </div>
  );
};
