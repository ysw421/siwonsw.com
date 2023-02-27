import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';
import MindMap from '../../../useful/MindMap/MindMap';
import { mindMapNodes } from '../../nodes';
import GoMindMaps from '../../GoMindMaps/GoMindMaps';

export default function Page1(props) {
  return (
    <>
      <MainText text="수학 카테고리에 오신 것을 환영합니다!" />
      <Height50 num="15px" />
      <MainText
        text="수학은 우리 일상 어디에나 존재합니다. 가족과 식당에 가서 각 음식의 더해진 값을 지불할 때, 집으로 돌아오기 위해
      지도앱으로 최단 경로를 검색할 때 모두 수학이 필요합니다. 특히 컴퓨터에서 수학은 매우 중요한 요소입니다. 사람은 모두
      원자로 이루어져 있듯이 컴퓨터는 모든 데이터가 0과1 숫자로 이루어져 있습니다. 이 0과 1은 사람이 계산하지 못할
      놀라운 계산 능력을 가졌으며 수학의 놀라운 힘을 보여줍니다. 이 카테고리에서 아름다운 수학의 이야기를 들어봅시다."
      />

      <Height50 num="70px" />
      <GoMindMaps type="math" />
      <div className={styles.center}>
        <div
          className={styles.mindMapBox}
          style={{ borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)' }}
        >
          <MindMap
            nodes={mindMapNodes['math']}
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
