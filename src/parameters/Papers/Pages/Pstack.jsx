import styles from './Pages.module.css';
import { Height50 } from './useful';

export default function Page1(props) {
  return (
    <>
      ↑ 위 &#39;&lt; <span style={{ fontFamily: 'font1', fontSize: '20px' }}>프로그래밍 마인드맵</span>
      &#39;을 클릭하여 프로그래밍 마인드맵을 볼 수 있습니다. 프로그래밍 마인드맵에서 이 페이지로 다시 돌아오기 위해서는
      브라우저에서 지원하는 돌아가기 버튼을 사용할 수 있습니다. 돌아가기 버튼은 어떻게 구현할 수 있을까요? 스택(stack)에
      대하여 알아봅시다.
      <Height50 />
      스택은 선형 자료 구조로, 배열과 유사합니다. 하지만 차이점이 있습니다. 배열은 원하는 위치에 데이터를 삽입하고
      출력할 수 있지만, 스택은 제일 마지막에 삽입된 데이터가 제일 먼저 출력될 수 있다는 점입니다. 이를 LIFO(Last In
      First Out)라고 합니다.
      {/* <MainText text="↑ 위 '< " isSpan={true} />
      <span style={{ fontFamily: 'font1', fontSize: '20px' }}>프로그래밍 마인드맵</span>
      <MainText text="'을 클릭하여 " isSpan={true} /> */}
    </>
  );
}
