import styles from './Pages.module.css';
import { Height50, MovieDiv, Line, MainText } from './useful';

export default function Page1(props) {
  return (
    <>
      ↑ 위 &#39;&lt; <span style={{ fontFamily: 'font1', fontSize: '20px' }}>프로그래밍 마인드맵</span>
      &#39;을 클릭하여 프로그래밍 마인드맵을 볼 수 있습니다. 프로그래밍 마인드맵에서 이 페이지로 다시 돌아오기 위해서는
      브라우저에서 지원하는 돌아가기 버튼을 사용할 수 있습니다. 돌아가기 버튼은 어떻게 구현할 수 있을까요? 스택(stack)에
      대하여 알아봅시다.
      <Height50 num="100px" />
      스택은 선형 자료 구조로, 배열과 유사합니다. 하지만 차이점이 있습니다. 배열은 원하는 위치에 데이터를 삽입하고
      출력할 수 있지만, 스택은 제일 마지막에 삽입된 데이터가 제일 먼저 출력된다는 점입니다. 이를 LIFO(Last-In
      First-Out)라고 합니다.
      <Height50 />
      <MovieDiv alt="stack" src="/img/Page/stack/stack.svg" />
      <Height50 />
      사실 스택은 배열로 구현 가능하지만 스택은 배열과 달리 출력시 상수 시간이 걸린다는 장점이 있습니다. 즉 스택에
      적합한 상황이라면, 배열보다 더 빠른 계산이 가능합니다. 흔히 스택에서 사용되는 명령어를 알아봅시다.
      <Height50 />
      <MainText text="push()" fontSize="1.7rem" />
      <Line isDarkMode={props.isDarkMode} />
      <Height50 num="1px" />
      push는 스택에 데이터를 추가하는 명령어입니다. stack1.push(421)과 같이 데이터를 매개변수로 가집니다.
    </>
  );
}
