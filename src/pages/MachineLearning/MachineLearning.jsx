import styles from './MachineLearning.module.css';
import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton';
import Profile from '../../useful/Profile/Profile';
import MindMap from '../../useful/MindMap/MindMap';
import { nodes } from '../../parameters/nodes';

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
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <MindMap nodes={nodes} isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
      {/* <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} /> */}
      <Profile />
      <span className={styles.topText} style={{ color: props.isDarkMode ? '' : '#f8f8f8' }}>
        SiWon's Mind Map
      </span>
    </div>
  );
}

export default MachineLearning;
