import styles from "./Default.module.scss";

function Default({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>App Book</h1>
        <p>
          <a href="https://rezrad.ir">rezrad</a> | React.js Full Course
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by rezrad with ♥️  </p>
      </footer>
    </>
  );
}

export default Default;
