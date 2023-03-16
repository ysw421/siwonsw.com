import styles from './Pages.module.css';
import { MainText, Line, Height50 } from './useful';
import { MathComponent } from 'mathjax-react';
import { useState, useEffect } from 'react';

export default function Page13(props) {
  // const [number, setNumber] = useState(-314.25);
  // const [binary, setBinary] = useState([
  //   1, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  // ]);

  // const changeNumber = (e) => {
  //   // if (e === '') e = 0;
  //   if (e > 1000.0) e = 1000;
  //   else if (e < -1000.0) e = -1000;
  //   setNumber(e);
  // };

  // const decimal2binary = (input) => {
  //   let decimal = input;
  //   let binary = 0;
  //   let i = 0;
  //   while (decimal != 0) {
  //     binary += (decimal % 2) * Math.pow(10, i);
  //     decimal /= 2;
  //     console.log(decimal);
  //     i++;
  //   }
  //   return binary;
  // };

  // useEffect(() => {
  //   if (number >= 0) binary[0] = 0;
  //   else binary[0] = 1;
  //   let toBinary = 0;
  //   // console.log(Math.floor(Math.abs(number)));
  //   console.log(decimal2binary(Math.floor(Math.abs(number))));
  // }, [number]);

  return (
    <>
      <MainText
        text="컴퓨터는 자료를 저장할 때, 2진수를 사용합니다. 소수 부분이 있는 숫자, 즉 실수 또한 2진수를 사용하여 나타내며 부동 소수점 데이터 형식을 사용합니다.
      부동 소수점 데이터 형식에 대하여 알아봅시다. (IEEE 754 표준을 기준으로 설명합니다.)"
      />
      <Line isDarkMode={props.isDarkMode} />
      <MainText text="구조" fontSize="1.7rem" />
      <Height50 num="20px" />
      <MainText
        text="원하는 실수 크기에 따라, 실수 1개를 표현하기 위해 32비트를 사용할 수도 있으며, 64비트를 사용할 수도 있습니다. 해당
      글에서는 32비트를 활용하여 예시를 들겠습니다."
      />
      <MainText text="32비트는 부호 비트 1개와 지수부 비트 8개, 그리고 가수부 비트 23개로 구성됩니다." />
      <Height50 />
      <center>
        <MainText text="SEEE EEEE EMMM MMMM MMMM MMMM MMMM MMMM" fontSize="0.9rem" />
        <Height50 num="5px" />
        <MainText text="S: 부호 비트,  E: 지수부,  M: 가수부" fontSize="0.9rem" />
      </center>
      <Height50 />
      <MainText text="부호 비트" fontSize="1.7rem" />
      <Height50 num="20px" />
      <MainText text="-314.25를 예로 들어 설명하겠습니다." />
      <MainText
        text="첫 비트는 부호 비트입니다. 0이면 양수, 1이면 음수입니다. 예컨대 4.21은 양수이므로 부호 비트가 0, -3.14는 음수이므로 부호 비트가 1입니다.
      즉 -314.25의 첫 비트는 1입니다."
      />
      <Height50 />
      <center>
        <MainText text="1EEE EEEE EMMM MMMM MMMM MMMM MMMM MMMM" fontSize="0.9rem" />
      </center>
      <Height50 num="90px" />
      <MainText text="지수부와 가수부" fontSize="1.7rem" />
      <Height50 num="20px" />
      <MainText
        text="우선 314.25를 2진수로 변환합시다. 2진수는 10진수와 달리 n번째 자리의 수의 가중치는 "
        isSpan={true}
      />
      <MathComponent tex={String.raw`2^{n-1}`} display={false} />
      <MainText text="입니다. 예를 들면 아래와 같습니다. (숫자 오른쪽에 " isSpan={true} />
      <MathComponent tex={String.raw`_{(2)}`} display={false} />
      <MainText text="가 있다면 그 수가 2진수임로 표현되었음을 의미함)" isSpan={true} />
      <Height50 />
      <MathComponent tex={String.raw`421.5 = 4 \times 10^2 + 2 \times 10^1 + 1 \times 10^0 + 5 \times 10^{-1}`} />
      <MathComponent
        tex={String.raw`101.1_{(2)} = 1 \times 2^2 + 0 \times 2^1 + 1 \times 2^0 + 1 \times 2^{-1} = 5.5`}
      />
      <Height50 />
      <MainText text="위 내용을 기억하며, 314.25를 2진수로 변환하면 100111010.01입니다." />
      <Height50 num="10px" />
      <MainText
        text="부동 소수점 이름에서 알 수 있듯이, 소수점의 위치를 변화시켜 저장합니다. 소수점을 고정하였을 때보다 보다 많은 범위의 실수를 표현할 수 있기 때문입니다. 100111010.01를 "
        isSpan={true}
      />
      <MathComponent tex={String.raw`1.0011101001 \times 2^{8}`} display={false} />
      <MainText
        text="꼴로 표현합니다. 변환한 수에서 지수부는 8입니다. 그러면, 8을 2진수로 변환하여 지수부 비트에 넣으면 될까요? 정답은 '아니다'입니다. 예를 들어 0.5를 위 방식과 같이 표현하면 "
        isSpan={true}
      />
      <MathComponent tex={String.raw`1 \times 2^{-1}`} display={false} />
      <MainText
        text="입니다. 지수부는 -1입니다. 지수부에는 부호 비트가 없으므로, -1을 저장할 수 없습니다. 따라서, 지수부 8비트가 나타낼 수 있는 값 중, 가운데 값 127을 더하여 저장합니다.
        즉, 위 예에서 8 + 127 = 135를 2진수로 변환한 값, 10000111를 지수부 비트에 넣습니다."
        isSpan={true}
      />
      <Height50 />
      <center>
        <MainText text="1100 0011 1MMM MMMM MMMM MMMM MMMM MMMM" fontSize="0.9rem" />
      </center>
      <Height50 />
      <MainText text="가수부에는 1.0011101001에서 소수점 아래 0011101001만 저장합니다. 첫 수는 언제나 1이기 때문에 저장하지 않습니다. 앞부분부터 저장하며, 나머지는 0으로 채웁니다." />
      <Height50 />
      <center>
        <MainText text="1100 0011 1001 1101 0010 0000 0000 0000" fontSize="0.9rem" />
      </center>
      <Height50 />
      <Line isDarkMode={props.isDarkMode} />
      <MainText text="-314.25를 부정 소수점으로 표현해 보았습니다. 이 과정은 다른 숫자에서도 가능합니다. 직접 해보세요! :)" />
      {/* <Height50 />
      <center>
        <input
          type="number"
          className={styles.tableInputNumber}
          style={{ color: props.isDarkMode ? 'white' : 'black', width: '100px', textAlign: 'left' }}
          value={number}
          onChange={(e) => {
            changeNumber(e.target.value);
          }}
          min={-1000}
          max={1000}
          step={0.1}
        />
        <MainText text=" = " isSpan={true} />
      </center> */}
    </>
  );
}
