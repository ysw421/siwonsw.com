import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';
import { InlineMath } from 'react-katex';

import 'katex/dist/katex.min.css';

import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import { InlineBox } from '@/components/utilities';

export default function Main() {
  return (
    <Paper title='공업일반 1人 1프로젝트 계획: Pintos'>
      <div className='flex justify-center gap-2 my-2'>
        <Link
          href='/files/paper/1인1프로젝트-계획서_2024년1학기(IT).pdf'
          target='_blink'
        >
          <InlineBox leftIcon={AiOutlineLink}>계획서 PDF 파일</InlineBox>
        </Link>
      </div>
      <div className='flex flex-col gap-6'>
        <p>
          디미고 공업일반 수업에서 1인 1프로젝트를 진행하며, 저는 Pintos 제작을
          이번 기회를 맞아 계획해 보았습니다.{` `}
          <ColorLink
            target='_blank'
            href='https://en.wikipedia.org/wiki/Pintos'
          >
            Pintos(link: wikipedia)
          </ColorLink>
          는 stanford에서 교육용으로 제작한 운영체제입니다. Wikipedia의 pintos
          문서에 적용된 4개의 언어 중 한국어가 존재한다는 점에서, pintos는
          한국에서 굉장한 관심을 받고 있는 것으로 추측됩니다.
        </p>
        <p>
          pintos는{` `}
          <ColorLink
            target='_blank'
            href='https://web.stanford.edu/class/cs140/projects/pintos/pintos.html'
          >
            온라인 문서
          </ColorLink>
          {` `}및{` `}
          <ColorLink
            target='_blank'
            href='https://web.stanford.edu/class/cs140/projects/pintos/pintos.pdf'
          >
            <InlineMath>\LaTeX</InlineMath>
          </ColorLink>
          문서를 제공하여 누구나 제작해볼 수 있습니다. 비단, 문서에서 또한
          pintos를 제작하는 것은 굉장히 어렵다고 언급한 만큼, 제가 잘 해낼 수
          있을까 걱정되기도 합니다. 이러한 걱정을 뒤로하고, 공업 일반 1人
          1프로젝트 시간을 활용하여 좋은 배움을 얻을 수 있길 희망합니다.
        </p>
      </div>
    </Paper>
  );
}
