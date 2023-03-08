import { MainText, Height50, Line, Box } from './useful';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';
import styles from './Pages.module.css';
import { MathComponent } from 'mathjax-react';

const Matrix3x2Box = (props) => {
  return (
    <div style={{ height: '100px', overflowY: 'hidden', position: 'relative' }}>
      <div className={styles.preventDrag}>
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
      <MainText text="행렬 곱 (점 곱)" fontSize="1.4rem" />
      <Height50 num="15px" />
      <MainText
        text="행렬의 곱셈은 곱해지는 행렬의 열의 수와 곱하는 행렬의 행의 수가 같을 때 가능합니다. 곱셈의 결과, 행의 수는
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
        <Matrix3x2Box
          matrix={dotProductMatrix1}
          changeFun={changeDotProductMatrix1}
          isDarkMode={props.isDarkMode}
          min={-20}
          max={20}
        />
        <div style={{ margin: '0 3  px' }}>
          <MainText text="⋅" fontSize="1.5rem" />
        </div>
        <div style={{ height: '77px', overflowY: 'hidden', position: 'relative' }}>
          <div className={styles.preventDrag}>
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
      <MainText text="행렬 곱은 아래와 같이 계산할 수 있습니다." />
      <Height50 num="20px" />
      <MainText text="1차 다항 연립방정식을 행렬로 나타낼 수 있습니다." />
      <div>
        <MathComponent tex="\\(x_1+5x+7=0x^2+9=9\\)" display={true} />
      </div>
    </div>
  );
}
