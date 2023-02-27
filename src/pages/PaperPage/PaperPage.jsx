import { useParams } from 'react-router-dom';
import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton.jsx';
import Profile from '../../useful/Profile/Profile';
import styles from './PaperPage.module.css';
import GoMindMaps from '../../parameters/GoMindMaps/GoMindMaps';
import Papers from '../../parameters/Papers/Papers.jsx';
import { papers } from '../../parameters/papers';
import Error404 from '../../pages/404Error/404Error';
import { motion } from 'framer-motion';

function PaperPage(props) {
  const { id } = useParams();

  const findPaper = papers.find(function (product) {
    return product.id === id;
  });

  if (findPaper === undefined) {
    return <Error404 isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />;
  }

  return (
    <div className={styles.container}>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className={styles.mainGrid}>
        <GoMindMaps type={findPaper.type} />
        <span className={styles.title}>{findPaper.title}</span>
        <div className={styles.titleBar} style={{ backgroundColor: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}></div>
        <Papers numberId={findPaper.numberId} isDarkMode={props.isDarkMode} />
      </motion.div>
      <div
        className={styles.topBar}
        style={{ backgroundColor: props.isDarkMode ? 'rgb(40, 44, 53, 0.5)' : 'rgb(248, 248, 248, 0.5)' }}
      >
        <span className={styles.topText}>SiWon's Paper</span>
      </div>
      <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
      <Profile isDarkMode={props.isDarkMode} />
    </div>
  );
}
export default PaperPage;
