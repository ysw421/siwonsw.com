import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import Draggable from 'react-draggable';
import { BlockMath, InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';

import {
  DraggableBar,
  DraggableHorizontalBar,
  DraggableVerticalBar,
} from '@/components/DraggableBar';
import Paper from '@/components/Paper';
import { Box, SubTitle } from '@/components/utilities';

export default function Matrix() {
  return (
    <Paper title='행렬 (Matrix)'>
      <Part1 />
      <SubTitle subTitle='행렬의 덧셈과 뺄셈' />
      <Part2 />
      <SubTitle subTitle='상수 배' />
      <Part3 />
      <SubTitle subTitle='아다마르 곱' />
      <Part4 />
      <SubTitle subTitle='행렬 곱' />
      <Part5 />
      <SubTitle subTitle='항등 행렬 (Identity Matrix)' />
      <Part6 />
      <SubTitle subTitle='역 행렬 (Inverse Matrix)' />
      <Part7 />
      <SubTitle subTitle='전치 행렬 (Transpose Matrix)' />
      <Part8 />
    </Paper>
  );
}

/**
 *행렬에 대한 기본적 해설
 */
function Part1() {
  const [position, setPosition] = useState({ x: 23 * 4, y: 12 * 6 });
  const [matrixText, setMatrixText] = useState<string>('');
  const [mn, setMn] = useState({
    m: position.y / 12 + 1,
    n: position.x / 23 + 1,
  });

  useEffect(() => {
    const m = position.y / 12 + 1;
    const n = position.x / 23 + 1;
    setMn({ m: m, n: n });
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === 1) text += ` a_{${i}${j}}`;
        else text += ` & a_{${i}${j}}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
  }, [position]);

  return (
    <>
      <p>행렬은 숫자를 직사각형 형태로 배열한 것입니다.</p>
      <p>
        <InlineMath>(m, n)</InlineMath> 모양의 행렬,{' '}
        <InlineMath>{`A\\in\\mathbb{R}^{${mn.m}\\times${mn.n}}`}</InlineMath>는
        아래와 같습니다. 단 <InlineMath>{`(m, n)\\in\\mathbb{N}`}</InlineMath>
      </p>
      <div className='my-8'>
        <div className='flex h-full w-full items-center justify-center'>
          <InlineMath>A = </InlineMath>
          <div className='relative flex h-64 w-[280px] flex-col items-center justify-center'>
            <div className='absolute z-30 flex'>
              <div className='w-[50px]' />
              <Draggable
                axis='x'
                bounds={{ left: 0, top: 0, right: 23 * 5, bottom: 0 }}
                defaultPosition={{ x: 0, y: 0 }}
                grid={[23, 23]}
                position={{ x: position.x, y: 0 }}
                onDrag={(e, data) => {
                  setPosition({ x: data.x < 0 ? 0 : data.x, y: position.y });
                }}
              >
                <div className='h-auto w-auto rounded-xl'>
                  <div className='p-3'>
                    <DraggableVerticalBar />
                  </div>
                </div>
              </Draggable>
            </div>
            <div className='absolute z-30 flex flex-col'>
              <div className='h-[32px]' />
              <Draggable
                axis='y'
                bounds={{ left: 0, top: 0, right: 0, bottom: 12 * 8 }}
                defaultPosition={{ x: 0, y: 0 }}
                grid={[12, 12]}
                position={{ x: 0, y: position.y }}
                onDrag={(e, data) => {
                  setPosition({ x: position.x, y: data.y < 0 ? 0 : data.y });
                }}
              >
                <div className='h-auto w-auto rounded-xl'>
                  <div className='p-3'>
                    <DraggableHorizontalBar />
                  </div>
                </div>
              </Draggable>
            </div>
            <div className='absolute top-[calc(-2.5px+50%)] left-[calc(6px+50%)] z-30'>
              <Draggable
                axis='both'
                bounds={{ left: 0, top: 0, right: 23 * 5, bottom: 12 * 8 }}
                defaultPosition={{ x: 0, y: 0 }}
                grid={[23, 12]}
                position={{ x: position.x, y: position.y }}
                onDrag={(e, data) => {
                  setPosition({
                    x: data.x < 0 ? 0 : data.x,
                    y: data.y < 0 ? 0 : data.y,
                  });
                }}
              >
                <div className='h-auto w-auto rounded-xl'>
                  <div className='p-3'>
                    <DraggableBar />
                  </div>
                </div>
              </Draggable>
            </div>
            <div className='z-0 h-fit w-fit select-none text-[16.5px]'>
              <BlockMath>{matrixText}</BlockMath>
            </div>
          </div>
        </div>
        <div className='text-md flex w-full flex-col items-center'>
          <BlockMath>{`m:${mn.m}, n:${mn.n}`}</BlockMath>
          <BottomControlEx />
        </div>
      </div>
      <p>
        행렬의 가로줄을 '행(Row)', 세로줄을 '열(Column)'이라고 부릅니다. 즉 윗
        행렬은 {mn.m}행 {mn.n}열 행렬입니다.
      </p>
      <p>
        앞으로 행렬 <InlineMath>A</InlineMath>의 <InlineMath>i</InlineMath>번째
        행을 <InlineMath>[A]_i</InlineMath>, <InlineMath>j</InlineMath>번째 열을{' '}
        <InlineMath>[A]^j</InlineMath>로 표현합니다.
      </p>
      <p>
        행렬 <InlineMath>A</InlineMath>의 <InlineMath>(i, j)</InlineMath>
        좌표의 요소를 <InlineMath>{`[A]_{i j}`}</InlineMath>와 같이
        표현하겠습니다. 비단, 위 행렬 <InlineMath>A</InlineMath>의 요소들과 같이
        편히를 위해, 흔히 <InlineMath>{`[A]_{i j}`}</InlineMath>와 같이
        표현합니다. 또한 위 행렬과 같이{' '}
        <InlineMath>{`A = (a_{ij})`}</InlineMath>와 같이 표현할 수도 있습니다.
      </p>
    </>
  );
}

const Part2 = () => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [m1Position, setM1Position] = useState({ x: 21 * 5, y: 12 * 8 });
  const [m1Mn, setM1Mn] = useState({
    m: 9,
    n: 6,
  });
  const [m1Value, setM1Value] = useState<Array<number[]>>(
    Array.from({ length: 9 }, () => Array.from({ length: 6 }, () => 0))
  );
  const [m2Position, setM2Position] = useState({ x: 21 * 5, y: 12 * 8 });
  const [m2Mn, setM2Mn] = useState({
    m: 9,
    n: 6,
  });
  const [m2Value, setM2Value] = useState<Array<number[]>>(
    Array.from({ length: 9 }, () => Array.from({ length: 6 }, () => 0))
  );
  const [matrixText, setMatrixText] = useState<string>('');
  const [matrixText2, setMatrixText2] = useState<string>('');

  useEffect(() => {
    setM1Value(
      Array.from({ length: 9 }, () =>
        Array.from({ length: 6 }, () => getRandomInt(-9, 9))
      )
    );
    setM2Value(
      Array.from({ length: 9 }, () =>
        Array.from({ length: 6 }, () => getRandomInt(-9, 9))
      )
    );
  }, []);

  useEffect(() => {
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 0; i < m1Mn.m; i++) {
      for (let j = 0; j < m1Mn.n; j++) {
        if (j === 0) text += ` ${m1Value[i][j] + m2Value[i][j]}`;
        else text += ` & ${m1Value[i][j] + m2Value[i][j]}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
    text = String.raw`\begin{bmatrix}`;
    for (let i = 0; i < m1Mn.m; i++) {
      for (let j = 0; j < m1Mn.n; j++) {
        if (j === 0) text += ` ${m1Value[i][j] - m2Value[i][j]}`;
        else text += ` & ${m1Value[i][j] - m2Value[i][j]}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText2(text);
  }, [m1Mn, m1Value, m2Mn, m2Value]);

  useEffect(() => {
    setM2Position({ x: m1Position.x, y: m1Position.y });
  }, [m1Position]);

  return (
    <>
      <p>
        행렬의 덧셈과 뺄셈은 각 원소에서 이루어집니다. 이처럼 행렬 요소 각각에
        대한 연산을 Element-Wise Operation이라고 합니다. 연산이 이루어지는 두
        행렬의 모양(크기, 차원)이 같을 경우 연산이 가능합니다.
      </p>
      <p className='mt-4'>덧셈</p>
      <div className='flex w-full justify-center'>
        <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
          <InputMatrix
            position={m1Position}
            setPosition={setM1Position}
            mn={m1Mn}
            setMn={setM1Mn}
            matrixValue={m1Value}
            setMatrixValue={setM1Value}
          />
          <BlockMath>+</BlockMath>
          <InputMatrix
            position={m2Position}
            setPosition={setM2Position}
            mn={m2Mn}
            setMn={setM2Mn}
            matrixValue={m2Value}
            setMatrixValue={setM2Value}
            isShowDraggableBar={false}
          />
          <BlockMath>=</BlockMath>
          <div className='flex h-64 w-[330px] items-center justify-center'>
            <InlineMath>{matrixText}</InlineMath>
          </div>
        </div>
      </div>
      <BottomControlEx />
      <p className='mt-4'>뺄셈</p>
      <div className='w-ful flex justify-center'>
        <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
          <InputMatrix
            position={m1Position}
            setPosition={setM1Position}
            mn={m1Mn}
            setMn={setM1Mn}
            matrixValue={m1Value}
            setMatrixValue={setM1Value}
          />
          <BlockMath>-</BlockMath>
          <InputMatrix
            position={m2Position}
            setPosition={setM2Position}
            mn={m2Mn}
            setMn={setM2Mn}
            matrixValue={m2Value}
            setMatrixValue={setM2Value}
            isShowDraggableBar={false}
          />
          <BlockMath>=</BlockMath>
          <div className='flex h-64 w-[330px] items-center justify-center'>
            <InlineMath>{matrixText2}</InlineMath>
          </div>
        </div>
      </div>
      <BottomControlEx />
      <p className='mt-8'>
        위에서 첫 행렬을 <InlineMath>{`(${m1Mn.m}, ${m1Mn.n})`}</InlineMath>{' '}
        모양의 행렬 <InlineMath>A</InlineMath>, 두번째 행렬을{' '}
        <InlineMath>B</InlineMath>라고 할 때,{' '}
        <InlineMath>{`(A\\pm B)`}</InlineMath>의 결과인 행렬{' '}
        <InlineMath>C</InlineMath>의 각 요소는 아래와 같습니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`[C]_{i j} = [A]_{i j} \\pm [B]_{i j}`}</BlockMath>
      </div>
    </>
  );
};

const Part3 = () => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [m1Position, setM1Position] = useState({ x: 21 * 5, y: 12 * 8 });
  const [m1Mn, setM1Mn] = useState({
    m: 9,
    n: 6,
  });
  const [m1Value, setM1Value] = useState<Array<number[]>>(
    Array.from({ length: 9 }, () => Array.from({ length: 6 }, () => 0))
  );
  const [scalarValue, setScalarValue] = useState<number>(2);
  const [matrixText, setMatrixText] = useState<string>('');

  useEffect(() => {
    setM1Value(
      Array.from({ length: 9 }, () =>
        Array.from({ length: 6 }, () => getRandomInt(-9, 9))
      )
    );
  }, []);

  useEffect(() => {
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 0; i < m1Mn.m; i++) {
      for (let j = 0; j < m1Mn.n; j++) {
        if (j === 0) text += ` ${scalarValue * m1Value[i][j]}`;
        else text += ` & ${scalarValue * m1Value[i][j]}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
  }, [m1Mn, m1Value, scalarValue]);

  return (
    <>
      <p>상수 배는 행렬의 각 원소에 상수 값을 곱합니다.</p>
      <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
        <div className='flex items-center justify-center'>
          <input
            type='number'
            className='z-50 m-0 mr-3 h-[20px] w-[22px] bg-transparent p-0 text-center text-sm'
            onChange={(e) => setScalarValue(Number(e.target.value))}
            value={scalarValue}
          />
          <InlineMath>{`\\cdot`}</InlineMath>
          <InputMatrix
            position={m1Position}
            setPosition={setM1Position}
            mn={m1Mn}
            setMn={setM1Mn}
            matrixValue={m1Value}
            setMatrixValue={setM1Value}
          />
        </div>
        <BlockMath>=</BlockMath>
        <div className='flex h-64 w-[330px] items-center justify-center'>
          <InlineMath>{matrixText}</InlineMath>
        </div>
      </div>
      <BottomControlEx />
      <p className='mt-8'>
        즉, 상수 값 <InlineMath>k</InlineMath>와 행렬 <InlineMath>A</InlineMath>
        의 곱의 <InlineMath>(i, j)</InlineMath> 좌표의 요소 값은 다음과
        같습니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`k[A]_{i j}`}</BlockMath>
      </div>
    </>
  );
};

const Part4 = () => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [m1Position, setM1Position] = useState({ x: 21 * 5, y: 12 * 8 });
  const [m1Mn, setM1Mn] = useState({
    m: 9,
    n: 6,
  });
  const [m1Value, setM1Value] = useState<Array<number[]>>(
    Array.from({ length: 9 }, () => Array.from({ length: 6 }, () => 0))
  );
  const [m2Position, setM2Position] = useState({ x: 21 * 5, y: 12 * 8 });
  const [m2Mn, setM2Mn] = useState({
    m: 9,
    n: 6,
  });
  const [m2Value, setM2Value] = useState<Array<number[]>>(
    Array.from({ length: 9 }, () => Array.from({ length: 6 }, () => 0))
  );
  const [matrixText, setMatrixText] = useState<string>('');

  useEffect(() => {
    setM1Value(
      Array.from({ length: 9 }, () =>
        Array.from({ length: 6 }, () => getRandomInt(-9, 9))
      )
    );
    setM2Value(
      Array.from({ length: 9 }, () =>
        Array.from({ length: 6 }, () => getRandomInt(-9, 9))
      )
    );
  }, []);

  useEffect(() => {
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 0; i < m1Mn.m; i++) {
      for (let j = 0; j < m1Mn.n; j++) {
        if (j === 0) text += ` ${m1Value[i][j] * m2Value[i][j]}`;
        else text += ` & ${m1Value[i][j] * m2Value[i][j]}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
  }, [m1Mn, m1Value, m2Mn, m2Value]);

  useEffect(() => {
    setM2Position({ x: m1Position.x, y: m1Position.y });
  }, [m1Position]);

  return (
    <>
      <p>
        아다마르 곱(Hadamard Product)는 Element-Wise Operation입니다. 행렬의
        덧셈이나, 뺄셈과 같이 행렬의 모양(크기, 차원)이 같은 경우 연산이
        가능합니다. 기호 <InlineMath>{`\\circ`}</InlineMath>로 표현합니다.
      </p>
      <div className='flex w-full justify-center'>
        <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
          <InputMatrix
            position={m1Position}
            setPosition={setM1Position}
            mn={m1Mn}
            setMn={setM1Mn}
            matrixValue={m1Value}
            setMatrixValue={setM1Value}
          />
          <BlockMath>{`\\circ`}</BlockMath>
          <InputMatrix
            position={m2Position}
            setPosition={setM2Position}
            mn={m2Mn}
            setMn={setM2Mn}
            matrixValue={m2Value}
            setMatrixValue={setM2Value}
            isShowDraggableBar={false}
          />
          <BlockMath>=</BlockMath>
          <div className='flex h-64 w-[330px] items-center justify-center'>
            <InlineMath>{matrixText}</InlineMath>
          </div>
        </div>
      </div>
      <BottomControlEx />
      <p className='mt-8'>
        아다마르 곱은 같은 좌표에 존재하는 요소의 값끼리 곱합니다. 즉, 첫 행렬을{' '}
        <InlineMath>A</InlineMath>, 두번째 행렬을 <InlineMath>B</InlineMath>,
        아다마르 곱의 결과를 <InlineMath>C</InlineMath>라고 할 때 아래를
        만족합니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`[C]_{i j} = [A]_{i j} \\times [B]_{i j}`}</BlockMath>
      </div>
    </>
  );
};

const Part5 = () => {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [m1Position, setM1Position] = useState({ x: 21 * 3, y: 12 * 3 });
  const [m1Mn, setM1Mn] = useState({
    m: 4,
    n: 4,
  });
  const [m1Value, setM1Value] = useState<Array<number[]>>(
    Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0))
  );
  const [m2Position, setM2Position] = useState({ x: 21 * 3, y: 12 * 3 });
  const [m2Mn, setM2Mn] = useState({
    m: 4,
    n: 4,
  });
  const [m2Value, setM2Value] = useState<Array<number[]>>(
    Array.from({ length: 4 }, () => Array.from({ length: 4 }, () => 0))
  );
  const [matrixText, setMatrixText] = useState<string>('');

  useEffect(() => {
    setM1Value(
      Array.from({ length: 4 }, () =>
        Array.from({ length: 4 }, () => getRandomInt(-9, 9))
      )
    );
    setM2Value(
      Array.from({ length: 4 }, () =>
        Array.from({ length: 4 }, () => getRandomInt(-9, 9))
      )
    );
  }, []);
  const ShowProcess = () => {
    const Text = ({ h, h2 }: { h: number; h2: number }) => {
      const result = [];
      let lineValue = 0;
      for (let i = 0; i < m1Mn.n; i++) {
        lineValue += m1Value[h2][i] * m2Value[i][h];
        result.push(
          <>
            {i !== 0 && <InlineMath> + </InlineMath>}
            <span
              className={`${
                h2 === 1
                  ? 'bg-blue-300'
                  : h2 === 2
                  ? 'bg-orange-300'
                  : h2 === 3
                  ? 'bg-green-300'
                  : 'bg-rose-300'
              } rounded-md text-dark`}
            >
              {m1Value[h2][i]}
            </span>
            <InlineMath>{` \\times `}</InlineMath>
            <span
              className={`${
                h === 1
                  ? 'bg-lime-300'
                  : h === 2
                  ? 'bg-sky-300'
                  : h === 3
                  ? 'bg-purple-300'
                  : 'bg-pink-300'
              } rounded-md text-dark`}
            >
              {m2Value[i][h]}
            </span>
          </>
        );
      }
      return (
        <div className='flex justify-center'>
          <div className='mr-2'>{result}</div>
          <InlineMath>{`=${lineValue}`}</InlineMath>
        </div>
      );
    };

    const RoofText = ({ h }: { h: number }) => {
      const result = [];
      for (let i = 0; i < m2Mn.n; i++) {
        result.push(
          <>
            <Text h={i} h2={h} />
          </>
        );
      }
      return <div className='flex flex-col'>{result}</div>;
    };
    const result = [];
    for (let i = 0; i < m1Mn.m; i++) {
      result.push(
        <>
          {i !== 0 && (
            <div className='h-[1px] w-[300px] rounded-full bg-dark dark:bg-light' />
          )}
          <div className='my-2 flex'>
            <RoofText h={i} />
          </div>
        </>
      );
    }
    return <>{result}</>;
  };

  useEffect(() => {
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 0; i < m1Mn.m; i++) {
      for (let j = 0; j < m2Mn.n; j++) {
        let elemnetValue = 0;
        // let elemnetValue = '';
        for (let l = 0; l < m1Mn.n; l++) {
          elemnetValue += m1Value[i][l] * m2Value[l][j];
          // elemnetValue += `${m1Value[i][l]} * ${m2Value[l][j]} + `;
        }
        if (j === 0) text += ` ${elemnetValue}`;
        else text += ` & ${elemnetValue}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
  }, [m1Mn, m1Value, m2Mn, m2Value]);

  useEffect(() => {
    setM2Position({ x: m2Position.x, y: (m1Position.x / 21) * 12 });
  }, [m1Position]);

  return (
    <>
      <p>
        행렬의 곱셈은 곱해지는 행렬의 열의 수와 곱하는 행렬의 행의 수가 같을 때
        가능합니다. 곱셈 결과, 행의 수는 곱해지는 행렬의 행의 수와 같으며, 열의
        수는 곱하는 행렬의 열의 수와 같습니다. 예컨대,{' '}
        <InlineMath>(m, k_1)</InlineMath>모양의 행렬 <InlineMath>A</InlineMath>
        와 <InlineMath>(k_2, n)</InlineMath>모양의 행렬{' '}
        <InlineMath>B</InlineMath>를 순서대로 곱하기 위해서는{' '}
        <InlineMath>k_1=k_2</InlineMath>를 만족해야 합니다(아래 예시에서는{' '}
        <InlineMath>k</InlineMath>로 표현하겠습니다). 곱셈 결과는{' '}
        <InlineMath>(m, n)</InlineMath>모양의 행렬이며{' '}
        <InlineMath>{`AB \\ne BA`}</InlineMath>임을 알 수 있습니다. 즉 행렬의
        곱셈은 교환 법칙이 성립하지 아니합니다. 행렬 곱셈 결과를{' '}
        <InlineMath>C</InlineMath>라고 하면 다음을 만족합니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`[C]_{ij} = \\sum_{l=1}^{k}{[A]_{il}[B]_{lj}}`}</BlockMath>
      </div>
      <div className='flex w-full justify-center'>
        <div className='flex flex-col flex-wrap items-center justify-center md:flex-row'>
          <InputMatrixForProduct
            position={m1Position}
            setPosition={setM1Position}
            mn={m1Mn}
            setMn={setM1Mn}
            matrixValue={m1Value}
            setMatrixValue={setM1Value}
          />
          <BlockMath>{`\\cdot`}</BlockMath>
          <InputMatrixForProduct
            position={m2Position}
            setPosition={setM2Position}
            mn={m2Mn}
            setMn={setM2Mn}
            matrixValue={m2Value}
            setMatrixValue={setM2Value}
            isShowDraggableBar={false}
          />
          <BlockMath>=</BlockMath>
          <div className='flex h-36 w-[230px] items-center justify-center'>
            <InlineMath>{matrixText}</InlineMath>
          </div>
        </div>
      </div>
      <BottomControlEx />
      <div className='my-8 flex flex-col items-center justify-center'>
        <ShowProcess />
      </div>
      <p>
        앞서 언급한 바와 같이 행렬의 곱셈의 경우 교환 법칙이 성립하지 않으나,
        결합 법칙과 분배 법칙은 성립합니다. 즉, 행렬{' '}
        <InlineMath>A, B, C</InlineMath>에 대하여 <InlineMath>(AB)C</InlineMath>
        와 <InlineMath>(A+B)C, A(B+C)</InlineMath>가 연산 가능하다면, 아래가
        성립합니다.
      </p>
      <div className='my-8'>
        <BlockMath>(AB)C = A(BC)</BlockMath>
        <BlockMath>(A+B)C = AC+BC</BlockMath>
        <BlockMath>A(B+C) = AB+AC</BlockMath>
      </div>
      <p>
        아래, 두번째 식(<InlineMath>(A+B)C = AC+BC</InlineMath>)의 간단한 증명을
        준비하였습니다. 각 행렬은{' '}
        <InlineMath>{`A=(a_{jk}),\\; B=(b_{jk}),\\; C=(c_{kj})`}</InlineMath>로
        정의합니다.
      </p>
      <Box className='my-8'>
        <p className='mb-2 border-b-2 border-dark dark:border-light'>Proof</p>
        <BlockMath>{`[(A+B)C]_{ij} = \\sum_{k}(a_{ik}+b_{ik})c_{kj}`}</BlockMath>
        <BlockMath>{`[AC+BC]_{ij} = \\sum_{k}(a_{ik}c_{kj}+b_{ik}c_{kj})`}</BlockMath>
      </Box>
      <p>
        위 두식은 동일하기 때문에, 두번째 식은 성립합니다. 다른 식 또한 위
        증명과 같이 어렵지 않게 성립함을 확인 가능합니다. 행렬의 곱은 결합
        법칙이 성립하므로 <InlineMath>(AB)C</InlineMath>보다는{' '}
        <InlineMath>ABC</InlineMath>가 더 흔히 사용되는 표현입니다.
      </p>
    </>
  );
};

