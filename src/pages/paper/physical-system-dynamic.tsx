import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import Button from '@/components/buttons/Button';
import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import SystemDynamicSVG from '@/components/paper/physical-system-dynamic/SystemDynamicSVG';
import VisualizationSVG from '@/components/paper/physical-system-dynamic/VisualizationSVG';
import { Box, ImageBox, SubTitle } from '@/components/utilities';

export default function PhysicalSystemDynamic() {
  const [isMd, setIsMd] = useState(false);
  const md = useMediaQuery({
    query: '(min-width : 768px)',
  });
  const length = 326.67;
  // const length = 6;
  const [position, setPosition] = useState<number>(length);
  const [update, setUpdate] = useState<boolean>(false);
  const [weightOfCart, setWeightOfCart] = useState<number>(1);
  const [weightOfWeight, setWeightOfWeight] = useState<number>(2);
  const [isAutoPlay, setIsAutoPlay] = useState<boolean>(true);
  const [accelerationOfGravity, setAccelerationOfGravity] =
    useState<number>(9.8);

  useEffect(() => {
    setIsMd(md);
  }, [md]);

  return (
    <Paper title='System Dynamic - physcial'>
      <p>
        프로젝트에 대한 설명은 아래에서 다룹니다. reset 버튼을 클릭하거나
        그래프를 두번 클릭 함으로써 시뮬레이션을 다시 확인할 수 있습니다. 수레
        질량, 추 질량 그리고 중력 가속도를 조절(slide)하여 자신이 원하는 상황을
        setting한 후 '자동 재생' 버튼을 클릭하여 시뮬레이션을 확인해 보세요 :)
      </p>
      <>
        <div className='w-4/5 m-auto my-8 aspect-video'>
          <VisualizationSVG position={((length - position) * 500) / length} />
        </div>
        <div className='flex flex-col items-center gap-2'>
          <input
            type='range'
            className='w-4/5'
            min={0}
            max={length}
            step={1}
            value={position}
          />
          <Button
            onClick={() => {
              setUpdate((prev) => !prev);
              setIsAutoPlay(true);
            }}
          >
            reset
          </Button>
        </div>
        <div className='w-4/5 m-auto my-8'>
          <SystemDynamicSVG
            length={length}
            weightY={position}
            setWeightY={setPosition}
            update={update}
            weightOfCart={weightOfCart}
            weightOfWeight={weightOfWeight}
            isAutoPlay={isAutoPlay}
            setIsAutoPlay={setIsAutoPlay}
            accelerationOfGravity={accelerationOfGravity}
          />
        </div>
        <div
          className={`flex items-center justify-evenly ${!isMd && 'flex-col'}`}
        >
          <div className='flex items-center w-full gap-2 justify-evenly'>
            <div>
              <p>수레 질량: </p>
              <input
                type='range'
                min={0}
                max={5}
                step={1}
                value={weightOfCart}
                onChange={(e) => {
                  setWeightOfCart(Number(e.target.value));
                  setIsAutoPlay(false);
                }}
              />
            </div>
            <div>
              <p>추 질량: </p>
              <input
                type='range'
                min={0}
                max={5}
                step={1}
                value={weightOfWeight}
                onChange={(e) => {
                  setWeightOfWeight(Number(e.target.value));
                  setIsAutoPlay(false);
                }}
              />
            </div>
          </div>
          <div className='flex items-center w-full gap-2 justify-evenly'>
            <div>
              <p>중력 가속도: </p>
              <input
                type='range'
                min={0.1}
                max={10}
                step={0.1}
                value={accelerationOfGravity}
                onChange={(e) => {
                  setAccelerationOfGravity(Number(e.target.value));
                  setIsAutoPlay(false);
                }}
              />
            </div>
            <div className='flex items-center gap-2'>
              <p>자동 재생: </p>
              <input
                type='checkbox'
                checked={isAutoPlay}
                onChange={(e) => {
                  setIsAutoPlay(e.target.checked);
                }}
              />
            </div>
          </div>
        </div>
      </>
      <div className='mt-24' />
      <SubTitle subTitle='배경' />
      <p>
        본 프로젝트는 학교 물리 수업 시간에 발표를 할 기회가 생겨 제작한
        프로젝트입니다. 평소 '우리의 세상을 시뮬레이션해 보고 싶다'라는
        막연하지만 확실한 꿈을 가지고 있었는데, 꿈을 이루어가는 하나의
        step으로써 본 프로젝트를 진행하게 되었습니다. 본 프로젝트는 물리 시간에
        풀어본 수능(또는 모의고사)에 출제된 문제를 시뮬레이션하는 것을 목표로
        하며, 성공적으로 프로젝트가 진행되었습니다(
        <ColorLink
          target='_blank'
          href='https://www.google.com/search?q=%EB%AC%BC%EB%A6%AC+%EC%88%98%EB%A0%88+%EC%B6%94+%EB%AC%B8%EC%A0%9C&sca_esv=593577750&tbm=isch&sxsrf=AM9HkKm8WqkAhRqMcEgMFIPYJYR_zniSnQ:1703506745637&source=lnms&sa=X&ved=2ahUKEwjZu8iTyaqDAxVUgVYBHVO_D6wQ_AUoAXoECAIQAw&biw=1536&bih=718&dpr=1.25#imgrc=sDULDS6zX5jLEM'
        >
          구글에 '물리 수레 추 문제'라고 검색
        </ColorLink>
        시 비슷한 문제가 검색됨을 알 수 있습니다 ).
      </p>
      <SubTitle subTitle='System Dynamic' />
      <p className='mt-2'>
        해당 프로젝트는{' '}
        <ColorLink
          target='_blank'
          href='https://en.wikipedia.org/wiki/System_dynamics#:~:text=System%20dynamics%20(SD)%20is%20an,table%20functions%20and%20time%20delays.'
        >
          system dynamic(SD)
        </ColorLink>
        을 이용하여 구현하였으며, 위 그래프가 SD를 graphic적으로 표현한
        것입니다. wikipedia는 SD를 다음과 같이 설명하고 있습니다.
      </p>
      <Box overClassName='m-2'>
        System dynamics (SD) is an approach to understanding the nonlinear
        behaviour of complex systems over time using stocks, flows, internal
        feedback loops, table functions and time delays.
      </Box>
      <p>
        해당 설명에서 우리는 'nonlinear'과 'complex systems'에 초점을 맞출
        필요가 있습니다. 사실 둘은 SD에서 큰 관련이 있지만, 우선 'complex
        systems'를 구현할 수 있다는 점서 그래프를 무구히 이어 나갈 수 있음을 알
        수 있습니다. wikipedia에서 설명하는 SD의 2 종류에 대하여 알아보고
        'nonlinear'의 뜻을 알아봅시다.
      </p>
      <p className='mt-8'>
        wikipedia에서 'Causal loop diagrams(CLD)'와 'Stock and flow diagrams'에
        대하여 다룹니다. CLD의 경우 word간의 arrow의 음 또는 양의 관계에 따라
        reinforcing과 balancing이 발생하게 됩니다. ('The use of words and arrows
        (known in network theory as nodes and edges)' -{' '}
        <ColorLink
          target='_blank'
          href='https://en.wikipedia.org/wiki/Causal_loop_diagram'
        >
          wikipedia
        </ColorLink>
        ) reinforcing은 word가 점점 커지는(또는 작아지는) 것을 말하며,
        balancing은 word가 커짐과 작아짐을 반복하여 유지하고 수렴해가는 것을
        말합니다. 아래 그림에서 좌는 balancing, 우는 reinforcing을 나타냅니다.
      </p>
      <ImageBox
        alt='causal loop diagrams'
        imgSrc='//upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Adoption_CLD.svg/528px-Adoption_CLD.svg.png'
        className='object-contain w-4/5 mx-auto mt-8 mb-1 bg-white rounded-lg'
      />
      <p className='flex justify-center'>출처: wikipedia</p>
      <p className='mt-2'>
        비단, CLD는 복잡해질 경우 시각화에 어려움이 있습니다. 예컨대 커지는 것을
        반복하여 reinforcing으로 생각되는 모델이 reinforcing 되지 아니할
        가능성이 있습니다. 또한 CLD는 변화량에 대하여 선형인 경우만이
        가능합니다. wikipedia에 있는 이미지를 보면, 그래프가 비선형적임을 확인할
        수 있으나, 이는 선형회귀(linear regression)가 특성값(input features)에
        대하여 선형이 아닌 parameter에 대하여 선형인 것과 같은 맥락입니다.
        요컨대 Causal Loop Diagrams는 시뮬레이션을 간단히 시각화하는 것이
        가능하지만, 시각화에 숨어있는 요소가 존재하며, 변화량에 대하여
        선형적이지 못합니다.
      </p>
      <p className='mt-8'>
        해당 프로젝트에서는 wikipedia에서 2번째로 등장한 Stock and flow
        diagrams를 활용하여 modeling하였습니다. Stock and flow는 주요한 값을
        stock로 정하여 flow를 통한 변화를 나타냅니다.
      </p>
      <ImageBox
        alt='stock and flow'
        imgSrc='//upload.wikimedia.org/wikipedia/commons/3/3b/Adoption_SFD.png'
        className='object-contain w-4/5 max-w-md mx-auto mt-8 mb-1 rounded-lg'
      />
      <p className='flex justify-center'>출처: wikipedia</p>
      <p className='mt-2'>
        위 이미지에서 네모로 표시된 부분은 stock라고 부르며 시뮬레이션을 통해
        관심있게 보아야 할 값입니다. 시간에 따라 변화하는 것을 확인하고픈 변수를
        stock로 설정합니다. flow는 모래시계 모양(이미지에서 stock 사이)으로
        표현하며 stock의 변화량(미분값)을 나타냅니다. 즉 flow는 stock의 다음
        상태에 영향을 미칩니다. stock and flow의 가장 큰 특징은 변화된 값이
        flow에 영향을 미칠 수 있기에, CLD와 달리 비선형적 모델링이 가능하다는
        점입니다. flow에 영향을 미치는 변수는 auxiliary라고 하며, 변하지 않는
        값은 parameter입니다.
      </p>
      <SubTitle subTitle='프로젝트에서의 System Dynamic' />
      <p>
        본 프로젝트에서 관심을 가진 값은 운동 에너지와 위치 에너지입니다. 수레와
        추 각각의 운동 에너지와 위치 에너지는 변화하지만, 전체에 대한 운동
        에너지와 위치 에너지의 합은 보존 되어야 합니다. 따라서 전체 운동
        에너지와 전체 위치 에너지를 stock로 정의하였습니다.
      </p>
      <p className='mt-2'>
        본 프로젝트에서 처음 설정값, 즉 parameter는 수레의 질량, 추의 질량,
        그리고 중력 가속도가 있습니다. 해당 값은 나머지 auxiliary 값의 기초가
        되며 flow에 영향을 미칩니다.
      </p>
    </Paper>
  );
}
