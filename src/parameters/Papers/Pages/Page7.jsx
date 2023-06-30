import styles from './Pages.module.css';
import { MainText, Height50, Line, Box } from './useful';
import GoMindMaps from '../../GoMindMaps/GoMindMaps';
import { MathComponent } from 'mathjax-react';

export default function Page7(props) {
  return (
    <>
      해당 글에서는 대수학에 대하여 간단히 알아보고, 선형 대수학의 정의를 소개합니다.
      <Height50 num="60px" />
      <MainText text="대수학" fontSize="1.7rem" />
      <Line isDarkMode={props.isDarkMode} />
      선형 대수학을 알아보기 전, 대수학의 정의를 알아봅시다. 대수학의 사전적 정의는 아래와 같습니다.
      <Height50 num="20px" />
      <Box
        text="일련의 공리들을 만족하는 수학적 구조들의 일반적인 성질을 연구하는 수학의 한 분야"
        isDarkMode={props.isDarkMode}
      />
      <Height50 num="80px" />
      예를 들어 보겠습니다.
      <br />
      실수 평면에서의 아래와 같은 방정식이 있습니다.
      <Height50 num="20px" />
      <MathComponent tex={String.raw`5x^2+7x-9`} />
      <MathComponent tex={String.raw`-2x^2+3x+2`} />
      <Height50 num="40px" />이 방정식들의 해는 어떻게 구할 수가 있을까요?
      <Height50 num="20px" />
      <MathComponent tex={String.raw`x=\frac{-b\pm\sqrt {b ^{2} -4ac}}{2a}`} />
      <Height50 num="20px" />
      식을 완전 제곱식으로 전환하여 해를 구할 수도 있으나, 중학생때 저희는 위와 같은 근의 공식을 배웠습니다. 근의 공식은 특정한 상황이 아닌 모든 이차방정식에서 성립합니다. 즉, 이차방정식의 계수를 변수로 나타내어 일반적인 성질을 찾았습니다.
      이처럼 수학적 구조들의 일반적인 성질을 연구하는 수학의 분야가 '대수학'입니다.
      <Height50 num="140px" />
      <MainText text="선형 대수학(Linear algebra)" fontSize="1.7rem" />
      <Line isDarkMode={props.isDarkMode} />
      선형 대수학은 벡터, 행렬등을 연구하는 대수학 한 분야입니다.
      <br />
      선형은 가산성과 동차성을 만족합니다.
      <Height50 num="20px" />
      <MathComponent tex={String.raw`f(x_{1}+x_{2}) = f(x_{1}) + f(x_{2})`} />
      <MathComponent tex={String.raw`f(\lambda x) = \lambda f(x)`} />
      <Height50 num="20px" />
      즉 원점을 지나며 <MathComponent tex={String.raw`Ax`} display={false} />
      꼴로 표현할 수 있습니다.
      <br />
      <a href="paper/행렬">
        <MainText text="다음 노드" isSpan={true} />
      </a>
      에서 소개할 행렬 또한 위 조건을 만족합니다. 행렬에서 차원(dimension)은 매우 중요한 개념인데, 선형 대수학에서는
      대수학적 관점에서 다차원에 대하여 식을 일반화하는 경우가 많습니다. 우리의 눈은 3차원 세상을 봅니다. 또한 '시간이
      흐른다'는 개념을 통해 4차원을 이해할 수 있습니다. 하지만 5차원, 그리고 그 이상의 차원을 상상하기란 쉽지 않죠. 사실
      3, 4차원 또한 직관적 이해가 어렵습니다.(3차원, 4차원 좌표평면에 그려진 그래프를 생각해봅시다) 중, 고등학교
      수학에서 우리는 2차원에 대한 식을 통해 직관적(시각적) 이해가 가능했습니다. 예컨대 삼각함수를 배우며, 2차원 공간에
      원을 그려 이해하였죠. 비단 차원에 대하여 일반화한 선형 대수학에서는 2차원에 대한 직관적 이해를 통해 다차원을
      사고적으로 이해하여야 합니다. 다차원에 대하여 직관적 이해가 불가능하다는 점은 선형 대수학이 어렵게 느껴지는
      이유이며, 또한 매력이라고 생각합니다. 해당 카테고리에선 직관적 이해를 돕기 위한 시각화된 그래프 및 상호작용이
      가능한 오브젝트를 사용 할 예정입니다. 이를 통하여 보다 직관적 이해를 늘리고 선형 대수학에 대한 흥미를 높이는 것이
      목표입니다.
      <br />
      <br />
      <br />
      아래 노드에서 선형 대수학에 대하여 더 자세히 알아봅시다.
      <Height50 num="40px" />
      <GoMindMaps type="math" />
    </>
  );
}
