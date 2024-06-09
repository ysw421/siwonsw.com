import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

import 'katex/dist/katex.min.css';

import Paper from '@/components/Paper';
import { InlineBox } from '@/components/utilities';

export default function Main() {
  return (
    <Paper title='공업일반 1人 1프로젝트: SOCP-solver'>
      <div className='flex justify-center gap-2 my-2'>
        <Link
          href='/files/paper/1인1프로젝트-계획서&결과보고서_2024년1학기(IT).pdf'
          target='_blink'
        >
          <InlineBox leftIcon={AiOutlineLink}>
            계획서&결과보고서 PDF 파일
          </InlineBox>
        </Link>
        <Link href='/files/paper/SOCP-solver.py' target='_blink'>
          <InlineBox leftIcon={AiOutlineLink}>code</InlineBox>
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <p>ISEF에서 2등상 & STS 3등상을 수상한 작품을 코드로 구현합니다.</p>
        <p>
          Python을 활용하여 해당 방법을 code로 구현하였습니다.
          approximation_step과 cone_splitting 함수는 제시된 두가지
          breakthrough를 나타냅니다. 각 step에 대하여 조건을 가진 최적화
          (라그랑주 승수법)을 활용하기 위해 scipy의 minimize 함수를
          활용하였습니다. 연구의 poster가 빈약하여 (자세한 내용을 첨가하지 않아)
          구현한 code가 방법을 옳게 구현하였는지는 확신할 수 없습니다. 비단 chat
          gpt가 생성한 두가지 문제 상황 을 해당 code가 해결하였습니다.
        </p>
      </div>
    </Paper>
  );
}