function Part6() {
  const [position, setPosition] = useState({ x: 15 * 4, y: 12 * 6 });
  const [matrixText, setMatrixText] = useState<string>('');
  const [mn, setMn] = useState({
    m: position.y / 15 + 1,
    n: position.x / 15 + 1,
  });

  useEffect(() => {
    const m = position.y / 15 + 1;
    const n = position.x / 15 + 1;
    setMn({ m: m, n: n });
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === 1) text += ` ${i === j ? 1 : 0}`;
        else text += ` & ${i === j ? 1 : 0}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
  }, [position]);

  return (
    <>
      <p>
        앞서 행렬 곱의 내용을 되돌아 보면, <InlineMath>(n, n)</InlineMath>모양의
        행렬(정사각 행렬(square matrix))은 지수 표현이 가능합니다. 즉,{' '}
        <InlineMath>AAA</InlineMath>의 경우 <InlineMath>{`A^{3}`}</InlineMath>과
        같이 표현 가능합니다. 그렇다면, <InlineMath>A^0</InlineMath>의 값은
        무엇일까요? 실수에서 <InlineMath>{`(real\\;number)^0 = 1`}</InlineMath>
        이 단위적인 것과 같이, <InlineMath>A^0</InlineMath> 또한 단위적이며,
        특별히 <InlineMath>I</InlineMath>로 표현하고 항등 행렬이라 부릅니다.
        항등 행렬의 정의는 아래와 같습니다.
      </p>
      <div className='my-8'>
        <div className='flex h-full w-full items-center justify-center'>
          <InlineMath>I = </InlineMath>
          <div className='relative flex h-64 w-[280px] flex-col items-center justify-center'>
            <div className='absolute z-30 flex'>
              <div className='w-[50px]' />
              <Draggable
                axis='x'
                bounds={{ left: 0, top: 0, right: 15 * 7, bottom: 0 }}
                defaultPosition={{ x: 0, y: 0 }}
                grid={[15, 15]}
                position={{ x: position.x, y: 0 }}
                onDrag={(e, data) => {
                  setPosition({
                    x: data.x < 0 ? 0 : data.x,
                    y: data.x < 0 ? 0 : data.x,
                  });
                }}
              >
                <div className='h-auto w-auto rounded-xl'>
                  <div className='p-3'>
                    <DraggableVerticalBar />
                  </div>
                </div>
              </Draggable>
            </div>
            <div className='z-0 h-fit w-fit select-none text-[16.5px]'>
              <BlockMath>{matrixText}</BlockMath>
            </div>
          </div>
        </div>
        <div className='text-md flex w-full flex-col items-center'>
          <BottomControlEx />
        </div>
      </div>
      <div className='my-8 flex flex-col gap-2'>
        <BlockMath>{`I = (i_{ij})`}</BlockMath>
        <BlockMath>{`(i_{ij}) = \\begin{cases}1 & i = j \\\\
         0 & i\\ne j\\end{cases}`}</BlockMath>
      </div>
      <p>
        항등행렬에 상수 배를 한 행렬을 스칼라 행렬(scalar matrix)이라고
        부릅니다.
      </p>
    </>
  );
}

function Part7() {
  const [position, setPosition] = useState({ x: 21 * 2, y: 12 * 2 });
  const [matrixText, setMatrixText] = useState<string>('');
  const [mn, setMn] = useState({
    m: position.y / 12 + 1,
    n: position.x / 21 + 1,
  });
  const [matrixValue, setMatrixValue] = useState<Array<number[]>>([
    [1, -1, -2],
    [2, 3, 5],
    [6, 0, -3],
  ]);

  const [det, setDet] = useState<number>(0);

  function updateValue(i: number, j: number, newValue: number) {
    setMatrixValue((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      newMatrix[i] = [...prevMatrix[i]];
      newMatrix[i][j] = newValue;
      return newMatrix;
    });
  }

  const InputVerticalFor = () => {
    const arr = [];
    for (let i = 0; i < mn.m; i++)
      arr.push(
        <div className=' flex gap-[12.5px]'>{InputHorizontalFor(i)}</div>
      );
    return arr;
  };

  const InputHorizontalFor = (h: number) => {
    const arr = [];
    for (let i = 0; i < mn.n; i++)
      arr.push(
        <input
          type='number'
          className='z-50 m-0 h-[20px] w-[22px] bg-transparent p-0 text-center text-sm'
          onChange={(e) => updateValue(h, i, Number(e.target.value))}
          value={matrixValue[h][i]}
        />
      );
    return arr;
  };

  useEffect(() => {
    const m = position.y / 12 + 1;
    const n = position.x / 21 + 1;
    setMn({ m: m, n: n });
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === 1) text += ` \\;\\;\\;\\;`;
        else text += ` & \\;\\;\\;\\;`;
      }
      if (i != m) text += '\\\\';
    }
    text += `\\;\\end{bmatrix}`;
    setMatrixText(text);
  }, []);

  useEffect(() => {
    setDet(
      matrixValue[0][0] *
        (matrixValue[1][1] * matrixValue[2][2] -
          matrixValue[1][2] * matrixValue[2][1]) -
        matrixValue[0][1] *
          (matrixValue[1][0] * matrixValue[2][2] -
            matrixValue[1][2] * matrixValue[2][0]) +
        matrixValue[0][2] *
          (matrixValue[1][0] * matrixValue[2][1] -
            matrixValue[1][1] * matrixValue[2][0])
    );
  }, [matrixValue]);

  return (
    <>
      <p>
        두개의 <InlineMath>(n,n)</InlineMath>모양의 square matrix인,{' '}
        <InlineMath>A, B</InlineMath>에 대하여{' '}
        <InlineMath>AB = I = BA</InlineMath>를 만족할 경우,{' '}
        <InlineMath>A</InlineMath>와 <InlineMath>B</InlineMath>를 가역
        행렬(invertible matrix, 역 행렬이 존재하는 행렬)이라 부르고,{' '}
        <InlineMath>B</InlineMath>를 <InlineMath>A</InlineMath>의 역
        행렬(inverse matrix)라고 부릅니다. 또한 역 행렬은 역 함수와 같이,{' '}
        <InlineMath>{`B = A^{-1}`}</InlineMath>처럼 표기합니다.
      </p>
      <div className='my-8 flex w-full flex-col items-center justify-center gap-4 md:gap-0'>
        <div className='flex flex-col flex-wrap items-center justify-center gap-2 md:flex-row md:gap-0'>
          <div className='flex items-center justify-center'>
            <div className='relative flex h-24  w-[150px] flex-col items-center justify-center'>
              <div className='relative h-fit w-fit text-[16.5px]'>
                <div className='absolute top-1/2 left-1/2 z-0 h-fit w-fit -translate-x-1/2 -translate-y-1/2 select-none'>
                  <BlockMath>{matrixText}</BlockMath>
                </div>
                <div className='relative top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[4px]'>
                  {InputVerticalFor()}
                </div>
              </div>
            </div>
            {det !== 0 && (
              <InlineMath>{`\\begin{bmatrix}${(
                (matrixValue[1][1] * matrixValue[2][2] -
                  matrixValue[1][2] * matrixValue[2][1]) /
                det
              ).toFixed(1)} & ${(
                (matrixValue[0][2] * matrixValue[2][1] -
                  matrixValue[0][1] * matrixValue[2][2]) /
                det
              ).toFixed(1)} & ${(
                (matrixValue[0][1] * matrixValue[1][2] -
                  matrixValue[0][2] * matrixValue[1][1]) /
                det
              ).toFixed(1)} \\\\ ${(
                (matrixValue[1][2] * matrixValue[2][0] -
                  matrixValue[1][0] * matrixValue[2][2]) /
                det
              ).toFixed(1)} & ${(
                (matrixValue[0][0] * matrixValue[2][2] -
                  matrixValue[0][2] * matrixValue[2][0]) /
                det
              ).toFixed(1)} & ${(
                (matrixValue[0][2] * matrixValue[1][0] -
                  matrixValue[0][0] * matrixValue[1][2]) /
                det
              ).toFixed(1)} \\\\ ${(
                (matrixValue[1][0] * matrixValue[2][1] -
                  matrixValue[1][1] * matrixValue[2][0]) /
                det
              ).toFixed(1)} & ${(
                (matrixValue[0][1] * matrixValue[2][0] -
                  matrixValue[0][0] * matrixValue[2][1]) /
                det
              ).toFixed(1)} & ${(
                (matrixValue[0][0] * matrixValue[1][1] -
                  matrixValue[0][1] * matrixValue[1][0]) /
                det
              ).toFixed(1)} \\end{bmatrix}`}</InlineMath>
            )}
          </div>
          {det !== 0 ? (
            <>
              <InlineMath>{`= \\begin{bmatrix}1 & 0 & 0 \\\\ 0 & 1 & 0 \\\\ 0 & 0 & 1 \\end{bmatrix}`}</InlineMath>
            </>
          ) : (
            <span className='text-center'>
              위 행렬은 역 행렬이 존재하지 않습니다(가역 행렬이 아닙니다).
            </span>
          )}
        </div>
        {det !== 0 && (
          <span className='text-sm'>
            역 행렬을 소수 둘째자리에서 반올림하였습니다.
          </span>
        )}
      </div>
      <p>
        역 행렬을 구하는 과정은 복잡하여 시각화된 오브젝트를{' '}
        <InlineMath>(3, 3)</InlineMath>모양의 행렬에 한하여 제작하였습니다.
        다음에 가우스 소거법을 소개하며, 역 행렬을 구하는 방법을 알아보겠습니다.
        또한 가역 행렬인지 확인하는 방법으로, 행렬식을 알아보겠습니다.
      </p>
    </>
  );
}

function Part8() {
  function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  const [m1Position, setM1Position] = useState({ x: 21 * 5, y: 12 * 8 });
  const [m1Mn, setM1Mn] = useState({
    m: 9,
    n: 6,
  });
  const [m1Value, setM1Value] = useState<Array<number[]>>(
    Array.from({ length: 9 }, () => Array.from({ length: 6 }, () => 0))
  );
  const [matrixText, setMatrixText] = useState<string>('');

  useEffect(() => {
    setM1Value(
      Array.from({ length: 9 }, () =>
        Array.from({ length: 6 }, () => getRandomInt(0, 9))
      )
    );
  }, []);

  useEffect(() => {
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 0; i < m1Mn.n; i++) {
      for (let j = 0; j < m1Mn.m; j++) {
        if (j === 0) text += ` ${m1Value[j][i]}`;
        else text += ` & ${m1Value[j][i]}`;
      }
      text += '\\\\';
    }
    text += `\\end{bmatrix}`;
    setMatrixText(text);
  }, [m1Mn, m1Value]);

  return (
    <>
      <p>
        전치 행렬(transpose matrix)은 행과 열을 바꾼 행렬입니다. 행렬{' '}
        <InlineMath>A</InlineMath>의 전치 행렬은{' '}
        <InlineMath>{`A^{T}`}</InlineMath>와 같이 표현합니다.{` `}
        즉, <InlineMath>{`[A^{T}]_{ij} = [A]_{ji}`}</InlineMath>를 성립합니다.
        행렬 <InlineMath>A</InlineMath>가 <InlineMath>(m, n)</InlineMath>모양의
        행렬일 때, 전치 행렬 <InlineMath>{`A^{T}`}</InlineMath>는{' '}
        <InlineMath>(n,m)</InlineMath>모양의 행렬입니다.
      </p>
      <div className='mt-8 flex flex-wrap items-center justify-center'>
        <div className='flex items-center justify-center'>
          <InlineMath>A =</InlineMath>
          <InputMatrix
            position={m1Position}
            setPosition={setM1Position}
            mn={m1Mn}
            setMn={setM1Mn}
            matrixValue={m1Value}
            setMatrixValue={setM1Value}
          />
        </div>
      </div>
      <div className='mb-8 flex h-36 flex-wrap items-center justify-center'>
        <InlineMath>{`A^{T} = ${matrixText}`}</InlineMath>
      </div>
      <p>
        열의 개수가 1개인 행렬을 행 벡터라고 부릅니다. 또한 행의 개수가 1개인
        행렬을 열 벡터라고 부릅니다. 일반적으로 행렬 <InlineMath>x</InlineMath>
        는 열 벡터(
        <InlineMath>{`\\begin{bmatrix}a_1 & a_2 & \\dots & a_n\\end{bmatrix}`}</InlineMath>
        ) 를 나타냅니다. 열 벡터를 나타낼 때는 전치 행렬을 활용하여{' '}
        <InlineMath>{`x^{T}`}</InlineMath>와 같이 나타냅니다.
      </p>
    </>
  );
}

const InputMatrix = ({
  position,
  setPosition,
  mn,
  setMn,
  matrixValue,
  setMatrixValue,
  isShowDraggableBar = true,
}: {
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  mn: { m: number; n: number };
  setMn: Dispatch<SetStateAction<{ m: number; n: number }>>;
  matrixValue: Array<number[]>;
  setMatrixValue: Dispatch<SetStateAction<number[][]>>;
  isShowDraggableBar?: boolean;
}) => {
  // const [position, setPosition] = useState({ x: 21 * 5, y: 12 * 8 });
  const [matrixText, setMatrixText] = useState<string>('');
  // const [mn, setMn] = useState({
  //   m: position.y / 12 + 1,
  //   n: position.x / 21 + 1,
  // });
  // const [matrixValue, setMatrixValue] = useState<Array<number[]>>(
  //   Array.from({ length: 9 }, () => Array(6).fill(0))
  // );

  function updateValue(i: number, j: number, newValue: number) {
    setMatrixValue((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      if (newValue > -100 && newValue < 100) {
        newMatrix[i] = [...prevMatrix[i]];
        newMatrix[i][j] = newValue;
      }
      return newMatrix;
    });
  }

  const InputVerticalFor = () => {
    const arr = [];
    for (let i = 0; i < mn.m; i++)
      arr.push(
        <div className=' flex gap-[17.5px]'>{InputHorizontalFor(i)}</div>
      );
    return arr;
  };

  const InputHorizontalFor = (h: number) => {
    const arr = [];
    for (let i = 0; i < mn.n; i++)
      arr.push(
        <input
          type='number'
          className='z-50 m-0 h-[20px] w-[22px] bg-transparent p-0 text-center text-sm'
          onChange={(e) => updateValue(h, i, Number(e.target.value))}
          value={matrixValue[h][i]}
        />
      );
    return arr;
  };

  useEffect(() => {
    const m = position.y / 12 + 1;
    const n = position.x / 21 + 1;
    setMn({ m: m, n: n });
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === 1) text += ` \\;\\;\\;\\;`;
        else text += ` & \\;\\;\\;\\;`;
      }
      if (i != m) text += '\\\\';
    }
    text += `\\;\\end{bmatrix}`;
    setMatrixText(text);
  }, [position]);

  return (
    <div className='relative flex h-64 w-[280px] flex-col items-center justify-center'>
      {isShowDraggableBar && (
        <>
          <div className='absolute flex'>
            <div className='w-[50px]' />
            <Draggable
              axis='x'
              bounds={{ left: 0, top: 0, right: 21 * 5, bottom: 0 }}
              defaultPosition={{ x: 0, y: 0 }}
              grid={[21, 21]}
              position={{ x: position.x, y: 0 }}
              onDrag={(e, data) => {
                setPosition({ x: data.x < 0 ? 0 : data.x, y: position.y });
              }}
            >
              <div className='z-50 h-auto w-auto rounded-xl'>
                <div className='p-4'>
                  <DraggableVerticalBar />
                </div>
              </div>
            </Draggable>
          </div>
          <div className='absolute flex flex-col'>
            <div className='h-[32px]' />
            <Draggable
              axis='y'
              bounds={{ left: 0, top: 0, right: 0, bottom: 12 * 8 }}
              defaultPosition={{ x: 0, y: 0 }}
              grid={[12, 12]}
              position={{ x: 0, y: position.y }}
              onDrag={(e, data) => {
                setPosition({ x: position.x, y: data.y < 0 ? 0 : data.y });
              }}
            >
              <div className='z-50 h-auto w-auto rounded-xl'>
                <div className='p-4'>
                  <DraggableHorizontalBar />
                </div>
              </div>
            </Draggable>
          </div>
          <div className='absolute top-[calc(-2.5px+50%)] left-[calc(6px+50%)] z-50'>
            <Draggable
              axis='both'
              bounds={{ left: 0, top: 0, right: 21 * 5, bottom: 12 * 8 }}
              defaultPosition={{ x: 0, y: 0 }}
              grid={[21, 12]}
              position={{ x: position.x, y: position.y }}
              onDrag={(e, data) => {
                setPosition({
                  x: data.x < 0 ? 0 : data.x,
                  y: data.y < 0 ? 0 : data.y,
                });
              }}
            >
              <div className='z-50 h-auto w-auto rounded-xl'>
                <div className='p-3'>
                  <DraggableBar />
                </div>
              </div>
            </Draggable>
          </div>
        </>
      )}
      <div className='relative h-fit w-fit text-[16.5px]'>
        <div className='absolute top-1/2 left-1/2 z-0 h-fit w-fit -translate-x-1/2 -translate-y-1/2 select-none'>
          <BlockMath>{matrixText}</BlockMath>
        </div>
        <div className='relative top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[4px]'>
          {InputVerticalFor()}
        </div>
      </div>
    </div>
  );
};

const InputMatrixForProduct = ({
  position,
  setPosition,
  mn,
  setMn,
  matrixValue,
  setMatrixValue,
  isShowDraggableBar = true,
}: {
  position: { x: number; y: number };
  setPosition: Dispatch<SetStateAction<{ x: number; y: number }>>;
  mn: { m: number; n: number };
  setMn: Dispatch<SetStateAction<{ m: number; n: number }>>;
  matrixValue: Array<number[]>;
  setMatrixValue: Dispatch<SetStateAction<number[][]>>;
  isShowDraggableBar?: boolean;
}) => {
  const [matrixText, setMatrixText] = useState<string>('');

  function updateValue(i: number, j: number, newValue: number) {
    setMatrixValue((prevMatrix) => {
      const newMatrix = [...prevMatrix];
      if (newValue > -100 && newValue < 100) {
        newMatrix[i] = [...prevMatrix[i]];
        newMatrix[i][j] = newValue;
      }
      return newMatrix;
    });
  }

  const InputVerticalFor = () => {
    const arr = [];
    for (let i = 0; i < mn.m; i++)
      arr.push(
        <div className=' flex gap-[17.5px]'>{InputHorizontalFor(i)}</div>
      );
    return arr;
  };

  const InputHorizontalFor = (h: number) => {
    const arr = [];
    for (let i = 0; i < mn.n; i++)
      arr.push(
        <input
          type='number'
          className={`z-50 m-0 h-[20px] w-[22px] p-0 text-center text-sm text-dark ${
            isShowDraggableBar
              ? h === 1
                ? 'bg-blue-300'
                : h === 2
                ? 'bg-orange-300'
                : h === 3
                ? 'bg-green-300'
                : 'bg-rose-300'
              : i === 1
              ? 'bg-lime-300'
              : i === 2
              ? 'bg-sky-300'
              : i === 3
              ? 'bg-purple-300'
              : 'bg-pink-300'
          }`}
          onChange={(e) => updateValue(h, i, Number(e.target.value))}
          value={matrixValue[h][i]}
        />
      );
    return arr;
  };

  useEffect(() => {
    const m = position.y / 12 + 1;
    const n = position.x / 21 + 1;
    setMn({ m: m, n: n });
    let text = String.raw`\begin{bmatrix}`;
    for (let i = 1; i <= m; i++) {
      for (let j = 1; j <= n; j++) {
        if (j === 1) text += ` \\;\\;\\;\\;`;
        else text += ` & \\;\\;\\;\\;`;
      }
      if (i != m) text += '\\\\';
    }
    text += `\\;\\end{bmatrix}`;
    setMatrixText(text);
  }, [position]);

  return (
    <div className='relative flex h-36 w-[200px] flex-col items-center justify-center'>
      <div className='absolute flex'>
        <div className='w-[50px]' />
        <Draggable
          axis='x'
          bounds={{ left: 0, top: 0, right: 21 * 3, bottom: 0 }}
          defaultPosition={{ x: 0, y: 0 }}
          grid={[21, 21]}
          position={{ x: position.x, y: 0 }}
          onDrag={(e, data) => {
            setPosition({ x: data.x < 0 ? 0 : data.x, y: position.y });
          }}
        >
          <div className='z-50 h-auto w-auto rounded-xl'>
            <div className='p-4'>
              <DraggableVerticalBar />
            </div>
          </div>
        </Draggable>
      </div>
      {isShowDraggableBar && (
        <>
          <div className='absolute flex flex-col'>
            <div className='h-[32px]' />
            <Draggable
              axis='y'
              bounds={{ left: 0, top: 0, right: 0, bottom: 12 * 3 }}
              defaultPosition={{ x: 0, y: 0 }}
              grid={[12, 12]}
              position={{ x: 0, y: position.y }}
              onDrag={(e, data) => {
                setPosition({ x: position.x, y: data.y < 0 ? 0 : data.y });
              }}
            >
              <div className='z-50 h-auto w-auto rounded-xl'>
                <div className='p-4'>
                  <DraggableHorizontalBar />
                </div>
              </div>
            </Draggable>
          </div>
          <div className='absolute top-[calc(-2.5px+50%)] left-[calc(6px+50%)] z-50'>
            <Draggable
              axis='both'
              bounds={{ left: 0, top: 0, right: 21 * 3, bottom: 12 * 3 }}
              defaultPosition={{ x: 0, y: 0 }}
              grid={[21, 12]}
              position={{ x: position.x, y: position.y }}
              onDrag={(e, data) => {
                setPosition({
                  x: data.x < 0 ? 0 : data.x,
                  y: data.y < 0 ? 0 : data.y,
                });
              }}
            >
              <div className='z-50 h-auto w-auto rounded-xl'>
                <div className='p-3'>
                  <DraggableBar />
                </div>
              </div>
            </Draggable>
          </div>
        </>
      )}
      <div className='relative h-fit w-fit text-[16.5px]'>
        <div className='absolute top-1/2 left-1/2 z-0 h-fit w-fit -translate-x-1/2 -translate-y-1/2 select-none'>
          <BlockMath>{matrixText}</BlockMath>
        </div>
        <div className='relative top-1/2 left-1/2 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-[4px]'>
          {InputVerticalFor()}
        </div>
      </div>
    </div>
  );
};

const BottomControlEx = () => {
  return (
    <div className='flex flex-wrap justify-center text-center text-sm'>
      <div className='mx-1 flex text-center'>
        '
        <div className='translate-y-[10px]'>
          <DraggableBar />
        </div>
        ', '
        <div className='translate-y-[12px]'>
          <DraggableHorizontalBar />
        </div>
        ', '
        <div className='translate-y-[6px]'>
          <DraggableVerticalBar />
        </div>
        ' 를 드래그하여
      </div>
      <div className='text-center'>행렬의 크기를 변화시켜 보세요.</div>
    </div>
  );
};
