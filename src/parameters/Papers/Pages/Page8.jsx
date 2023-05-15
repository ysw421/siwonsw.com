import { MainText, Height50, Line, Box } from './useful';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';
import styles from './Pages.module.css';
import { MathComponent } from 'mathjax-react';

const Matrix3x2Box = (props) => {
  return (
    <div style={{ height: '100px', overflowY: 'hidden', position: 'relative' }}>
      <div className={styles.preventDrag} style={{ position: 'relative', top: '-9px' }}>
        <MathComponent
          tex={String.raw`\left[\begin{array}{clr} ㅤ & ㅤ & ㅤ& ㅤ\\  \\ \\ \end{array}\right]`}
          display={true}
        />
      </div>
      <table style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
        <tr>
          <td>
            <input
              type="number"
              className={styles.tableInputNumber}
              style={{ color: props.isDarkMode ? 'white' : 'black' }}
              value={props.matrix[0]}
              onChange={(e) => {
                props.changeFun(e.target.value, 0);
              }}
              min={props.min}
              max={props.max}
            />
          </td>
          <td>
            <input
              type="number"
              className={styles.tableInputNumber}
              style={{ color: props.isDarkMode ? 'white' : 'black' }}
              value={props.matrix[1]}
              onChange={(e) => {
                props.changeFun(e.target.value, 1);
              }}
              min={props.min}
              max={props.max}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              className={styles.tableInputNumber}
              style={{ color: props.isDarkMode ? 'white' : 'black' }}
              value={props.matrix[2]}
              onChange={(e) => {
                props.changeFun(e.target.value, 2);
              }}
              min={props.min}
              max={props.max}
            />
          </td>
          <td>
            <input
              type="number"
              className={styles.tableInputNumber}
              style={{ color: props.isDarkMode ? 'white' : 'black' }}
              value={props.matrix[3]}
              onChange={(e) => {
                props.changeFun(e.target.value, 3);
              }}
              min={props.min}
              max={props.max}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="number"
              className={styles.tableInputNumber}
              style={{ color: props.isDarkMode ? 'white' : 'black' }}
              value={props.matrix[4]}
              onChange={(e) => {
                props.changeFun(e.target.value, 4);
              }}
              min={props.min}
              max={props.max}
            />
          </td>
          <td>
            <input
              type="number"
              className={styles.tableInputNumber}
              style={{ color: props.isDarkMode ? 'white' : 'black' }}
              value={props.matrix[5]}
              onChange={(e) => {
                props.changeFun(e.target.value, 5);
              }}
              min={props.min}
              max={props.max}
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default function Page8(props) {
  const [matrix, setMatrix] = useState({ m: 4, n: 5 });
  const [matrixText, setMatrixText] = useState('');
  const [addMatrix1, setAddMatrix1] = useState({ 0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6' });
  const [addMatrix2, setAddMatrix2] = useState({ 0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6' });
  const [minusMatrix1, setMinusMatrix1] = useState({ 0: '2', 1: '4', 2: '8', 3: '16', 4: '2', 5: '4' });
  const [minusMatrix2, setMinusMatrix2] = useState({ 0: '1', 1: '2', 2: '3', 3: '4', 4: '1', 5: '2' });
  const [scalarMatrix, setScalarMatrix] = useState({ 0: '0', 1: '1', 2: '2', 3: '3', 4: '4', 5: '5' });
  const [scalar, setScalar] = useState(2);
  const [dotProductMatrix1, setDotProductMatrix1] = useState({ 0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6' });
  const [dotProductMatrix2, setDotProductMatrix2] = useState({ 0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6' });
  const [identityMatrixSize, setIdentityMatrixSize] = useState(9);
  const [identityMatrixText, setIdentityMatrixText] = useState('1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1');
  const [inverseMatrix, setInverseMatrix] = useState({
    0: 1,
    1: -1,
    2: -2,
    3: 2,
    4: 3,
    5: 5,
    6: 6,
    7: 0,
    8: -3,
  });
  const [inverseMatrixA, setInverseMatrixA] = useState(0);
  const [transposedMatrix, setTransposedMatrix] = useState({ 0: '1', 1: '2', 2: '3', 3: '4', 4: '5', 5: '6' });

  function changeAddMatrix1(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setAddMatrix1({ ...addMatrix1, [i]: e });
  }
  function changeAddMatrix2(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setAddMatrix2({ ...addMatrix2, [i]: e });
  }
  function changeMinusMatrix1(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setMinusMatrix1({ ...minusMatrix1, [i]: e });
  }
  function changeMinusMatrix2(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setMinusMatrix2({ ...minusMatrix2, [i]: e });
  }
  function changeScalarMatrix(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setScalarMatrix({ ...scalarMatrix, [i]: e });
  }
  function changeDotProductMatrix1(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setDotProductMatrix1({ ...dotProductMatrix1, [i]: e });
  }
  function changeDotProductMatrix2(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setDotProductMatrix2({ ...dotProductMatrix2, [i]: e });
  }
  function changeInverseMatrix(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setInverseMatrix({ ...inverseMatrix, [i]: e });
  }
  function changeTransposedMatrix(e, i) {
    if (e === '') e = 0;
    else if (e > 20) e = 20;
    else if (e < -20) e = -20;
    setTransposedMatrix({ ...transposedMatrix, [i]: e });
  }

  const color = ['#b8a7ff78', '#00ffee78', '#ff00ec78', '#a7ffc978', '#ffff0078', '#ff2a0078'];

  useEffect(() => {
    if (!(matrix.m > 7 || matrix.n > 7)) {
      let text = String.raw`\left[\begin{array}{clr}`;
      for (let i = 1; i <= matrix.m; i++) {
        for (let j = 1; j <= matrix.n; j++) {
          if (j === 1) text += ` a_{${i}${j}}`;
          else text += ` & a_{${i}${j}}`;
        }
        text += '\\\\';
      }
      text += `\\end{array}\\right]`;
      setMatrixText(text);
    } else if (matrix.n > 7) {
      let text = String.raw`\left[\begin{array}{clr}`;
      for (let i = 1; i <= matrix.m; i++) {
        text += ` a_{${i}1} & a_{${i}2} & \\cdots & a_{${i}${matrix.n}}\\\\`;
      }
      text += `\\end{array}\\right]`;
      setMatrixText(text);
    } else if (matrix.m > 7) {
      let text = String.raw`\left[\begin{array}{clr}`;
      for (let i = 1; i <= 4; i++) {
        if (i === 3) {
          for (let j = 1; j < matrix.n; j++) {
            text += ` \\vdots &`;
          }
          text += ` \\vdots`;
        } else if (i === 4) {
          for (let j = 1; j < matrix.n; j++) {
            text += ` a_{${i}${matrix.m}} &`;
          }
          text += ` a_{${i}${matrix.m}}`;
        } else {
          for (let j = 1; j <= matrix.n; j++) {
            if (j === 1) text += ` a_{${i}${j}}`;
            else text += ` & a_{${i}${j}}`;
          }
        }
        if (i !== matrix.m) text += '\\\\';
      }
      text += `\\end{array}\\right]`;
      setMatrixText(text);
    }
  }, [matrix]);

  useEffect(() => {
    let text = String.raw``;
    for (let i = 1; i <= identityMatrixSize; i++) {
      for (let j = 1; j <= identityMatrixSize; j++) {
        if (j !== identityMatrixSize) {
          if (i === j) text += String.raw`1 &`;
          else text += String.raw`0 &`;
        } else {
          if (i === j) text += String.raw`1 `;
          else text += String.raw`0 `;
        }
      }
      text += String.raw`\\`;
    }
    setIdentityMatrixText(text);
  }, [identityMatrixSize]);

  useEffect(() => {
    setInverseMatrixA(
      inverseMatrix[0] * (inverseMatrix[4] * inverseMatrix[8] - inverseMatrix[5] * inverseMatrix[7]) -
        inverseMatrix[1] * (inverseMatrix[3] * inverseMatrix[8] - inverseMatrix[5] * inverseMatrix[6]) +
        inverseMatrix[2] * (inverseMatrix[3] * inverseMatrix[7] - inverseMatrix[4] * inverseMatrix[6])
    );
  }, [inverseMatrix]);

  return (
    <div>
      {/* 행렬 연산 이전 */}
      <>
        <MainText text="행렬은 숫자를 직사각형 형태로 배열한 것입니다." />
        <MathComponent tex={String.raw`(m, n)`} display={false} />
        <MainText text=" 모양의 행렬, " isSpan={true} />
        <MathComponent tex={String.raw`A \in \mathbb{R}^{${matrix.m}\times${matrix.n}}`} display={false} />
        <MainText text="는 아래와 같습니다. " isSpan={true} />
        <MainText text="단 " isSpan={true} />
        <MathComponent tex={String.raw`(m, n) \in \mathbb{N}`} display={false} />
        <Height50 num="10px" />
        <center>
          <div style={{ height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {matrix.m > 7 && matrix.n > 7 ? (
              <MathComponent
                tex={String.raw`\left[\begin{array}{clr} a_{11} & a_{12} & \cdots & a_{1${matrix.n}} \\ a_{21} & a_{22} & \cdots & a_{2${matrix.n}} \\ \vdots & \vdots & \ddots & \vdots \\ a_{${matrix.m}1} & a_{${matrix.m}2} & \cdots & a_{${matrix.m}${matrix.n}} \end{array}\right]`}
                display={true}
              />
            ) : (
              <MathComponent tex={matrixText} display={true} />
            )}
          </div>
          <Height50 num="20px" />
          <MainText text="m" isSpan={true} />
          <Slider
            style={{ marginLeft: '10px', width: '150px', height: '8px' }}
            axis="x"
            x={matrix.m}
            onChange={({ x }) => setMatrix((state) => ({ ...state, m: x }))}
            xmax={9}
            xmin={1}
            xstep={1}
          />
          <Height50 num="6px" />
          <MainText text="n" isSpan={true} />
          <Slider
            style={{ marginLeft: '10px', width: '150px', height: '8px' }}
            axis="x"
            x={matrix.n}
            onChange={({ x }) => setMatrix((state) => ({ ...state, n: x }))}
            xmax={9}
            xmin={1}
            xstep={1}
          />
          <Height50 num="8px" />
          <MainText text="슬라이더를 이용하여 행렬의 크기를 조절해보세요." fontSize="0.3rem" />
        </center>
        <Height50 num="40px" />
        <MainText
          text={`행렬의 가로줄을 '행', 세로줄을 '열'이라고 부릅니다. 즉 윗 행렬은 ${matrix.m}행 ${matrix.n}열 행렬입니다.`}
        />
        <Height50 num="70px" />
      </>
      <MainText text="행렬 연산" fontSize="1.7rem" />
      <Line isDarkMode={props.isDarkMode} />
      {/* 덧셈과 뺄셈 */}
      <>
        <MainText text="행렬의 덧셈과 뺄셈" fontSize="1.4rem" />
        <Height50 num="15px" />
        <MainText text="행렬의 덧셈과 뺄셈은 각 원소에서 이루어집니다." />
        <center>
          <Height50 num="20px" />
          <div className={styles.sortRight}>
            <Matrix3x2Box
              matrix={addMatrix1}
              changeFun={changeAddMatrix1}
              isDarkMode={props.isDarkMode}
              min={-20}
              max={20}
            />
            <div style={{ margin: '0 10px' }}>
              <MainText text="+" fontSize="1.5rem" />
            </div>
            <Matrix3x2Box
              matrix={addMatrix2}
              changeFun={changeAddMatrix2}
              isDarkMode={props.isDarkMode}
              min={-20}
              max={20}
            />
            <div style={{ margin: '0 10px' }}>
              <MainText text="=" fontSize="1.5rem" />
            </div>
            <MathComponent
              tex={String.raw`\left[\begin{array}{clr} ${Number(addMatrix1[0]) + Number(addMatrix2[0])} & ${
                Number(addMatrix1[1]) + Number(addMatrix2[1])
              } \\ ${Number(addMatrix1[2]) + Number(addMatrix2[2])} & ${
                Number(addMatrix1[3]) + Number(addMatrix2[3])
              } \\ ${Number(addMatrix1[4]) + Number(addMatrix2[4])} & ${
                Number(addMatrix1[5]) + Number(addMatrix2[5])
              } \end{array}\right]`}
            ></MathComponent>
          </div>
          <MainText text="상자에 숫자를 넣어 행렬 덧셈의 결과를 확인해 보세요." fontSize="0.3rem" />
          <Height50 num="20px" />
          <div className={styles.sortRight}>
            <Matrix3x2Box
              matrix={minusMatrix1}
              changeFun={changeMinusMatrix1}
              isDarkMode={props.isDarkMode}
              min={-20}
              max={20}
            />
            <div style={{ margin: '0 10px' }}>
              <MainText text="-" fontSize="1.5rem" />
            </div>
            <Matrix3x2Box
              matrix={minusMatrix2}
              changeFun={changeMinusMatrix2}
              isDarkMode={props.isDarkMode}
              min={-20}
              max={20}
            />
            <div style={{ margin: '0 10px' }}>
              <MainText text="=" fontSize="1.5rem" />
            </div>
            <MathComponent
              tex={String.raw`\left[\begin{array}{clr} ${Number(minusMatrix1[0]) - Number(minusMatrix2[0])} & ${
                Number(minusMatrix1[1]) - Number(minusMatrix2[1])
              } \\ ${Number(minusMatrix1[2]) - Number(minusMatrix2[2])} & ${
                Number(minusMatrix1[3]) - Number(minusMatrix2[3])
              } \\ ${Number(minusMatrix1[4]) - Number(minusMatrix2[4])} & ${
                Number(minusMatrix1[5]) - Number(minusMatrix2[5])
              } \end{array}\right]`}
            />
          </div>
          <MainText text="상자에 숫자를 넣어 행렬 뺄셈의 결과를 확인해 보세요." fontSize="0.3rem" />
        </center>
        <Height50 num="60px" />
      </>
      {/* 스칼라 곱 */}
      <>
        <MainText text="스칼라 곱" fontSize="1.4rem" />
        <Height50 num="15px" />
        <MainText text="스칼라 곱은 행렬의 각 원소에 스칼라 값을 곱합니다." />
        <Height50 num="20px" />
        <center>
          <div style={{ height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className={styles.sortRight}>
              <input
                type="number"
                className={styles.tableInputNumber}
                style={{ color: props.isDarkMode ? 'white' : 'black' }}
                value={Number(scalar)}
                onChange={(e) => {
                  if (Number(e.target.value) > 20) setScalar(20);
                  else if (Number(e.target.value) < -20) setScalar(-20);
                  else setScalar(Number(e.target.value));
                }}
              />
              <div style={{ margin: '0 10px' }}>
                <MainText text="⋅" fontSize="1.5rem" />
              </div>
              <Matrix3x2Box
                matrix={scalarMatrix}
                changeFun={changeScalarMatrix}
                isDarkMode={props.isDarkMode}
                min={-20}
                max={20}
              />
              <div style={{ margin: '0 10px' }}>
                <MainText text="=" fontSize="1.5rem" />
              </div>
              <MathComponent
                tex={String.raw`\left[\begin{array}{clr} ${Number(scalar) * Number(scalarMatrix[0])} & ${
                  Number(scalar) * Number(scalarMatrix[1])
                } \\ ${Number(scalar) * Number(scalarMatrix[2])} & ${Number(scalar) * Number(scalarMatrix[3])} \\ ${
                  Number(scalar) * Number(scalarMatrix[4])
                } & ${Number(scalar) * Number(scalarMatrix[5])} \end{array}\right]`}
              />
            </div>
          </div>
          <MainText text="상자에 숫자를 넣어 스칼라 곱의 결과를 확인해 보세요." fontSize="0.3rem" />
        </center>
        <Height50 num="60px" />
      </>
      {/* 내적 */}
      <>
        <MainText text="행렬 곱 (내적)" fontSize="1.4rem" />
        <Height50 num="15px" />
        <MainText
          text="행렬의 곱셈은 곱해지는 행렬의 열의 수와 곱하는 행렬의 행의 수가 같을 때 가능합니다. 곱셈 결과, 행의 수는
        곱해지는 행렬의 행의 수와 같으며, 열의 수는 곱하는 행렬의 열의 수와 같습니다. 예를 들어 행렬 "
          isSpan={true}
        />
        <MathComponent tex={String.raw`A_{m\times k}`} display={false} />
        <MainText text="와 행렬 " isSpan={true} />
        <MathComponent tex={String.raw`B_{k\times n}`} display={false} />
        <MainText text="를 곱하면, " isSpan={true} />
        <MathComponent tex={String.raw`(m, n)`} display={false} />
        <MainText text=" 모양의 행렬이 나옵니다." isSpan={true} />
        <div style={{ fontSize: '1.6rem', margin: '40px 0' }}>
          <MathComponent tex={String.raw`A_{m\times k}\cdot B_{k\times n}=C_{m\times n}`} />
        </div>
        <MainText text="행렬 곱은 각 행의 원소와 열의 원소의 곱을 더하여 계산합니다. 식으로 나타내면 아래와 같습니다," />
        <div style={{ fontSize: '1.2rem', marginTop: '40px' }}>
          <MathComponent tex={String.raw`c_{ij} = \sum_{l=1}^k a_{il}b_{lj}`} />
        </div>
        <center className={styles.sortRight}>
          <div style={{ height: '100px', overflowY: 'hidden', position: 'relative' }}>
            <div className={styles.preventDrag} style={{ position: 'relative', top: '-10px' }}>
              <MathComponent
                tex={String.raw`\left[\begin{array}{clr} ㅤ & ㅤ & ㅤ& ㅤ\\  \\ \\ \end{array}\right]`}
                display={true}
              />
            </div>
            <table style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <tr>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix1[0]}
                    onChange={(e) => {
                      changeDotProductMatrix1(e.target.value, 0);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix1[1]}
                    onChange={(e) => {
                      changeDotProductMatrix1(e.target.value, 1);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix1[2]}
                    onChange={(e) => {
                      changeDotProductMatrix1(e.target.value, 2);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix1[3]}
                    onChange={(e) => {
                      changeDotProductMatrix1(e.target.value, 3);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix1[4]}
                    onChange={(e) => {
                      changeDotProductMatrix1(e.target.value, 4);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix1[5]}
                    onChange={(e) => {
                      changeDotProductMatrix1(e.target.value, 5);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
              </tr>
            </table>
            <div
              style={{
                position: 'absolute',
                width: '70px',
                height: '74px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1',
              }}
            >
              <div
                style={{
                  width: '80%',
                  margin: '10%',
                  marginTop: '-4px',
                  marginBottom: '13px',
                  background: '#b8a7ff78',
                  height: '20px',
                  borderRadius: '8px',
                }}
              ></div>
              <div
                style={{
                  width: '80%',
                  margin: '10%',
                  marginTop: '0',
                  marginBottom: '13px',
                  background: '#00ffee78',
                  height: '20px',
                  borderRadius: '8px',
                }}
              ></div>
              <div
                style={{
                  width: '80%',
                  margin: '10%',
                  marginTop: '0',
                  background: '#ff00ec78',
                  height: '20px',
                  borderRadius: '8px',
                }}
              ></div>
            </div>
          </div>
          <div style={{ margin: '0 3  px' }}>
            <MainText text="⋅" fontSize="1.5rem" />
          </div>
          <div style={{ height: '77px', overflowY: 'hidden', position: 'relative' }}>
            <div className={styles.preventDrag} style={{ position: 'relative', top: '-4px' }}>
              <MathComponent
                tex={String.raw`\left[\begin{array}{clr} ㅤ & ㅤ& ㅤ& ㅤ& ㅤ\\ \\ \end{array}\right]`}
                display={true}
              />
            </div>
            <table style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <tr>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix2[0]}
                    onChange={(e) => {
                      changeDotProductMatrix2(e.target.value, 0);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix2[1]}
                    onChange={(e) => {
                      changeDotProductMatrix2(e.target.value, 1);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix2[2]}
                    onChange={(e) => {
                      changeDotProductMatrix2(e.target.value, 2);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix2[3]}
                    onChange={(e) => {
                      changeDotProductMatrix2(e.target.value, 3);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix2[4]}
                    onChange={(e) => {
                      changeDotProductMatrix2(e.target.value, 4);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    className={styles.tableInputNumber}
                    style={{ color: props.isDarkMode ? 'white' : 'black' }}
                    value={dotProductMatrix2[5]}
                    onChange={(e) => {
                      changeDotProductMatrix2(e.target.value, 5);
                    }}
                    min={-20}
                    max={20}
                  />
                </td>
              </tr>
            </table>
            <div
              style={{
                position: 'absolute',
                width: '70px',
                height: '50px',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: '-1',
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <div
                style={{
                  width: '20px',
                  margin: '4%',
                  // marginBottom: '3px',
                  background: '#a7ffc978',
                  height: '92%',
                  borderRadius: '8px',
                }}
              ></div>
              <div
                style={{
                  width: '20px',
                  margin: '4%',
                  // marginTop: '0',
                  background: '#ffff0078',
                  height: '92%',
                  borderRadius: '8px',
                }}
              ></div>
              <div
                style={{
                  width: '20px',
                  margin: '4%',
                  // marginTop: '0',
                  background: '#ff2a0078',
                  height: '92%',
                  borderRadius: '8px',
                }}
              ></div>
            </div>
          </div>
          <div style={{ margin: '0 3px' }}>
            <MainText text="=" fontSize="1.5rem" />
          </div>
          <MathComponent
            tex={String.raw`\left[\begin{array}{clr} ${
              Number(dotProductMatrix1[0]) * Number(dotProductMatrix2[0]) +
              Number(dotProductMatrix1[1]) * Number(dotProductMatrix2[3])
            } & ${
              Number(dotProductMatrix1[0]) * Number(dotProductMatrix2[1]) +
              Number(dotProductMatrix1[1]) * Number(dotProductMatrix2[4])
            } & ${
              Number(dotProductMatrix1[0]) * Number(dotProductMatrix2[2]) +
              Number(dotProductMatrix1[1]) * Number(dotProductMatrix2[5])
            } \\ ${
              Number(dotProductMatrix1[2]) * Number(dotProductMatrix2[0]) +
              Number(dotProductMatrix1[3]) * Number(dotProductMatrix2[3])
            } & ${
              Number(dotProductMatrix1[2]) * Number(dotProductMatrix2[1]) +
              Number(dotProductMatrix1[3]) * Number(dotProductMatrix2[4])
            } & ${
              Number(dotProductMatrix1[2]) * Number(dotProductMatrix2[2]) +
              Number(dotProductMatrix1[3]) * Number(dotProductMatrix2[5])
            } \\ ${
              Number(dotProductMatrix1[4]) * Number(dotProductMatrix2[0]) +
              Number(dotProductMatrix1[5]) * Number(dotProductMatrix2[3])
            } & ${
              Number(dotProductMatrix1[4]) * Number(dotProductMatrix2[1]) +
              Number(dotProductMatrix1[5]) * Number(dotProductMatrix2[4])
            } & ${
              Number(dotProductMatrix1[4]) * Number(dotProductMatrix2[2]) +
              Number(dotProductMatrix1[5]) * Number(dotProductMatrix2[5])
            } \end{array}\right]`}
          />
        </center>
        <center>
          <>
            <span style={{ backgroundColor: color[0], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[0]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[3], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[0]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[0], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[1]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[3], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[3]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[0] * dotProductMatrix2[0] + dotProductMatrix1[1] * dotProductMatrix2[3]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[0], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[0]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[4], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[1]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[0], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[1]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[4], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[4]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[0] * dotProductMatrix2[1] + dotProductMatrix1[1] * dotProductMatrix2[4]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[0], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[0]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[5], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[2]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[0], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[1]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[5], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[5]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[0] * dotProductMatrix2[2] + dotProductMatrix1[1] * dotProductMatrix2[5]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <div
            style={{
              width: '200px',
              height: '0.5px',
              backgroundColor: props.isDarkMode ? 'rgb(190 190 190)' : 'rgb(129 118 118)',
              borderRadius: '2px',
            }}
          ></div>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[1], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[2]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[3], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[0]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[1], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[3]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[3], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[3]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[2] * dotProductMatrix2[0] + dotProductMatrix1[3] * dotProductMatrix2[3]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[1], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[2]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[4], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[1]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[1], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[3]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[4], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[4]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[2] * dotProductMatrix2[1] + dotProductMatrix1[3] * dotProductMatrix2[4]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[1], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[2]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[5], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[2]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[1], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[3]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[5], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[5]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[2] * dotProductMatrix2[2] + dotProductMatrix1[3] * dotProductMatrix2[5]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <div
            style={{
              width: '200px',
              height: '0.5px',
              backgroundColor: props.isDarkMode ? 'rgb(190 190 190)' : 'rgb(129 118 118)',
              borderRadius: '2px',
            }}
          ></div>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[2], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[4]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[3], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[0]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[2], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[5]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[3], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[3]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[4] * dotProductMatrix2[0] + dotProductMatrix1[5] * dotProductMatrix2[3]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[2], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[4]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[4], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[1]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[2], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[5]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[4], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[4]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[4] * dotProductMatrix2[1] + dotProductMatrix1[5] * dotProductMatrix2[4]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
          <Height50 num="5px" />
          <>
            <span style={{ backgroundColor: color[2], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[4]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[5], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[2]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" + " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[2], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix1[5]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText text=" x " fontSize="0.8rem" isSpan={true} />
            <span style={{ backgroundColor: color[5], borderRadius: '4px' }}>
              <MainText text={dotProductMatrix2[5]} fontSize="0.8rem" isSpan={true} />
            </span>
            <MainText
              text={` = ${dotProductMatrix1[4] * dotProductMatrix2[2] + dotProductMatrix1[5] * dotProductMatrix2[5]}`}
              fontSize="0.8rem"
              isSpan={true}
            />
          </>
        </center>
      </>
      {/* 항등 행렬 */}
      <>
        <Height50 num="70px" />
        <MainText text="항등 행렬 (Idnetity Matrix)" fontSize="1.4rem" />
        <Height50 num="15px" />
        <MainText
          text="행렬에서 행 번호와 열 번호가 같은 원소들을 주대각선이라고 합니다. 예를 들어 행렬 "
          isSpan={true}
        />
        <MathComponent tex={String.raw`A`} display={false} />
        <MainText text="의 원소 " isSpan={true} />
        <MathComponent tex={String.raw`a_{ii}`} display={false} />
        <MainText text="는 주대각선의 원소입니다." isSpan={true} />
        <MainText
          text="항등 행렬은 주대각선의 원소가 모두 1이고 나머지 원소가 모두 0인 행렬입니다. 항등 행렬은 주로 "
          isSpan={true}
        />
        <MathComponent tex={String.raw`I`} display={false} />
        <MainText text="로 나타내며, 열의 개수와 행의 개수가 같은 정사각 행렬입니다." isSpan={true} />
        <Height50 num="20px" />
        <center>
          <div style={{ height: '280px' }} className={styles.sortRight}>
            <MathComponent
              tex={String.raw`I = \left[\begin{array}{clr} ${identityMatrixText} \end{array}\right]`}
              display={true}
            />
          </div>
          <Slider
            style={{ marginLeft: '10px', width: '150px', height: '8px' }}
            axis="x"
            x={identityMatrixSize}
            onChange={({ x }) => setIdentityMatrixSize(x)}
            xmax={9}
            xmin={1}
            xstep={1}
          />
        </center>
      </>
      {/* 역 행렬 */}
      <>
        <Height50 num="70px" />
        <MainText text="역 행렬" fontSize="1.4rem" />
        <Height50 num="15px" />
        <>
          <MainText text="행렬 " isSpan={true} />
          <MathComponent tex={String.raw`A`} display={false} />
          <MainText
            text="에 대하여 곱했을 때, 항등 행렬이 되는 행렬을 역행렬이라고 합니다. 역행렬은 역함수와 같이 "
            isSpan={true}
          />
          <MathComponent tex={String.raw`A^{-1}`} display={false} />
          <MainText text="로 나타냅니다." isSpan={true} />
        </>
        <center>
          <div style={{ height: '150px' }} className={styles.sortRight}>
            {inverseMatrixA !== 0 ? (
              <div>
                <div className={styles.sortRight}>
                  <div style={{ height: '100px', overflowY: 'hidden', position: 'relative' }}>
                    <div className={styles.preventDrag} style={{ position: 'relative', top: '-10.5px' }}>
                      <MathComponent
                        tex={String.raw`\left[\begin{array}{clr} ㅤ & ㅤ & ㅤ & ㅤ& ㅤ\\  \\ \\ \end{array}\right]`}
                        display={true}
                      />
                    </div>
                    <table
                      style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    >
                      <tr>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[0]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 0);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[1]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 1);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[2]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 2);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[3]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 3);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[4]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 4);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[5]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 5);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[6]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 6);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[7]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 7);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                        <td>
                          <input
                            type="number"
                            className={styles.tableInputNumber}
                            style={{ color: props.isDarkMode ? 'white' : 'black' }}
                            value={inverseMatrix[8]}
                            onChange={(e) => {
                              changeInverseMatrix(e.target.value, 8);
                            }}
                            min={-20}
                            max={20}
                          />
                        </td>
                      </tr>
                    </table>
                  </div>
                  <MathComponent
                    tex={String.raw`\left[\begin{array}{clr} ${(
                      (inverseMatrix[4] * inverseMatrix[8] - inverseMatrix[5] * inverseMatrix[7]) /
                      inverseMatrixA
                    ).toFixed(1)} & ${(
                      (inverseMatrix[2] * inverseMatrix[7] - inverseMatrix[1] * inverseMatrix[8]) /
                      inverseMatrixA
                    ).toFixed(1)} & ${(
                      (inverseMatrix[1] * inverseMatrix[5] - inverseMatrix[2] * inverseMatrix[4]) /
                      inverseMatrixA
                    ).toFixed(1)} \\ ${(
                      (inverseMatrix[5] * inverseMatrix[6] - inverseMatrix[3] * inverseMatrix[8]) /
                      inverseMatrixA
                    ).toFixed(1)} & ${(
                      (inverseMatrix[0] * inverseMatrix[8] - inverseMatrix[2] * inverseMatrix[6]) /
                      inverseMatrixA
                    ).toFixed(1)} & ${(
                      (inverseMatrix[2] * inverseMatrix[3] - inverseMatrix[0] * inverseMatrix[5]) /
                      inverseMatrixA
                    ).toFixed(1)} \\ ${(
                      (inverseMatrix[3] * inverseMatrix[7] - inverseMatrix[4] * inverseMatrix[6]) /
                      inverseMatrixA
                    ).toFixed(1)} & ${(
                      (inverseMatrix[1] * inverseMatrix[6] - inverseMatrix[0] * inverseMatrix[7]) /
                      inverseMatrixA
                    ).toFixed(1)} & ${(
                      (inverseMatrix[0] * inverseMatrix[4] - inverseMatrix[1] * inverseMatrix[3]) /
                      inverseMatrixA
                    ).toFixed(1)} \end{array}\right]`}
                    display={true}
                  />
                  <div style={{ width: '6px' }}></div>
                  <div style={{ transform: 'translateX(-2px)' }}>
                    <MainText text="=" fontSize="0.8rem" />
                  </div>
                  <MathComponent
                    tex={String.raw`\left[\begin{array}{clr} 1 & 0 & 0 \\ 0 & 1 & 0 \\ 0 & 0 & 1 \end{array}\right]`}
                    display={true}
                  />
                </div>
                <MainText text="역행렬을 소수 둘째자리에서 반올림하였습니다." fontSize="0.8rem" />
              </div>
            ) : (
              <>
                <div style={{ height: '100px', overflowY: 'hidden', position: 'relative' }}>
                  <div className={styles.preventDrag}>
                    <MathComponent
                      tex={String.raw`\left[\begin{array}{clr} ㅤ & ㅤ & ㅤ & ㅤ& ㅤ\\  \\ \\ \end{array}\right]`}
                      display={true}
                    />
                  </div>
                  <table style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <tr>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[0]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 0);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[1]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 1);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[2]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 2);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[3]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 3);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[4]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 4);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[5]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 5);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[6]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 6);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[7]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 7);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                      <td>
                        <input
                          type="number"
                          className={styles.tableInputNumber}
                          style={{ color: props.isDarkMode ? 'white' : 'black' }}
                          value={inverseMatrix[8]}
                          onChange={(e) => {
                            changeInverseMatrix(e.target.value, 8);
                          }}
                          min={-20}
                          max={20}
                        />
                      </td>
                    </tr>
                  </table>
                </div>
                <MainText text="는 역행렬이 존재하지 않습니다." fontSize="1.2rem" isSpan={true} />
              </>
            )}
          </div>
        </center>
        <Height50 num="10px" />
      </>
      {/* 전치 행렬 */}
      <>
        <Height50 num="80px" />
        <MainText text="전치 행렬" fontSize="1.4rem" />
        <Height50 num="15px" />
        <>
          <MainText
            text="전치 행렬은 행과 열을 바꾼 행렬입니다. 다르게 표현하면 주대각선을 기준으로 회전시킨 행렬이지요. 행렬 "
            isSpan={true}
          />
          <MathComponent tex={String.raw`A`} display={false} />
          <MainText text="의 전치행렬은 " isSpan={true} />
          <MathComponent tex={String.raw`A^{T}`} display={false} />
          <MainText text="와 같이 나타냅니다." isSpan={true} />
          <Height50 num="40px" />
          <center className={styles.sortRight}>
            <Matrix3x2Box
              matrix={transposedMatrix}
              changeFun={changeTransposedMatrix}
              isDarkMode={props.isDarkMode}
              min={-20}
              max={20}
            />
            <MainText text="의 전치 행렬은 " isSpan={true} />
            <div style={{ width: '10px' }} />
            <MathComponent
              tex={String.raw`\left[\begin{array}{clr}${transposedMatrix[0]} & ${transposedMatrix[2]} & ${transposedMatrix[4]} \\ ${transposedMatrix[1]} & ${transposedMatrix[3]} & ${transposedMatrix[5]}\end{array}\right]`}
              display={false}
            />
          </center>
          <Height50 num="20px" />
          <MainText
            text="열의 개수가 1개인 행렬을 행 벡터라고 부릅니다. 또한 행의 개수가 1개인 행렬을 열 벡터라고 부릅니다. 일반적으로 행렬 "
            isSpan={true}
          />
          <MathComponent tex={String.raw`x`} display={false} />
          <MainText text="는 열 벡터( " isSpan={true} />
          <MathComponent
            tex={String.raw`\left[\begin{array}{clr}a_{1} & a_{2} & \dots & a_{n}\end{array}\right]`}
            display={false}
          />
          <MainText text=" )를 나타냅니다. 열 벡터를 나타낼 때는 전치 행렬을 활용하여 " isSpan={true} />
          <MathComponent tex={String.raw`x^{T}`} display={false} />
          <MainText text="와 같이 나타냅니다." isSpan={true} />
        </>
      </>
    </div>
  );
}
