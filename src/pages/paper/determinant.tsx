import Paper from '@/components/Paper';
import ColorLink from '@/components/ColorLink';
import { BlockMath, InlineMath } from 'react-katex';
import 'katex/dist/katex.min.css';
import { SubTitle } from '@/components/utilities';

export default function Determinant() {
  return (
    <Paper title='행렬식 (Determinant)'>
      <Part1 />
      <SubTitle subTitle='라폴라스 전개 (Laplace expansion)' />
      <Part2 />
    </Paper>
  );
}

/**
 * 1. 행렬식의 정의
 **/
function Part1() {
  return (
    <>
      <p>
        <ColorLink href='/paper/matrix' target='_blink'>
          이전 노드
        </ColorLink>
        의 역행렬 부분서, 오브젝트를 통해 역행렬을 확인해 보면 '역행렬이
        존재하지 않습니다.'라고 나오는 경우가 있습니다(예컨대,{' '}
        <InlineMath>{`\\begin{bmatrix} 1 & -1 & -2 \\\\ 2 & 4 & 5 \\\\ 6 & 0 & -3 \\end{bmatrix}`}</InlineMath>
        ). 이는 모든 정사 행렬에 역행렬이 존재하는 것은 아님을 뜻합니다.
        그렇다면, 역행렬의 존재 여부를 어떻게 알 수 있을까요? 이를 알 수 있는
        방법, 행렬식에 대하여 알아봅시다.
      </p>
      <p className='mt-8'>
        <InlineMath>(2, 2)</InlineMath>모양의 행렬의 행렬식을 먼저 구해봅시다.
      </p>
      <p>
        행렬{' '}
        <InlineMath>{`A \\in \\mathbb{R}^{2\\times 2} = (a_{ij})`}</InlineMath>
        가 있습니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`A = \\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}`}</BlockMath>
      </div>
      <p>
        행렬 <InlineMath>A</InlineMath>의 행렬식은{' '}
        <InlineMath>det(A)</InlineMath> 또는{' '}
        <InlineMath>{`\\left| A \\right|`}</InlineMath>(절대값이 아닙니다)로
        {` `}
        표현합니다. <InlineMath>det(A)</InlineMath>의 값을 구해봅시다.{' '}
        <InlineMath>A</InlineMath>의 역행렬을 행렬{' '}
        <InlineMath>{`\\lambda B`}</InlineMath>(<InlineMath>A</InlineMath>는
        스칼라 값,{' '}
        <InlineMath>{`B \\in \\mathbb{R}^{2 \\times 2} = (b_{ij})`}</InlineMath>
        )라고 하면 다음을 만족해야 합니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`\\lambda\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix}\\begin{bmatrix} b_{11} & b_{12} \\\\ b_{21} & b_{22} \\end{bmatrix}=\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}`}</BlockMath>
      </div>
      <p>행렬 곱의 방법을 생각하면 아래 또한 성립합니다.</p>
      <div className='my-8 flex flex-col gap-2'>
        <BlockMath>{`a_{11} \\times b_{11} + a_{12} \\times b_{21} = {1 \\over \\lambda}`}</BlockMath>
        <BlockMath>{`a_{11} \\times b_{12} + a_{12} \\times b_{22} = 0`}</BlockMath>
        <BlockMath>{`a_{21} \\times b_{11} + a_{22} \\times b_{21} = 0`}</BlockMath>
        <BlockMath>{`a_{21} \\times b_{12} + a_{22} \\times b_{22} = {1 \\over \\lambda}`}</BlockMath>
      </div>
      <p>
        위 조건을 만족하기 위해서는{' '}
        <InlineMath>
          {`a_{11} \\times b_{11} + a_{12} \\times b_{21}`}
        </InlineMath>
        와{' '}
        <InlineMath>
          {`a_{21} \\times b_{12} + a_{22} \\times b_{22}`}
        </InlineMath>
        는 값이 같아야 하며 0이 아니어야 합니다. 또한{' '}
        <InlineMath>
          {`a_{11} \\times b_{12} + a_{12} \\times b_{22}`}
        </InlineMath>
        와{' '}
        <InlineMath>
          {`a_{21} \\times b_{11} + a_{22} \\times b_{21}`}
        </InlineMath>
        가 0임을 주목합시다. 행렬 <InlineMath>A</InlineMath>의 원소는 모두
        상수이며, 값을 바꿀 수 없습니다. 우리는 행렬 <InlineMath>B</InlineMath>
        의 원소를 구해야 합니다. 하지만 위 식은 4항 4차 방정식으로, 값을 구하기
        위해 가우스 소거법 등을 사용는 것이 일반적입니다. 그래서, 행렬식의 해를
        보여드리겠습니다.
      </p>
      <div className='my-8 flex flex-col gap-2'>
        <BlockMath>{`B = \\begin{bmatrix} a_{22} & -a_{12} \\\\ -a_{21} & a_{11}\\end{bmatrix}`}</BlockMath>
        <BlockMath>{`\\begin{bmatrix} a_{11} & a_{12} \\\\ a_{21} & a_{22} \\end{bmatrix} \\begin{bmatrix} a_{22} & -a_{12} \\\\ -a_{21} & a_{11}\\end{bmatrix} = {1\\over\\lambda}\\begin{bmatrix} 1 & 0 \\\\ 0 & 1 \\end{bmatrix}`}</BlockMath>
        <BlockMath>{`= \\begin{bmatrix} a_{11}a_{22}-a_{12}a_{21} & 0 \\\\ 0 & a_{11}a_{22} - a_{12}a_{21} \\end{bmatrix}`}</BlockMath>
      </div>
      <p>
        이는 연립방정식의 조건을 모두 만족합니다. 또한{' '}
        <InlineMath>{`\\lambda = a_{11}a_{22}-a_{12}a_{21}`}</InlineMath>입니다.
        위 행렬에서 <InlineMath>{`\\lambda`}</InlineMath>는 분모의 값이므로 0이
        될 수 없습니다. 바로 이 식이 행렬식입니다! 행렬식이 0이 되면 해당 행렬은
        역행렬이 존재하지 않습니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`det(A) = a_{11}a_{22}-a_{12}a_{21}, \\; (A\\in\\mathbb{R}^{2\\times 2})`}</BlockMath>
      </div>
      <p>
        예컨대, 행렬{' '}
        <InlineMath>{`A = \\begin{bmatrix} 3 & 6 \\\\ 2 & 4 \\end{bmatrix}`}</InlineMath>
        는 행렬식의 값이 0이므로 역행렬이 존재하지 않습니다.
      </p>
      <div className='my-8'>
        <BlockMath>{`det(A) = 3 \\times 4 - 6 \\times 2 = 0`}</BlockMath>
      </div>
      <p>
        행렬의 크기가 달라지면 행렬식 또한 달라집니다. 그렇다면, 다른 크기의
        행렬 또한 이처럼 복잡한 과정을 통해 구해야 할까요? 아닙니다. 라폴라스
        전개를 통해 쉽게 구할 수 있습니다. 라폴라스 전개에 대하여 알아봅시다.
      </p>
    </>
  );
}

/**
 * 2. 라폴라스 전개
 **/
function Part2() {
  return (
    <>
      <p>라폴라스 전개(또는 코팩터 전개라고 불리는)를 이용하여</p>
    </>
  );
}
