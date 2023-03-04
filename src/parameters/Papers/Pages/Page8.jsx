import { MainText, Height50, Line, Box } from './useful';
import { MathJaxContext, MathJax } from 'better-react-mathjax';

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

  return (
    <>
      <MathJaxContext version={3} config={config}>
        <MainText text="행렬은 숫자를 직사각형 형태로 배열한 것입니다." />
        <MainText text="(m, n) 형태의 행렬은 다음과 같이 나타낼 수 있습니다." />
        <MathJax>{'\\((m, n)\\in\\mathbb{N}\\)'}</MathJax>
        <MathJax>
          {
            '\\(\\begin{bmatrix}a_{11} & a_{12} & \\cdots & a_{1n}\\\\a_{21} & a_{22} & \\cdots & a_{2n}\\\\\\vdots & \\vdots & \\ddots & \\vdots\\\\a_{m1} & a_{m2} & \\cdots & a_{mn}\\end{bmatrix}\\)'
          }
        </MathJax>
      </MathJaxContext>
    </>
  );
}
