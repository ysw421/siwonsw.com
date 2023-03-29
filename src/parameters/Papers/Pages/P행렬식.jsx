import styles from './Pages.module.css';
import { MainText, Line, Height50, MovieDiv } from './useful';
import { MathComponent } from 'mathjax-react';
import { useState, useEffect } from 'react';
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
      <>
        <MathComponent tex={String.raw`(2 \times 2)`} display={false} />
        <MainText text=" 모양의 행렬의 행렬식을 먼저 구해봅시다." isSpan={true} />
        <Height50 num="0" />
        <MainText text="행렬 " isSpan={true} />
        <MathComponent tex={String.raw`A\ (\mathbb{R}^{2\times2})`} display={false} />
        <MainText text="가 있습니다." isSpan={true} />
        <MathComponent
          tex={String.raw`A = \left[ \begin{array}{clr} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right]`}
          display={true}
        />
        <MathComponent tex={String.raw`A`} display={false} />
        <MainText text="의 행렬식은 " isSpan={true} />
        <MathComponent tex={String.raw`det(A)`} display={false} />
        <MainText text=" 또는 " isSpan={true} />
        <MathComponent
          tex={String.raw`\left| \begin{array}{clr} a_{11} & a_{12} \\ a_{21} & a_{22} \end{array} \right|`}
          display={false}
        />
        <MainText text="로 표현합니다. " isSpan={true} />
      </>
    </>
  );
}
