import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

import 'katex/dist/katex.min.css';

import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import { InlineBox } from '@/components/utilities';

export default function Main() {
  return (
    <Paper title='공업일반 1人 1프로젝트 계획: SOCP-solver'>
      <div className='flex justify-center gap-2 my-2'>
        <Link
          href='/files/paper/1인1프로젝트-계획서&결과보고서_2024년1학기(IT).pdf'
          target='_blink'
        >
          <InlineBox leftIcon={AiOutlineLink}>
            계획서&결과보고서 PDF 파일
          </InlineBox>
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <p>
          디미고 공업일반 수업에서 1인 1프로젝트를 진행하며, 저는 SOCP-solver
          제작을 이번 기회를 맞아 계획해 보았습니다.{` `}
          ISEF 대회에 참가하였는데, 한 미국 학생은 SOCP 문제를 보다 효과적으로
          해결하는 방법을 제작하여 2등상을 수상하였습니다. (관련{' '}
          <ColorLink
            target='_blank'
            href='https://www.societyforscience.org/regeneron-sts/2024-student-finalists/michelle-wei'
          >
            Link
          </ColorLink>
          ) 그녀가 제시한 SOCP 해결 방법을 분석하고 이를 code로 구현하는 것을
          목표로 합니다.
        </p>
      </div>
    </Paper>
  );
}
