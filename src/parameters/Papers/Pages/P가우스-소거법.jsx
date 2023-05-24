import styles from './Pages.module.css';
import { MainText, Height50, Line } from './useful';
import { MathComponent } from 'mathjax-react';

export default function P가우스_소거법(props) {
  return (
    <>
      가우스 소거법은 선형 연립 방정식을 푸는 대표적인 방법입니다. 식의 해를 구하는 과정은 중, 고등학교를 넘어
      수학이라는 학문에서 중요한 역할을 합니다. 이를 생각해보면, 가우스 소거법의 중요성을 이해할 수 있을 것입니다. 우선
      가우스 소거법을 알아본 후, 연립 일차 방정식을 가우스 소거법을 활용하여 풀어봅시다. 추가로 역행렬을 가우스 소거법을
      활용하여 구해볼 것입니다.
      <Height50 num="40px" />
      <Line isDarkMode={props.isDarkMode} />
      <Height50 num="40px" />
      가우스 소거법은 행렬을 행사다리꼴(Row Echelon Form, REF) 행렬로 표현하는 방법입니다. 먼저 Row Echelon Form에
      대하여 알아보겠습니다.
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
      즉 계단 모양입니다. (개인적으로 행사다리꼴 모양이라 말하기 어렵다고 생각합니다.🤣)
      <br />
      가장 왼편에 존재하는 0이 아닌 원소를 피봇(pivot)이라고 부릅니다.
      <Height50 num="40px" />
      <Line isDarkMode={props.isDarkMode} />
      <Height50 num="40px" />두 개 이상의 방정식에서 공통된 해를 찾고 싶을 때 연립 방정식을 사용합니다.
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
      <a href="paper/행렬" className={styles.a}>
        <MainText text="이전 노드" isSpan={true} />
      </a>
      에서 알아보았듯이, 행렬의 곱은 각 행의 원소와 열의 원소의 곱을 더하여 계산합니다. 이 사실을 통해 윗 연립 일차
      방정식과 행렬은 같음을 알 수 있습니다.
      <Height50 num="70px" />
      위 <MathComponent tex={String.raw`x_1, x_2, x_3`} display={false} />를 구하는 방법에는 여러 방법이 존재하겠지만,
      가우스 소거법을 활용하여 해를 구해봅시다. 위에서 예로 든 연립 일차 방정식을 Row Echelon Form으로 변환합니다. 우선,
      윗 행렬 방정식을 첨가 행렬(Augmented Matrix)로 나타냅니다. 행렬 방정식{' '}
      <MathComponent tex={String.raw`AX = B`} display={false} />를 첨가 행렬을 활용하여 다음과 같이 표현할 수 있습니다.
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
      <>
        <Height50 num="20px" />
        <div style={{ transform: 'translateX(31px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 3&-2&-5&3 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} ㅤ\\: -3R_1\\ㅤ \end{array}`}
            display={true}
          />
        </div>
        <div style={{ transform: 'translateX(21px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&-8&4&-12 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} ㅤ\\: \div-8\\ㅤ \end{array}`}
            display={true}
          />
        </div>
        <div style={{ transform: 'translateX(33px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ -2&3&4&2 \end{array} \right]\begin{array}{c} ㅤ\\ㅤ\\:+2R_1 \end{array}`}
            display={true}
          />
        </div>
        <Height50 num="20px" />
      </>
      <MathComponent tex={String.raw`R_{3}`} display={false} />
      행에 <MathComponent tex={String.raw`2R_{1}`} display={false} />을 더한 후,{' '}
      <MathComponent tex={String.raw`7R_{2}`} display={false} />을 빼줍니다.
      <>
        <Height50 num="20px" />
        <div style={{ transform: 'translateX(33px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ 0&7&-2&12 \end{array} \right]\begin{array}{c} ㅤ\\ㅤ\\:-7R_2 \end{array}`}
            display={true}
          />
        </div>
        <div style={{ transform: 'translateX(25px)' }}>
          <MathComponent
            tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ 0&0&3\over2&3\over2 \end{array} \right]\begin{array}{c} ㅤ\\ㅤ\\:\times {2\over3} \end{array}`}
            display={true}
          />
        </div>
        <Height50 num="20px" />
      </>
      <MathComponent tex={String.raw`R_{3}`} display={false} />
      행에 <MathComponent tex={String.raw`2\over3`} display={false} />를 곱하여 모든 pivot을 1로 만들 수 있습니다.
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{ccc|c} 1&2&-3&5 \\ 0&1&-{1\over2}&3\over2 \\ 0&0&1&1 \end{array} \right]\begin{array}{c} \end{array}`}
        display={true}
      />
      <Height50 num="20px" />
      이와 같이 모든 pivot이 1인 Row Echelon Form을 Reduced Row Echelon Form라고 합니다. 위 식은 항등 행렬로 변환
      가능함을 알 수 있습니다. 과정을 생략하여 항등 행렬로 변환하면 아래와 같습니다.
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{ccc|c} 1&0&0&4 \\ 0&1&0&2 \\ 0&0&1&1 \end{array} \right]\begin{array}{c} \end{array} = \left[\begin{array}{c} x_1 \\ x_2 \\ x_3 \end{array} \right]`}
        display={true}
      />
      <MathComponent
        tex={String.raw`\left[\begin{array}{ccc} 1&0&0\\0&1&0\\0&0&1 \end{array} \right]\left[\begin{array}{c} x_1\\x_2\\x_3 \end{array} \right]=\left[\begin{array}{c} 4\\2\\1 \end{array} \right]`}
        display={true}
      />
      <Height50 num="20px" />
      따라서 <MathComponent tex={String.raw`x_1 = 4, x_2=2, x_1=1`} display={false} />
      임을 알 수 있습니다.
      <Height50 num="40px" />
      <Line isDarkMode={props.isDarkMode} />
      <Height50 num="40px" />
      추가로 가우스 소거법을 활용하여 역행렬을 구해봅시다.
      <br />
      행렬 <MathComponent tex={String.raw`A`} display={false} />가 있습니다. 이 행렬은 정사각행렬이며, 역행렬이
      존재합니다. (
      <a href="paper/행렬식" className={styles.a}>
        <MainText text="행렬식" isSpan={true} />
      </a>
      )
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`A=\left[\begin{array}{cccc} 4&0&1&2\\1&4&2&0\\0&1&4&2\\2&2&0&4 \end{array}\right]`}
        display={true}
      />
      <Height50 num="20px" />
      행렬을 역행렬과 곱할 경우, 항등 행렬이 됩니다.
      <Height50 num="20px" />
      <MathComponent tex={String.raw`AA^{-1}=I_{n}`} display={true} />
      <Height50 num="20px" />
      이를 Augmented Matrix로 표현하면 아래와 같습니다.
      <Height50 num="20px" />
      <MathComponent tex={String.raw`[A|I_{n}] = A^{-1} \rightarrow [I_{n}|A^{-1}] = A`} display={true} />
      <Height50 num="20px" />
      우리는 왼쪽 방정식을 오른쪽 방정식으로 변환할 것입니다. Augmented Matrix의 왼쪽의{' '}
      <MathComponent tex={String.raw`A`} display={false} />를 가우스 소거법을 활용하여 항등 행렬로 나타냅니다.
      결과적으로 Augmented Matrix의 항등행렬은 역행렬로 변환됩니다. 위에서와 같이 우항은 신경쓰지 않겠습니다. (우리의
      목표는 역행렬을 구하는 것입니다. 우항의 결과값은 처음 행렬과 같습니다.)
      <br />
      <MathComponent tex={String.raw`A`} display={false} />의 역행렬을 위와 같은 방법으로 구해봅시다.
      <Height50 num="20px" />
      <MathComponent
        tex={String.raw`\left[\begin{array}{cccc|cccc} 4&0&1&2&1&0&0&0\\1&4&2&0&0&1&0&0\\0&1&4&2&0&0&1&0\\2&2&0&4&0&0&0&1 \end{array}\right]\rightarrow
        \left[\begin{array}{cccc|cccc} 1&0&0&0&8\over29&2\over29&-{3\over29}&-{5\over58}\\0&1&0&0&-{3\over29}&13\over58&-{5\over58}&11\over116\\0&0&1&0&2\over29&1\over58&13\over58&-{17\over116}\\0&0&0&1&-{5\over58}&-{17\over116}&11\over116&57\over232 \end{array}\right]`}
        display={true}
      />
    </>
  );
}
