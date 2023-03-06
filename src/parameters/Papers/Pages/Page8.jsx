import { MainText, Height50, Line, Box } from './useful';
import { MathJaxContext, MathJax } from 'better-react-mathjax';
import { useState, useEffect } from 'react';
import Slider from 'react-input-slider';
import styles from './Pages.module.css';

export default function Page8(props) {
  const config = {
    loader: { load: ['[tex]/html', 'output/svg'] },
    tex: {
      packages: { '[+]': ['html'] },
      inlineMath: [
        ['$', '$'],
        ['\\(', '\\)'],
      ],
      displayMath: [
        ['$$', '$$'],
        ['\\[', '\\]'],
      ],
    },
  };

  const [matrix, setMatrix] = useState({ m: 4, n: 5 });
  const [matrixText, setMatrixText] = useState('');
  const [addMatrix1, setAddMatrix1] = useState([1, 2, 3, 4, 5, 6]);

  useEffect(() => {
    if (!(matrix.m > 7 && matrix.n > 7)) {
      let text = '\\(\\begin{bmatrix}';
      for (let i = 1; i <= matrix.m; i++) {
        for (let j = 1; j <= matrix.n; j++) {
          if (j === 1) text += ` a_{${i}${j}}`;
          else text += ` & a_{${i}${j}}`;
        }
        text += '\\\\';
      }
      text += '\\end{bmatrix}\\)';
      setMatrixText(text);
    }
  }, [matrix]);

  return (
    <>
      <MathJaxContext version={3} config={config}>
        <MainText text="행렬은 숫자를 직사각형 형태로 배열한 것입니다." />

        <MathJax>
          <MainText text="(m, n) 형태의 행렬은 다음과 같이 나타낼 수 있습니다. 단 " isSpan={true} />
          {'\\((m, n)\\in\\mathbb{N}\\)'}
        </MathJax>

        <Height50 />
        <center>
          <div style={{ height: '180px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            {matrix.m > 7 || matrix.n > 7 ? (
              <MathJax>
                {`\\(\\begin{bmatrix}a_{11} & a_{12} & \\cdots & a_{1${matrix.n}}\\\\a_{21} & a_{22} & \\cdots & a_{2${matrix.n}}\\\\\\vdots & \\vdots & \\ddots & \\vdots\\\\a_{${matrix.m}1} & a_{${matrix.m}2} & \\cdots & a_{${matrix.m}${matrix.n}}\\end{bmatrix}\\)`}
              </MathJax>
            ) : (
              <MathJax>{matrixText}</MathJax>
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
        <Height50 num="70px" />
        <MainText text="행렬 연산" fontSize="1.7rem" />
        <Line isDarkMode={props.isDarkMode} />
        <MainText text="행렬의 덧셈과 뺄셈은 각 원소에서 이루어집니다." />
        <center>
          <Height50 num="20px" />
          <MathJax>{'\\begin{bmatrix}ㅤㅤㅤㅤ\\\\\\\\\\\\\\end{bmatrix}'}</MathJax>
          <table>
            <tr>
              <td>
                <input
                  type="number"
                  className={styles.tableInputNumber}
                  style={{ color: props.isDarkMode ? 'white' : 'black' }}
                  value={addMatrix1[0]}
                />
              </td>
              <td>
                <input
                  type="number"
                  className={styles.tableInputNumber}
                  style={{ color: props.isDarkMode ? 'white' : 'black' }}
                  value={addMatrix1[1]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  className={styles.tableInputNumber}
                  style={{ color: props.isDarkMode ? 'white' : 'black' }}
                  value={addMatrix1[2]}
                />
              </td>
              <td>
                <input
                  type="number"
                  className={styles.tableInputNumber}
                  style={{ color: props.isDarkMode ? 'white' : 'black' }}
                  value={addMatrix1[3]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <input
                  type="number"
                  className={styles.tableInputNumber}
                  style={{ color: props.isDarkMode ? 'white' : 'black' }}
                  value={addMatrix1[4]}
                />
              </td>
              <td>
                <input
                  type="number"
                  className={styles.tableInputNumber}
                  style={{ color: props.isDarkMode ? 'white' : 'black' }}
                  value={addMatrix1[5]}
                />
              </td>
            </tr>
          </table>
          <MathJax>
            {'\\(\\begin{bmatrix}1'}
            {
              '& 2\\\\4 & 5\\\\7 & 8\\end{bmatrix}+\\begin{bmatrix}1 & 2\\\\4 & 5\\\\7 & 8\\end{bmatrix}=\\begin{bmatrix}2 & 4\\\\8 & 10\\\\14 & 16\\end{bmatrix}\\)'
            }
          </MathJax>
        </center>
        <Height50 />
        <MainText text="1차 다항 연립방정식을 행렬로 나타낼 수 있습니다." />
        <div>
          <MathJax>
            {'\\(x_1+5x+7=0x^2+9=9\\)'}
            {`\\(\\begin{bmatrix}a_{11} & a_{12} & \\cdots & a_{1n}\\\\a_{21} & a_{22} & \\cdots & a_{2n}\\\\\\vdots & \\vdots & \\ddots & \\vdots\\\\a_{m1} & a_{m2} & \\cdots & a_{mn}\\end{bmatrix}\\begin{bmatrix}x_1\\\\x_2\\\\\\vdots\\\\x_n\\end{bmatrix}=\\begin{bmatrix}b_1\\\\b_2\\\\\\vdots\\\\b_m\\end{bmatrix}\\)`}
          </MathJax>
        </div>
      </MathJaxContext>
    </>
  );
}
