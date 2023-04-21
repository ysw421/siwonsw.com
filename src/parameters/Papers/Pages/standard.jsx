import { MainText, Line, Height50, MovieDiv } from './useful';

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
    </>
  );
}
