import styles from './Pages.module.css';
import { MainText, Height50, Line, Box } from './useful';
import GoMindMaps from '../../GoMindMaps/GoMindMaps';
import { MathComponent } from 'mathjax-react';

export default function Page7(props) {
  return (
    <>
      <MainText text="해당 글에서는 대수학에 대하여 간단히 알아보고, 선형 대수학의 정의를 소개합니다." />
      <Height50 num="60px" />
      <MainText text="대수학" fontSize="1.7rem" />
      <Line isDarkMode={props.isDarkMode} />
      <MainText text="선형 대수학을 알아보기 전, 대수학의 정의를 알아봅시다. 대수학의 사전적 정의는 아래와 같습니다." />
      <Height50 num="20px" />
      <Box
        text="일련의 공리들을 만족하는 수학적 구조들의 일반적인 성질을 연구하는 수학의 한 분야"
        isDarkMode={props.isDarkMode}
      />
      <Height50 num="80px" />
      <MainText text="예를 들어 보겠습니다." />
      <MainText text="실수 평면에서의 아래와 같은 방정식이 있습니다." />
      <Height50 num="20px" />
      <center style={{ fontSize: '1rem' }}>
        <MathComponent tex={String.raw`5x^2+7x-9`} />
        <MathComponent tex={String.raw`-2x^2+3x+2`} />
      </center>
      <Height50 num="40px" />
      <MainText text="이 방정식들의 해는 어떻게 구할 수가 있을까요?" />
      <Height50 num="20px" />
      <center style={{ fontSize: '1.2rem' }}>
        <MathComponent tex={String.raw`x=\frac{-b\pm\sqrt {b ^{2} -4ac}}{2a}`} />
      </center>
      <Height50 num="40px" />
      <MainText
        text="바로 위와 같이 근의 공식을 사용하면 됩니다. 여러 방정식의 계수를 변수로 나타내어 일반적인 성질을 찾았습니다.
        이처럼 수학적 구조들의 일반적인 성질을 연구하는 수학의 분야가 '대수학'입니다."
      />
      <Height50 num="140px" />
      <MainText text="선형 대수학(Linear algebra)" fontSize="1.7rem" />
      <Line isDarkMode={props.isDarkMode} />
      <MainText text="선형 대수학은 벡터, 행렬등을 연구하는 대수학 한 분야입니다." />
      <MainText text="아래 노드에서 선형 대수학에 대하여 더 자세히 알아봅시다." />
      <Height50 num="40px" />
      <GoMindMaps type="math" />
    </>
  );
}
