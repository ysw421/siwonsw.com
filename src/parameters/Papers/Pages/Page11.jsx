import GoMindMaps from '../../GoMindMaps/GoMindMaps';
import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';
import MindMap from '../../../useful/MindMap/MindMap';
import { mindMapNodes } from '../../nodes';

export default function Page11(props) {
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  return (
    <>
      <MainText text="인생을 프로그래밍합니다." />
      <MainText text="세상을 이롭게 만들 코드 한줄에 관심이 많습니다. 제한 없으며 자유로운 코드 한줄을 좋아합니다." />
      <Height50 num="20px" />
      <MainText text="저의 " isSpan={true} />
      <span
        onClick={() => handleOpenNewTab('https://github.com/ysw421')}
        style={{ textDecoration: 'underline', cursor: 'pointer' }}
      >
        <MainText text="깃허브" isSpan={true} />
      </span>
      <MainText text="를 확인하세요!" isSpan={true} />
      <Height50 num="60px" />
      <GoMindMaps type="프로그래밍" />
      <div className={styles.center}>
        <div
          className={styles.mindMapBox}
          style={{ borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)' }}
        >
          <MindMap
            nodes={mindMapNodes['프로그래밍']}
            isDarkMode={props.isDarkMode}
            toggleDarkMode={props.toggleDarkMode}
            isDarkModeBtnHidden={true}
            setPos={true}
          />
        </div>
      </div>
    </>
  );
}
