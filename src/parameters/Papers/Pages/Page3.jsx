import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';
import MindMap from '../../../useful/MindMap/MindMap';
import { mindMapNodes } from '../../nodes';
import GoMindMaps from '../../GoMindMaps/GoMindMaps';

export default function Page1(props) {
  return (
    <>
      <MainText text="나의 일상 카테고리에 오신 것을 환영합니다!" />
      <Height50 num="15px" />
      <MainText
        text="안녕하세요, 시원입니다.😊 현재의 저를 기억하기 위해, 더 발전한 '시원'이 되기 위해 지금의 발자국을 마인드 맵에
        새겨봅니다. 더 아름다운 미래를 꿈꾸며~💜"
      />

      <Height50 num="70px" />
      <GoMindMaps type="일상" />
      <div className={styles.center}>
        <div
          className={styles.mindMapBox}
          style={{ borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)' }}
        >
          <MindMap
            nodes={mindMapNodes['나의-일상']}
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
