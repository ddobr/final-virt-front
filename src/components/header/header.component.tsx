import styles from "./header.component.module.scss";

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.header__image}
        alt="completely useless site"
        src="https://txt.1001fonts.net/img/txt/dHRmLjcyLjAwMDAwMC5RMDlOVUV4RlZFVk1XU0JWVTBWTVJWTlRJRk5KVkVVLjA/sedgwick-ave-display.regular.webp"
      />
    </header>
  );
};
