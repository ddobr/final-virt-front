import styles from "./button.component.module.scss";

interface Props {
  onClick?: () => void;
  text?: string;
  secondary?: true;
}
export const Button: React.FC<Props> = ({ onClick, text, secondary }) => {
  if (secondary) {
    return (
      <div className={styles.button}>
        <button onClick={onClick} className={styles.button__btnSec}>{text}</button>
      </div>
    );
  }

  return (
    <div className={styles.button}>
      <button onClick={onClick} className={styles.button__btn}>{text}</button>
      <div className={styles.button__shadow}></div>
    </div>
  );
};
