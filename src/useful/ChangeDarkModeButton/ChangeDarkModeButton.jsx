import styles from './ChangeDarkModeButton.module.css';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

function ChangeDarkModeButton(props) {
  // const properties = useSpring({
  // dark: {
  //   r: 9,
  //   transform: 'rotate(40deg)',
  //   cx: 12,
  //   cy: 4,
  //   opacity: 0,
  // },
  // light: {
  //   r: 5,
  //   transform: 'rotate(90deg)',
  //   cx: 30,
  //   cy: 0,
  //   opacity: 1,
  // },
  // springConfig: { mass: 4, tension: 250, friction: 35 },
  // });
  return (
    <div className={styles.changeDarkModeButtonBox}>
      <span style={{ color: props.isDarkMode ? '' : '' }} className={styles.difference}>
        {props.isDarkMode ? 'Dark Mode' : 'Light Mode'}
      </span>
      <div
        // style={properties}
        className={`${styles.changeDarkModeButton} ${styles.miniButton}`}
        onClick={() => {
          props.toggleDarkMode();
          localStorage.setItem('isDarkMode', props.isDarkMode ? false : true);
        }}
        style={{ backgroundColor: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}
      >
        {props.isDarkMode ? (
          <MdOutlineDarkMode color="#201c1c" style={{ width: '100%' }} />
        ) : (
          <MdOutlineLightMode color="'#201c1c" style={{ width: '100%', color: '#f8f8f8' }} />
        )}
      </div>
    </div>
  );
}
export default ChangeDarkModeButton;
