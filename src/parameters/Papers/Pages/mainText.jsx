import styles from './Pages.module.css';

export default function MainText(props) {
  return (
    <>
      <span className={styles.mainText}>{props.text}</span>
    </>
  );
}
