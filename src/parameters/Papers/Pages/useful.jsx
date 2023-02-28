import styles from './Pages.module.css';

export function MainText(props) {
  return (
    <>
      {props.fontSize === undefined ? (
        <p className={styles.mainText}>{props.text}</p>
      ) : (
        <p style={{ fontSize: props.fontSize }}>{props.text}</p>
      )}
    </>
  );
}

export function Height50(props) {
  return (
    <>{props.num === undefined ? <div className={styles.margin50}></div> : <div style={{ height: props.num }}></div>}</>
  );
}

export function MovieDiv(props) {
  return (
    <div className={styles.movieDiv}>
      <img className={styles.movieImage} alt={props.alt} src={props.src} />
      {props.title && (
        <div>
          <p className={styles.movieTitle}>{props.title}</p>
          <p className={styles.movieSubTitle}>{props.subTitle}</p>
          <div style={{ display: 'flex', gap: '14px' }}>
            <span className={styles.movieDirector}>감독: </span>
            <p style={{ maxWidth: props.actorWidth }} className={styles.movieDirector}>{`${props.director}`}</p>
          </div>
          <Height50 num="10px" />
          <div style={{ display: 'flex', gap: '14px' }}>
            <span className={styles.movieDirector}>출연: </span>
            <p style={{ maxWidth: props.actorWidth }} className={styles.movieDirector}>{`${props.actor}`}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export function Box(props) {
  return (
    <div className={styles.outBox}>
      {props.isDarkMode ? (
        <div className={styles.box} style={{ backgroundColor: '#555c6e' }}>
          {props.text}
        </div>
      ) : (
        <div className={styles.box} style={{ backgroundColor: '#d8d6d6' }}>
          {props.text}
        </div>
      )}
    </div>
  );
}

export function Line(props) {
  return props.isDarkMode ? (
    <div className={styles.line}></div>
  ) : (
    <div className={styles.line} style={{ backgroundColor: 'rgb(129 118 118)' }}></div>
  );
}
