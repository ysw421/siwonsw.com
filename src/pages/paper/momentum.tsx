import React, { useEffect, useState } from 'react';
import { BlockMath, InlineMath } from 'react-katex';
import { useMediaQuery } from 'react-responsive';

import 'katex/dist/katex.min.css';

import Button from '@/components/buttons/Button';
import Paper from '@/components/Paper';
import GradientDescentSVG from '@/components/paper/momentum/GradientDescentSVG';
import LocalMinSVG from '@/components/paper/momentum/LocalMinSVG';
import MomentumSVG from '@/components/paper/momentum/MomentumSVG';
import { Box, SubTitle } from '@/components/utilities';

export default function Momentum() {
  const width = 1600;
  // const height = 1000;

  const [isMd, setIsMd] = useState(false);

  const [gd_a_function_value, setGd_A_function_value] = useState<number>(500);
  const [gd_b_function_value, setGd_B_function_value] = useState<number>(200);
  const [gd_c_function_value, setGd_C_function_value] = useState<number>(700);
  const [gd_startIdx, setGd_StartIdx] = useState<number>(700);
  const [gd_stepSize, setGd_StepSize] = useState<number>(0.05);

  const [gd_a, setGd_A] = useState<number>(width / 4);
  const [gd_b, setGd_B] = useState<number>(width / 2);
  const [gd_c, setGd_C] = useState<number>((width * 3) / 4);

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
        경우에 대하여 함숫값을 구하고 비교하여 최솟값을 구하는 것은
        불가능합니다. 만약 함수 <InlineMath math='f(x)' />가 미분 가능하다면,
        함수의 최솟값에서 미분값은 0을 가집니다. 또한 미분은 함수의 기울기(더
        정확히는 각 변화량에 따른 비율)를 나타내므로, <InlineMath math='x' />의
        직후와 직전의 함숫값에 대한 정보를 포함합니다. 비단, 미분은 절대적인
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
        미분값(기울기)이 0임을 확인 가능합니다(의심할 수 있으나, 본 함수는
        각각의 드래그 가능한 점에서 미분값이 0입니다). 본 글에서는 local
        minimum을 찾을 수 있는 경사 하강법(gradient descent) 및, 확률적으로
        global minimum을 찾을 수 있는 momentum 기법에 대하여 설명합니다. 추가로
        제약된 구역에서의 최적값을 구하는 기법을 다룹니다.
      </p>
      <SubTitle subTitle='경사 하강법(gradient descent)' />
      <p>
        앞서 언급한 바와 같이 연속인 함수에서 미분값은 직후와 직전 함숫값에 대한
        정보를 포함합니다. 자세히 언급컨대, 미분값이 양수인 경우 직전 함숫값이
        더 작으며, 음수인 경우 직후 함숫값이 더 큽니다. local minimum을 찾기
        위해 미분값에 대한 정보를 바탕으로 작은 값만큼 이동하는 기법을 경사
        하강법이라 합니다. 여기서 '작은 값'은 얼마 만큼 움직일지 설정한 값으로
        step-size라고 부르며 symbol <InlineMath math='\gamma' />로
        표현하겠습니다. step-size는 양수로 설정하여야 하는데(
        <InlineMath math='\gamma > 0' />
        ), 이는 미분값이 음수일 경우 오른쪽으로 양수일 경우 왼쪽으로 이동해야
        하기 때문입니다(자세한 것은 아래 식을 참조).{' '}
        <InlineMath math='\gamma < 0' />일 경우 경사 하강법식 local minimum이
        아닌 local maximum에 수렴하며 경사 상승법이라 부릅니다. 경사 하강법의
        시간별 위치(index)를 <InlineMath math='x_t' />로 표현하며 첫 index 값인{' '}
        <InlineMath math='x_0' />은 임의의 수로 설정합니다. 1차 최적화
        알고리듬(output은 언제나 <InlineMath math='\mathbb{R}' />
        )인 경사 하강법의 식은 다음과 같습니다.
      </p>
      <div className='my-8'>
        <BlockMath math='x_{t+1} = x_t - \gamma \nabla f(x_t)^\intercal' />
      </div>
      <p>
        step-size가 굉장히 작은 값을 고려하여{' '}
        <InlineMath math='f(x_{i+1}) \leq f(x_i)' />을 만족하여 위 식을 반복하면
        local minimum에 수렴합니다. 앞에서 등장한 object의 경우 input값이
        단변량이지만, 훌륭한 machine learning 모델을 위해 다변량 input값을
        고려할 필요가 있습니다. 위 식에서 전치 행렬(
        <InlineMath math='^\intercal' />
        )는 input값이 다변량인 경우를 고려하여 추가하였습니다.
      </p>
      <div className='w-4/5 m-auto my-8 aspect-video'>
        <GradientDescentSVG
          a_function_value={gd_a_function_value}
          b_function_value={gd_b_function_value}
          c_function_value={gd_c_function_value}
          setA_function_value={setGd_A_function_value}
          setB_function_value={setGd_B_function_value}
          setC_function_value={setGd_C_function_value}
          a={gd_a}
          b={gd_b}
          c={gd_c}
          setA={setGd_A}
          setB={setGd_B}
          setC={setGd_C}
          startIdx={gd_startIdx}
          setStartIdx={setGd_StartIdx}
          stepSize={gd_stepSize}
          setStepSize={setGd_StepSize}
        />
      </div>
      <p>
        위는 경사 하강법을 시각화한 object입니다. 경사 하강법의 결과, 처음
        위치에 따라 각각의 local minimum으로 수렴해간다는 것을 확인할 수
        있습니다. 식에서 예상 가능한 바와 같이, 기울기가 급격한 지점에서는
        빠르게 수렴해 가지만{' '}
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 4);
            setGd_B(width / 2);
            setGd_C((width * 3) / 4);
            setGd_A_function_value(400);
            setGd_B_function_value(420);
            setGd_C_function_value(400);
            setGd_StartIdx(500);
            setGd_StepSize(0.05);
          }}
        >
          Case 1
        </Button>
        , 기울기가 완만한 지점에서는 느리게 수렴해 값니다
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 4);
            setGd_B(width / 2);
            setGd_C((width * 3) / 4);
            setGd_A_function_value(200);
            setGd_B_function_value(700);
            setGd_C_function_value(200);
            setGd_StartIdx(500);
            setGd_StepSize(0.05);
          }}
        >
          Case 2
        </Button>
        . step-size 또한 수렴해가는 속도에 영향을 미칩니다. step-size가
        상대적으로 작은 상황(
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 4);
            setGd_B(width / 2);
            setGd_C((width * 3) / 4);
            setGd_A_function_value(200);
            setGd_B_function_value(700);
            setGd_C_function_value(200);
            setGd_StartIdx(500);
            setGd_StepSize(0.01);
          }}
        >
          Case 3
        </Button>
        )은 step-size가 상대적으로 큰 상황(
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 4);
            setGd_B(width / 2);
            setGd_C((width * 3) / 4);
            setGd_A_function_value(200);
            setGd_B_function_value(700);
            setGd_C_function_value(200);
            setGd_StartIdx(500);
            setGd_StepSize(0.1);
          }}
        >
          Case 4
        </Button>
        ,{' '}
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 4 - 100);
            setGd_B(width / 2);
            setGd_C((width * 3) / 4 + 100);
            setGd_A_function_value(0);
            setGd_B_function_value(1000);
            setGd_C_function_value(0);
            setGd_StartIdx(650);
            setGd_StepSize(85);
          }}
        >
          Case 5
        </Button>
        )보다 보다 느리게 수렴합니다. step-size가 어느 정도 이상인 경우(Case
        5)에는 곡선을 '지그재그' 모양으로 넘어가며 이동합니다. 비단 step-size가
        너무 큰 경우(
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 3);
            setGd_B(width / 2);
            setGd_C((width * 2) / 3);
            setGd_A_function_value(0);
            setGd_B_function_value(1000);
            setGd_C_function_value(0);
            setGd_StartIdx(750);
            setGd_StepSize(40);
          }}
        >
          Case 6
        </Button>
        ) 수렴하지 않거나 점점 최적값과 멀어질 수 있습니다. 이를 overshoot
        되었다고 표현합니다. Case 5의 경우, step-size를 인위적으로 범위를
        벗어나는 큰 값으로 지정하였습니다.
        <Box>
          ⚠️ 필자는 위 object를 제작하며 안정성(오류가 발생하지 않는)을 위해
          다양한 제약한 조건을 추가하였습니다(함수의 좌측과 우측은 2차 함수로
          구성된 방면, 중앙은 3차 함수로 구성 되었습니다. Case 5에서 start
          position이 긴 계곡에서 처음 부분이 아닌 중앙 부분에 위치하게 설정한
          이유도 이 점을 고려하여 생각해보면 좋을 것 같습니다.). 이로 인해
          훌륭한 overshoot의 예를 제작하지는 못한 점, 때문에 time이 3까지로
          제한되는 점, 그리고 step-size가 상대적으로 큰 경우에 대하여 다양한
          예시를 보여주지 못한 점에 대하여 양해 부탁합니다. 비단, 최적값(중앙)과
          점점 멀어져 가는 시각화를 통해 overshoot의 개념을 이해하는데
          충분하리라 생각합니다.
        </Box>
      </p>
      <p className='mt-8'>
        위 object의 설정값을 다양하게 조절하며, 경사 하강법의 시각화된 모습을
        바라보면, step-size의 설정값이 최적값을 구하는데 굉장히 중요함을 느낄 수
        있습니다. 위 object에서는 step-size의 설정값이 경사 하강법 과정에서
        변하지 아니하나, 경우에 따라 step-size를 변화시키면 더욱 효율적으로
        local minimum을 찾을 수 있습니다. 예컨대, 경사 하강법을 실행했을 때,
        함숫값이 증가하였다면 전으로 돌아가 step-size 값을 줄이며 함숫값이
        감소하였다면 step-size 값을 증가시킬 수 있습니다. 해당 방법은 Case 5와
        같이 지그재그하게 수렴하는 경우를 만듭니다.
      </p>
      <SubTitle subTitle='모멘텀(momentum)' />
      <p>
        앞서 언급한 바와 같이, 경사 하강법은 (적당한 step-size 값에 대하여)
        local minimum 값을 구합니다. 즉, 다음과 같은 상황(
        <Button
          className='py-1 mx-1'
          onClick={() => {
            setGd_A(width / 4);
            setGd_B(width / 2);
            setGd_C((width * 3) / 4);
            setGd_A_function_value(500);
            setGd_B_function_value(200);
            setGd_C_function_value(700);
            setGd_StartIdx(90);
            setGd_StepSize(0.1);
          }}
        >
          Case 7
        </Button>
        )에서 global minimum 값을 찾을 수 없습니다. 다음 상황과 같이 2개의 local
        minimum 사이 local maximum이 생길 때 이를 언덕이라 부르는데, momentum을
        통해 언덕을 띄어 넘을 수 있습니다. 즉, momentum은 확률적으로 global
        minimum을 구할 수 있습니다. 비단, 우리는 경사 하강법의 다른 문제점에
        주목합니다. 경사 하강법은 1차 미분값 정보만을 바탕으로 최적화가 이루어
        지기에, Case 5와 같이 지그재그 모양으로 수렴하는 경우가 발생하며 이 경우
        최적화가 느리게 진행됩니다(input의 차원을 늘리면 해당 경사 하강법의
        문제점에 대하여 더 좋은 시각화가 가능합니다. 시간이 남는다면 시각화를
        진행해 보겠습니다). momentum 기법의 경우 '공을 굴리는 것'과 같이 관성을
        이용합니다. 프로그래밍에서 메모리를 소비할 경우 연산 속도는 빨라지는데,
        momentum 또한 같습니다.
      </p>
      <div className='w-4/5 m-auto my-8 aspect-video'>
        <MomentumSVG />
      </div>
    </Paper>
  );
}
