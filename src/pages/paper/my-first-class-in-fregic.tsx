import Link from 'next/link';
import { AiOutlineLink } from 'react-icons/ai';

import Paper from '@/components/Paper';
import { InlineBox, PdfPreview } from '@/components/utilities';

export default function MyFirstClassInFregic() {
  return (
    <Paper title='🌿프레직 선형회귀 수업을 진행하며'>
      <div className='flex flex-col gap-6'>
        <p>
          디미고를 입학할 때 기억이 납니다. 코파일럿을 사용해보고 경이로웠다고
          그리고 내가 좋아하는 놀이 '코딩'을 일로 삼지 못할까봐 두려워서
          인공지능을 배워보고 싶다고 말했습니다. 이후 인공지능 동아리,
          🌿프레직의 동아리원이 되었으며 지금은 2학년이 되었죠. 오늘은 제가
          진행한 첫 수업이 있었던 날입니다. 오늘을 기억하며, 느낌점, 그리고
          아쉬웠던 점을 간단히 적어봅니다.
        </p>
        <p>
          오늘 저는 선형회귀에 대하여 수업하였습니다. 사실 저도 평소 선형회귀를
          직선으로 예측하는 모델이라 말하지만, 선형회귀 정의에 벋어나지 않는
          선형회귀를 알려주고 싶었습니다.
        </p>
        <PdfPreview fileSrc='/files/paper/my-first-class-in-fregic/LinearRegressionPDF.pdf' />
        <div className='my-8 flex justify-center gap-4'>
          <Link
            href='http://localhost:3000/files/paper/my-first-class-in-fregic/LinearRegressionPDF.pdf'
            target='_blink'
          >
            <InlineBox leftIcon={AiOutlineLink}>발표자료</InlineBox>
          </Link>
          <Link href='http://localhost:3000/files/paper/my-first-class-in-fregic/linear_regression.ipynb'>
            <InlineBox leftIcon={AiOutlineLink}>코드 (ipynb file)</InlineBox>
          </Link>
        </div>
        <p>
          이번 수업에서 핵심 2가지를 뽑자면, '머신러닝의 정의(목표)'와
          '평가'입니다. 선형회귀를 배우는 이유는 머신러닝의 핵심을 이해하기
          위함이라고 생각합니다. 따라서 머신러닝의 정의(목표)와 평가 방법을
          여러번, 강조하여 말했습니다.
        </p>
        <p>
          준비하며 다시 한번 가르치는 것의 어려움을 느꼈습니다. 이 자료를 만들기
          위해 책과 강의들을 찾아보며 비교해보고 생각했습니다. 이러한 과정이
          저에게 큰 도움이 되었습니다. 현재 읽고 있는 책인 『머신러닝 수학
          바이블(Mathematics for Machine Learning)』과 KOOC 강의 『인공지능 및
          기계학습 개론Ⅰ』이 자료를 준비하는데 큰 도움이 되었습니다.
        </p>
        <p>
          동아리 시간이 50분 밖에 안되어 아쉬웠습니다. 자료에 적어둔 내용 중
          건너 뛴 부분도 많았으며, 더 자세히 설명하지 못한 부분이 아쉬웠습니다.
          또한 어려운 부분을 질문해준 1학년 친구들에게 고마웠습니다.
        </p>
        <p className='text-end'>- 🌿Fregic 21wp 시원</p>
      </div>
    </Paper>
  );
}
