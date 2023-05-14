import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';
import { MathComponent } from 'mathjax-react';
import { useNavigate } from 'react-router-dom';

export default function P가우스_소거법(props) {
  const navigate = useNavigate();
  function goBack(url) {
    navigate('/' + url);
  }

  return (
    <>
      두 개 이상의 방정식에서 공통된 해를 찾고 싶을 때 연립 방정식을 사용합니다.
      <>
        <Height50 num="20px" />
        <MathComponent tex={String.raw`x_1 + 5x_2 - 2x_3 = 12`} display={true} />
        <MathComponent tex={String.raw`-2x_1 + 3x_2 + 4x_3 = 2`} display={true} />
        <MathComponent tex={String.raw`4x_1 + x_2 + 3x_3 = 21`} display={true} />
        <Height50 num="20px" />
      </>
      위 연립 방정식은 연립 일차 방정식입니다. 미지수 3개,{' '}
      <MathComponent tex={String.raw`x_1, x_2, x_3`} display={false} />가 존재합니다. 연립 일차 방정식은 행렬의 곱셈으로
      나타낼 수 있습니다.
      <>
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`\left[\begin{array}{clr} 1 & 5 & -2 \\ -2 & 3 & 4 \\ 4 & 1 & 3 \end{array} \right] \left[ \begin{array}{clr} x_1 \\ x_2 \\ x_3 \end{array} \right] = \left[ \begin{array}{clr} 12 \\ 2 \\ 21 \end{array} \right]`}
          display={true}
        />
        <Height50 num="20px" />
      </>
      <a href="paper/행렬">
        <MainText text="이전 노드" isSpan={true} />
      </a>
      에서 알아보았듯이, 행렬의 곱은 각 행의 원소와 열의 원소의 곱을 더하여 계산합니다. 이 사실을 통해 연립 일차
      방정식과 행렬은 같은 것임을 알 수 있습니다.
      <Height50 num="70px" />
      가우스 소거법을 사용하면 위 행렬의 해를 쉽게 구할 수 있습니다. 가우스 소거법은 행렬을 행사다리꼴행렬(Row Echelon
      Form, REF)로 표현하는 방법입니다. 먼저 Row Echelon From에 대하여 알아보겠습니다.
      <MathComponent
        tex={String.raw`\left[ \begin{array}{cc} 4 & 0 & 0 & 0 & 0 & 0 \\
          0 & 2 & 1 & 0 & 8 & 3 \\ 0 & 0 & 0 & -3 & 2 & 8 \\
          0 & 0 & 0 & 0 & 3 & -9 \\ 0 & 0 & 0 & 0 & 0 & 0  \end{array} \right]`}
        display={true}
      />
      <Height50 num="200px" />
      <MainText text="연립일차방정식은 행렬의 곱셈으로 나타낼 수 있습니다. 일반적으로 변수 " isSpan={true} />
      <MathComponent tex={String.raw`a`} display={false} />
      <MainText text="개의 값을 구하기 위해서는 식 또한 " isSpan={true} />
      <MathComponent tex={String.raw`a`} display={false} />
      <MainText text="개가 필요합니다. 예를들어 아래 변수 3개, " isSpan={true} />
      <MathComponent tex={String.raw`x_1, x_2, x_3`} display={false} />
      <MainText text="을 가진 식 3개를 행렬로 나타내어 봅시다." isSpan={true} />
      <Height50 num="20px" />
      <MathComponent tex={String.raw`x_1 + 5x_2 - 2x_3 = 12`} display={true} />
      <MathComponent tex={String.raw`-2x_1 + 3x_2 + 4x_3 = 2`} display={true} />
      <MathComponent tex={String.raw`4x_1 + x_2 + 3x_3 = 21`} display={true} />
      <Height50 num="20px" />
      <span onClick={() => goBack('paper/행렬')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
        <MainText text="이전 노드" isSpan={true} />
      </span>
      <MainText
        text="에서 알아보았듯이, 행렬의 곱은 각 행의 원소와 열의 원소의 곱을 더하여 계산합니다. 이 사실을 이용하여 위 식을 행렬로 나타내었습니다."
        isSpan={true}
      />
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{clr} 1 & 5 & -2 \\ -2 & 3 & 4 \\ 4 & 1 & 3 \end{array} \right] \left[ \begin{array}{clr} x_1 \\ x_2 \\ x_3 \end{array} \right] = \left[ \begin{array}{clr} 12 \\ 2 \\ 21 \end{array} \right]`}
        display={true}
      />
      <Height50 num="20px" />
      {/* <MainText
        text=""
        isSpan={true}
      />
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{ccc|c} 1 & 5 & -2 & x_1\\ -2 & 3 & 4 & x_2\\ 4 & 1 & 3 & x_3\end{array} \right] = \left[ \begin{array}{clr} 12 \\ 2 \\ 21 \end{array} \right]`}
        display={true}
      /> */}
      <MainText text="그렇다면, " />
    </>
  );
}
