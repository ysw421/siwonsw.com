import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

import 'katex/dist/katex.min.css';

import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import { InlineBox, SubTitle } from '@/components/utilities';

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
      </div>
      <div className='flex flex-col gap-6'>
        <p>
          ISEF에서 2등상 & STS 3등상을 수상한 작품을 분석합니다. STS에 참과하여
          poster가 online에 공개되어 있습니다. (
          <ColorLink
            target='_blank'
            href='https://sspcdn.blob.core.windows.net/files/Documents/SEP/STS/2024/posters/Wei_Michelle_display.pdf'
          >
            Poster Link
          </ColorLink>
          )
        </p>
        <SubTitle subTitle='Background' />
        <p>
          Second-Order Cone Programming은 Convex (오목) 함수를 최적화하는
          기법임을 확인하였습니다. 관심있는 Machine Learning 분야는 최적화하는
          문제 상황을 다루는데 (e.g., Gradient Descent (경사하강법) 또한 Convex
          함수에 대한 최적화 기법임) 해당 연구 역시 이와 관련됨을
          확인하였습니다. Second-Order Cone은 norm을 이루는 변수와 norm의
          최댓값의 집합임을 확인하였으며, 해당 cone을 조합하여 Second-Order Cone
          Program (SOCP)이 이루어짐을 확인함. SOCP의 목적 함수는 선형을, 조건
          함수는 Affine 공간에서 적용됨을 확인하였습니다. DB 수업시간에
          Cartesian product라는 개념을 학습하는데, 본 poster에서 또한 해당
          개념을 확인할 수 있었습니다. 여담으로, Cartesian은 철학자이자 수학자인
          르네 데카르트의 라틴어 이름임을 검색을 통해 처음 알게 되었습니다.
        </p>
        <SubTitle subTitle='Previous Work & Reseach Gap and My Approach' />
        <p>
          해당 연구는 이전 어떤 연구보다 SOCP 문제를 효과적으로 해결하였음을
          확인하였습니다. 해당 연구의 핵심 아이디어는 근사하는 방법 및, 문제를
          분할하는 방법을 사용하였음을 확인하였습니다.
        </p>
        <SubTitle subTitle='My Main Theorem' />
        <p>
          두가지 핵심 아이디어를 확인할 수 있었습니다. 각 step을 통해 보다
          최적값에 근사해가며, noise가 목표치 이하로 떨어지면 step을
          멈추었습니다.
        </p>
      </div>
    </Paper>
  );
}
