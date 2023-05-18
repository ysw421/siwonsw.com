import { MainText, Line, Height50, MovieDiv, Box } from './useful';

function standard(props) {
  return (
    <>
      <>
        <MainText text="구조" fontSize="1.7rem" />
        <Line isDarkMode={props.isDarkMode} />
        <Height50 num="20px" />
      </>

      <>
        <MovieDiv alt="용아맥" src="/img/Page/Page6/용아맥.jpg" />
      </>

      <>
        <Box text="⚠️ 스포 주의! 저의 생각일 뿐 주의!" isDarkMode={props.isDarkMode} />
      </>
      <>
        {/* 주석 풀기! */}
        {/* <a href="paper/행렬" className={styles.a}> */}
        <MainText text="이전 노드" isSpan={true} />
        {/* </a> */}
      </>
    </>
  );
}
