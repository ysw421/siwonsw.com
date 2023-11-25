import React, { useEffect, useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import { useMediaQuery } from 'react-responsive';

import 'katex/dist/katex.min.css';

import Paper from '@/components/Paper';
import LocalMinSVG from '@/components/paper/momentum/LocalMinSVG';
import { SubTitle } from '@/components/utilities';

export default function Momentum() {
  const [isMd, setIsMd] = useState(false);

  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  return (
    <Paper title='Optimization'>
      <p>
        머신러닝(machine learning)은 일반적인 상황에서 데이터가 가장 잘 표현하는
        함수를 찾는 것을 말합니다. 이는 machine learning의 예측값과 실제
        데이터의 값의 차이를 최소화하는 문제로 변환할 수 있습니다. machine
        learning에서는 함수를 연속적이라 가정하는 것이 일반적입니다(보다 편한
        computing을 위함). 즉, machine learning은 연속적인 함수의 최솟값을 찾는
        문제(optimization, 최적화)로 변환 가능합니다. 비단, 함수를 최적화하는
        것은 간단한 작업이 아닙니다. 연속적인 함수인 <InlineMath math='f(x)' />
        를 가정하여 봅시다. <InlineMath math='x \in \mathbb{R}' />일 때, 모든
        경우에 대하여 함수값을 구하고 비교하여 최솟값을 구하는 것은
        불가능합니다. 만약 함수 <InlineMath math='f(x)' />가 미분 가능하다면,
        함수의 최솟값에서 미분값은 0을 가집니다. 또한 미분은 함수의 기울기(더
        정확히는 각 변화량에 따른 비율)를 나타내므로, <InlineMath math='x' />의
        직후와 직전의 함수값에 대한 정보를 포함합니다. 비단, 미분은 절대적인
        최솟값을 찾는 도구가 될 수 없습니다.
      </p>
      <div className='w-4/5 m-auto my-8 aspect-video'>
        <LocalMinSVG />
        {!isMd && (
          <>
            <p className='mt-1 text-center'>
              마우스로 드래그하여 local minimum과
            </p>
            <p className='text-center'>global minimum을 확인해보세요</p>
          </>
        )}
        {isMd && (
          <p className='mt-1 text-center'>
            마우스로 드래그하여 local minimum과 global minimum을 확인해보세요
          </p>
        )}
      </div>
      <p>
        위 object를 통해 local minimum과 global minimum에서 모두
        미분값(기울기)이 0임을 확인 가능합니다. 본 글에서는 local minimum을 찾을
        수 있는 경사 하강법(gradient descent) 및, 확률적으로 global minimum을
        찾을 수 있는 momentum 기법에 대하여 설명합니다. 추가로 제약된 구역에서의
        최적값을 구하는 기법을 다룹니다.
      </p>
      <SubTitle subTitle='경사 하강법(gradient descent)' />
      <p>
        앞서 언급한 바와 같이 연속인 함수에서 미분값은 직후와 직전 함수값에 대한
        정보를 포함합니다. 자세히 언급컨대, 미분값이 양수인 경우 직전 함수값이
        더 작으며, 음수인 경우 직후 함수값이 더 큽니다. local minimum을 찾기
        위해 미분값에 대한 정보를 바탕으로 작은 값만큼 이동하는 기법을 경사
        하강법이라 합니다. 여기서 '작은 값'은 얼마 만큼 움직일지 설정한 값으로
        step-size라고 부르며 symbol <InlineMath math='\gamma' />로
        표현하겠습니다(
        <InlineMath math='\gamma > 0' />
        ). 경사 하강법의 시간별 위치(index)를 <InlineMath math='x_t' />로
        표현하면 1차 최적화 알고리듬(output은 언제나{' '}
        <InlineMath math='\mathbb{R}' />) 경사 하강법의 알고리듬은 다음과
        같습니다.
        <div className='my-8'>
          <BlockMath math='x_{t+1} = x_t - \gamma \nabla f(x_t)^\intercal' />
        </div>
        위 식을 반복하면 local minimum에 수렴합니다.
      </p>
      <BlockMath math='f(x) = x^2 + 2x + 1' />
      <InlineMath math='\frac{df}{dx} = 2x + 2' />
    </Paper>
  );
}
