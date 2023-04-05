import { MainText, Line, Height50, MovieDiv } from './useful';

function standard(props) {
  return (
    <>
      <Line isDarkMode={props.isDarkMode} />
      <MainText text="구조" fontSize="1.7rem" />
      <Height50 num="20px" />
    </>
  );
}
