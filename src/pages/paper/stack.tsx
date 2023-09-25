import Paper from '@/components/Paper';
import { Box, ImageBox, SubTitle } from '@/components/utilities';

export default function Stack() {
  return (
    <Paper title='Stack'>
      <p>
        ↑ 브라우저 상단 왼쪽에 '◁' 버튼을 클릭하여 이전 페이지를 볼 수 있습니다.
        이전 페이지에서 해당 페이지로 다시 돌아오기 위해서는 '▷' 버튼을 사용할
        수 있습니다. 돌아가기 버튼은 어떻게 구현할 수 있을까요? 해답을 알기
        위해, 스택(stack)에 대하여 알아봅시다.
      </p>
      <p className='mt-6'>
        스택은 선형 자료 구조로, 배열과 유사합니다. 하지만 차이점이 있습니다.
        배열은 원하는 위치에 데이터를 삽입하고 출력할 수 있지만, 스택은 제일
        마지막에 삽입된 데이터가 제일 먼저 출력된다는 점입니다. 이를
        LIFO(Last-In First-Out)라고 합니다.
      </p>
      <ImageBox
        alt='stack'
        imgSrc='/images/paper/stack/stack.svg'
        className='mx-auto my-8 max-w-[500px]'
      />
      <p>
        사실 스택은 배열로 구현 가능하지만 스택은 배열과 달리 출력시 상수 시간이
        걸린다는 장점이 있습니다. 즉 스택에 적합한 상황이라면, 배열보다 더 빠른
        계산이 가능합니다. 흔히 스택에서 사용되는 명령어를 알아봅시다.
      </p>
      <SubTitle subTitle='push' />
      <p>
        push는 스택에 데이터를 추가하는 명령어입니다. stack1.push(421)과 같이
        데이터를 매개변수로 가집니다.
      </p>
      <Box className='font-fontMain text-2xl'>📂 stack1.push(421)</Box>
      <p>위 코드를 실행하면 스택, stack1에 제일 위에 421이 추가됩니다.</p>
      <SubTitle subTitle='pop' />
      <p>
        pop은 데이터를 삭제하는 명령어입니다. stack1.pop()과 같이 매개변수를
        가지지 않습니다. 또한 제일 위에 있는 데이터를 반환합니다.
      </p>
      <Box className='font-fontMain text-2xl'>{`📂 stack1.pop() => 421`}</Box>
      <p>
        stack1의 제일 윗 값이 421이라고 가정하여 봅시다. 위 코드를 실행하면
        stack1에서 421이 삭제되고 421이 출력됩니다. 삭제되는 과정은 제일 윗
        데이터의 주소값이 바뀌는 것과 같습니다.
      </p>
      <SubTitle subTitle='peek' />
      <p>
        peek는 제일 위에 존재하는 값을 출력합니다. pop과 다르게 삭제하지
        않습니다.
      </p>
      <Box className='font-fontMain text-2xl'>{`📂 stack1.peek() => 421`}</Box>
    </Paper>
  );
}
