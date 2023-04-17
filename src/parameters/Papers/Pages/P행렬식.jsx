import styles from './Pages.module.css';
import { MainText, Line, Height50, MovieDiv } from './useful';
import { MathComponent } from 'mathjax-react';
import { useNavigate } from 'react-router-dom';

export default function Page14(props) {
  const navigate = useNavigate();
  function goBack(url) {
    navigate('/' + url);
  }

  return (
    <>
      {/* 초입 */}
      <>
        <a onClick={() => goBack('paper/행렬')} style={{ cursor: 'pointer', textDecoration: 'underline' }}>
          <MainText text="이전 노드" isSpan={true} />
        </a>
        <MainText
          text="의 역행렬 부분서, 오브젝트를 통해 역행렬을 확인해 보면 '역행렬이 존재하지
      않습니다.'라고 나오는 경우가 있습니다. (예컨대, "
          isSpan={true}
        />
        <MathComponent
          tex={String.raw`A = \left[\begin{array}{ccc} 1 & -1 & -2 \\ 2 & 4 & 5 \\ 6 & 0 & -3 \end{array} \right]`}
          display={false}
        />
        <MainText
          text=") 이는 모든 정사 행렬에 역행렬이 존재하는 것은 아님을 뜻합니다. 그렇다면, 역행렬의 존재 여부를
           어떻게 알 수 있을까요? 이를 알 수 있는 방법, 행렬식에 대하여 알아봅시다."
          isSpan={true}
        />
      </>
      <Height50 num="70px" />
      {/* 2*2 행렬식 */}
      <>
        <MathComponent tex={String.raw`(2 \times 2)`} display={false} />
        <MainText text=" 모양의 행렬의 행렬식을 먼저 구해봅시다." isSpan={true} />
        <Height50 num="0" />
        <MainText text="행렬 " isSpan={true} />
        <MathComponent tex={String.raw`A\ (\mathbb{R}^{2\times2})`} display={false} />
        <MainText text="가 있습니다." isSpan={true} />
        <MathComponent
          tex={String.raw`A = \left[ \begin{array}{cc} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right]`}
          display={true}
        />
        <Height50 num="20px" />
        <MathComponent tex={String.raw`A`} display={false} />
        <MainText text="의 행렬식은 " isSpan={true} />
        <MathComponent tex={String.raw`det(A)`} display={false} />
        <MainText text=" 또는 " isSpan={true} />
        <MathComponent
          // tex={String.raw`\left| \begin{array}{cc} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right|`}
          tex={String.raw`\left| A \right|`}
          display={false}
        />
        <MainText text="(절대값이 아닙니다)로 표현합니다. " isSpan={true} />
        <MathComponent tex={String.raw`det(A)`} display={false} />
        <MainText text="의 값을 구해봅시다. " isSpan={true} />
        <MathComponent tex={String.raw`A`} display={false} />
        <MainText text="의 역행렬을 행렬 " isSpan={true} />
        <MathComponent tex={String.raw`\lambda B`} display={false} />
        <MainText text="(" isSpan={true} />
        <MathComponent tex={String.raw`\lambda`} display={false} />
        <MainText text="는 스칼라값, " isSpan={true} />
        <MathComponent tex={String.raw`B`} display={false} />
        <MainText text="는 행렬입니다)라고 하면 다음을 만족해야 합니다." isSpan={true} />
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`\lambda \left[ \begin{array}{cc} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right]
          \left[ \begin{array}{cc} b_{11} & b_{12} \\ b_{21} & b_{22} \end{array} \right]
          = \left[ \begin{array}{cc} 1 & 0 \\ 0 & 1 \end{array} \right]`}
          display={true}
        />
        <Height50 num="20px" />
        <MainText text="행렬 곱의 방법을 생각하면 아래 또한 성립합니다." isSpan={true} />
        <Height50 num="20px" />
        <MathComponent tex={String.raw`a_{11}\times b_{11} + a_{12}\times b_{21} = \frac{1}{\lambda}`} display={true} />
        <MathComponent tex={String.raw`a_{11}\times b_{12} + a_{12}\times b_{22} = 0`} display={true} />
        <MathComponent tex={String.raw`a_{21}\times b_{11} + a_{22}\times b_{21} = 0`} display={true} />
        <MathComponent tex={String.raw`a_{21}\times b_{12} + a_{22}\times b_{22} = \frac{1}{\lambda}`} display={true} />
        <Height50 num="20px" />
        <MainText text="위 조건을 만족하기 위해 " isSpan={true} />
        <MathComponent tex={String.raw`a_{11}\times b_{11} + a_{12}\times b_{21}`} display={false} />
        <MainText text="와 " isSpan={true} />
        <MathComponent tex={String.raw`a_{21}\times b_{12} + a_{22}\times b_{22}`} display={false} />
        <MainText text="는 값이 같아야 하며 0이 아니어야 합니다. 또한 " isSpan={true} />
        <MathComponent tex={String.raw`a_{11}\times b_{12} + a_{12}\times b_{22}`} display={false} />
        <MainText text="와 " isSpan={true} />
        <MathComponent tex={String.raw`a_{21}\times b_{11} + a_{22}\times b_{21}`} display={false} />
        <MainText text="가 0임을 주목합시다. 행렬 " isSpan={true} />
        <MathComponent tex={String.raw`A`} display={false} />
        <MainText text="의 원소는 모두 상수이며, 값을 바꿀 수 없습니다. 우리는 행렬 " isSpan={true} />
        <MathComponent tex={String.raw`B`} display={false} />
        <MainText
          text="의 원소를 구해야 합니다. 하지만 위 식은 4항 4차 방정식으로, 값을 구하기 위해 가우스 소거법 등을 사용는 것이 일반적입니다.
          그래서, 행렬식의 해를 보여드리겠습니다."
          isSpan={true}
        />
        <MathComponent
          tex={String.raw`B = \left[ \begin{array}{cc} a_{22} & -a_{12} \\ -a_{21} & a_{11} \end{array} \right]`}
          display={true}
        />
        {/* <Height50 num="0px" /> */}
        <MathComponent
          tex={String.raw`\left[ \begin{array}{cc} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right]
          \left[ \begin{array}{cc} a_{22} & -a_{12} \\ -a_{21} & a_{11} \end{array} \right]
          = \frac{1}{\lambda} \left[ \begin{array}{cc} 1 & 0 \\ 0 & 1 \end{array} \right]`}
          display={true}
        />
        <MathComponent
          tex={String.raw`= \left[ \begin{array}{cc} a_{11}a_{22}-a_{12}a_{21} & 0 \\ 0 & a_{11}a_{22}-a_{12}a_{21} \end{array} \right]`}
          display={true}
        />
        <Height50 num="20px" />
        <MainText text="이는 연립방정식의 조건을 모두 만족합니다. 또한 " isSpan={true} />
        <MathComponent tex={String.raw`\lambda = a_{11}a_{22}-a_{12}a_{21}`} display={false} />
        <MainText text="입니다. 위 행렬에서 " isSpan={true} />
        <MathComponent tex={String.raw`\lambda`} display={false} />
        <MainText
          text="는 분모의 값이므로 0이 될 수 없습니다. 바로 이 식이 행렬식입니다! 행렬식이 0이 되면 해당 행렬은 역행렬이 존재하지 않습니다."
          isSpan={true}
        />
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`det(A) = a_{11}a_{22}-a_{12}a_{21}, (A \in \mathbb{R}^{2\times2})`}
          display={true}
        />
        <Height50 num="20px" />
        <MainText text="예컨대, 행렬 " isSpan={true} />
        <MathComponent
          tex={String.raw`A = \left[\begin{array}{cc} 3 & 6 \\ 2 & 4 \end{array} \right]`}
          display={false}
        />
        <MainText text="는 행렬식의 값이 0이므로 역행렬이 존재하지 않습니다." isSpan={true} />
        <Height50 num="20px" />
        <MathComponent tex={String.raw`det(A) = 3\times4-6\times2 = 0`} display={true} />
        <Height50 num="20px" />
        <MainText
          text="행렬의 크기가 달라지면 행렬식 또한 달라집니다. 그렇다면, 다른 크기의 행렬 또한 이처럼 복잡한 과정을 통해 구해야 할까요?
        아닙니다. 라폴라스 전개를 통해 쉽게 구할 수 있습니다. 라폴라스 전개에 대하여 알아봅시다."
          isSpan={true}
        />
      </>
      <Height50 num="70px" />
      <>
        <Line isDarkMode={props.isDarkMode} />
        <MainText text="라폴라스 전개 (Laplace expansion)" fontSize="1.7rem" />
        <Height50 num="20px" />
        <MainText text="라폴라스 전개를(또는 코팩터 전개라고 불림) 이용하여 " />
      </>
    </>
  );
}
