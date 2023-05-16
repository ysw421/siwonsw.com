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
        <MathComponent tex={String.raw`x_1 + 2x_2 - 3x_3 = 5`} display={true} />
        <MathComponent tex={String.raw`3x_1 - 2x_2 - 5x_3 = 3`} display={true} />
        <MathComponent tex={String.raw`-2x_1 + 3x_2 + 4x_3 = 2`} display={true} />
        <Height50 num="20px" />
      </>
      위 연립 방정식은 연립 일차 방정식입니다. 미지수 3개,{' '}
      <MathComponent tex={String.raw`x_1, x_2, x_3`} display={false} />가 존재합니다. 연립 일차 방정식은 행렬의 곱셈으로
      나타낼 수 있습니다.
      <>
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`\left[\begin{array}{cc} 1 & 2 & -3 \\ 3 & -2 & -5 \\ -2 & 3 & 4 \end{array} \right] \left[ \begin{array}{cc} x_1 \\ x_2 \\ x_3 \end{array} \right] = \left[ \begin{array}{cc} 5 \\ 3 \\ 2 \end{array} \right]`}
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
      위 <MathComponent tex={String.raw`x_1, x_2, x_3`} display={false} />를 구하는 방법에는 여러 방법이 존재하겠지만,
      가우스 소거법을 활용하여 해를 구하는 방법을 소개합니다. 가우스 소거법은 행렬을 행사다리꼴(Row Echelon Form, REF)
      행렬로 표현하는 방법입니다. 먼저 Row Echelon Form에 대하여 알아보겠습니다.
      <Height50 num="20px" />
      <div style={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)', zIndex: '-5', margin: '19px 0' }}>
        <div style={{ width: '222px', height: '148', display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
          <div className={styles.rowEchelonFormBox} style={{ width: '100%' }}></div>
          <div className={styles.rowEchelonFormBox} style={{ width: '87%' }}></div>
          <div className={styles.rowEchelonFormBox} style={{ width: '55%' }}></div>
          <div className={styles.rowEchelonFormBox} style={{ width: '33.2%' }}></div>
          {/* <div className={styles.rowEchelonFormBox} style={{ width: '16.6%' }}></div> */}
        </div>
      </div>
      <MathComponent
        tex={String.raw`\left[\begin{array}{cc} 4 & 0 & 0 & 7 & 9 & 0 \\
          0 & 2 & 1 & 0 & 8 & 3 \\ 0 & 0 & 0 & -3 & 2 & 8 \\
          0 & 0 & 0 & 0 & 3 & -9 \\ 0 & 0 & 0 & 0 & 0 & 0  \end{array}\right]`}
        display={true}
      />
      <Height50 num="20px" />
      Row Echelon Form은 다음 조건을 만족하여야 합니다.
      <br />
      <blockquote>
        1. 0으로만 구성된 행은 제일 아래 위치합니다.
        <br />
        2. 가장 왼편에 존재하는 0이 아닌 원소는 윗 행렬보다 아래 행렬이 오른쪽에 존재합니다.
      </blockquote>
      즉 계단 모양입니다. (개인적으로 행사다리꼴 모양이라 말하기에는 무리가 있다고 생각합니다.🤣)
      <br />
      가장 왼편에 존재하는 0이 아닌 원소를 피봇(pivot)이라고 부릅니다.
      <Height50 num="60px" />
      위에서 예로 든 연립 일차 방정식을 가우스 소거법을 활용하여 Row Echelon Form으로 변환하고 해를 구해봅시다. 우선, 윗
      행렬 방정식을 첨가 행렬로 나타냅니다. 행렬 방정식 <MathComponent tex={String.raw`AX = B`} display={false} />를
      첨가 행렬을 활용하여 다음과 같이 표현할 수 있습니다.
      <Height50 num="20px" />
      <MathComponent tex={String.raw`A|B = X`} display={true} />
      <Height50 num="20px" />
      위에서 예로 든 연립 일차 방정식을 첨가 행렬로 나타내면 아래와 같습니다.
      <>
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 3&-2&-5&3 \\ -2&3&4&2 \end{array} \right] = \left[ \begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array} \right]`}
          display={true}
        />
        <Height50 num="20px" />
      </>
      각 행을 <MathComponent tex={String.raw`R_{1}, R_{2}, R_{3}`} display={false} />로 표현하겠습니다.
      <>
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 3&-2&-5&3 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} :R_1 \\ :R_2 \\ :R_3 \end{array}`}
          display={true}
        />
        <Height50 num="20px" />
      </>
      <MathComponent tex={String.raw`R_{2}`} display={false} />
      행에 <MathComponent tex={String.raw`3R_{1}`} display={false} />을 뺀 후, -8로 나눕니다. 이 과정을 통해{' '}
      <MathComponent tex={String.raw`R_{1}, R_{2}`} display={false} />에 대하여 Row Echelon Form으로 만들었습니다. 또한
      -8로 나눔으로써 pivot을 1로 만들었습니다. pivot을 1로 나눈 이유는 아래 행(
      <MathComponent tex={String.raw`R_{3}`} display={false} />
      )을 보다 쉽게 계산하기 위함입니다.
      <div>
        <div>
          <Height50 num="20px" />
          <div style={{ transform: 'translateX(31px)' }}>
            <MathComponent
              tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 3&-2&-5&3 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} ㅤ\\: -3R_1\\ㅤ \end{array}`}
              display={true}
            />
          </div>
          <div style={{ transform: 'translateX(21px)' }}>
            <MathComponent
              tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&-8&4&-12 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} ㅤ\\: \div8\\ㅤ \end{array}`}
              display={true}
            />
          </div>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ -2&3&4&2 \end{array} \right]`}
            display={true}
          />
          <Height50 num="20px" />
        </div>
      </div>
      <MathComponent tex={String.raw`R_{3}`} display={false} />
      행에 <MathComponent tex={String.raw`2R_{1}`} display={false} />을 더한 후,{' '}
      <MathComponent tex={String.raw`7R_{2}`} display={false} />을 빼줍니다.
      <>
        <Height50 num="20px" />
        <div style={{ transform: 'translateX(33px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} ㅤ\\ㅤ\\:+2R_1 \end{array}`}
            display={true}
          />
        </div>
        <div style={{ transform: 'translateX(33px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ 0&7&-2&12 \end{array} \right]\begin{array}{c} ㅤ\\ㅤ\\:-7R_2 \end{array}`}
            display={true}
          />
        </div>
        <MathComponent
          tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ 0&0&3\over2&-{17\over2} \end{array} \right]`}
          display={true}
        />
        <Height50 num="20px" />
      </>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> 우선 각 행을 <MathComponent tex={String.raw`R_{1}, R_{2}, R_{3}`} display={false} />로 표시하겠습니다.
      <>
        <Height50 num="20px" />
        <MathComponent
          tex={String.raw`\left[\begin{array}{cc} 1 & 2 & -3 \\ 3 & -2 & -5 \\ -2 & 3 & 4 \end{array} \right] \left[ \begin{array}{cc} x_1 \\ x_2 \\ x_3 \end{array} \right] = \left[ \begin{array}{cc} 5 \\ 3 \\ 2 \end{array} \right] \begin{array}{cc} :R_1 \\ :R_2 \\ :R_3 \end{array}`}
          display={true}
        />
        <Height50 num="20px" />
      </>
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
