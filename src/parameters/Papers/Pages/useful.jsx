import styles from './Pages.module.css';

export function MainText(props) {
  return (
    <>
      <p className={styles.mainText}>{props.text}</p>
    </>
  );
}

export function Height50(props) {
  return (
    <>{props.num === undefined ? <div className={styles.margin50}></div> : <div style={{ height: props.num }}></div>}</>
  );
}
