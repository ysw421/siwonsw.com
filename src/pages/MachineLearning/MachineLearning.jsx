import styles from './MachineLearning.module.css';
import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton';
import Profile from '../../useful/Profile/Profile';
import MindMap from '../../useful/MindMap/MindMap';
import { machineLearningNodes } from '../../parameters/nodes';
import { motion } from 'framer-motion';

// class Node {
//   constructor(value, x, y, link, edges = [], circleSize = 20) {
//     this.value = value;
//     this.x = x;
//     this.y = y;
//     this.link = link;
//     this.edges = edges;
//     this.circleSize = circleSize;
//   }
// }

// const nodes = {
//   a: new Node('Machine Learning', 0, 0, 'a', ['b', 'c'], 60),
//   b: new Node('한글123English', -70, -50, 'b', ['d', 'e']),
//   c: new Node(3, 60, 100, 'c'),
//   d: new Node(4, -140, -70, 'd', [], 27),
//   e: new Node(5, -20, -120, 'e'),
// };

function MachineLearning(props) {
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          width: '100vw',
          height: '100vh',
          overflow: 'hidden',
        }}
      >
        <MindMap nodes={machineLearningNodes} isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
        {/* <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} /> */}
      </motion.div>
      <Profile />
      <span className={styles.bottomBar} style={{ filter: props.isDarkMode ? 'brightness(0.7)' : 'brightness(1.1)' }}>
        Made with 🔥 by{' '}
        <span onClick={() => handleOpenNewTab('https://github.com/ysw421')} className={styles.linkToMyGit}>
          siwon
        </span>
      </span>
      <span className={styles.topText} style={{ color: props.isDarkMode ? '' : '#f8f8f8' }}>
        SiWon's Mind Map
      </span>
    </>
  );
}

export default MachineLearning;
