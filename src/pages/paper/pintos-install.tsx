import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import { ImageBox, SubTitle } from '@/components/utilities';

export default function Test() {
  return (
    <Paper title='Pintos 설치 시행 착오'>
      <p>
        본 페이지에서는 제가 Pintos를 설치하는 과정서 경험한 시행 착오에 대하여
        소개합니다.
      </p>
      <SubTitle subTitle='Pintos 문서를 읽으며' />
      <div className='flex flex-col gap-6'>
        <p>
          <ColorLink
            target='_blank'
            href='https://web.stanford.edu/class/cs140/projects/pintos/pintos.html'
          >
            Pintos 문서
          </ColorLink>
          를 읽으며, Pintos에 대하여 탐구하기로 계획한 공일 수업 1人 1project를
          시작하였습니다. 1.1.2. Building Pintos에서는 Pintos 설치 방법에 대하여
          다루며, 이는 매우 간단한 작업임을 확인할 수 있었습니다(directory를
          설치하고 Make하는 작업). 1. Introduce에서 Boch, QEMU, 또는 VMware를
          통해 Pintos를 실행 가능함을 소개되어 저의 WSL2 환경에 QEMU를
          설치하였으며, 설치 과정에서 고난을 경험할지 상상도 못하고 있었습니다.
          비단, 설치 과정서 error가 발생하고, 원활한 Pintos의 실행이 아니 되어
          고난이 시작되었습니다.
        </p>
        <p>
          처음에는 제가 문서에서 놓친 부분이 없는지 다시 확인하고 기존 파일을
          삭제 후 다시 시도하길 반복하였습니다. 그러나 진전은 없었고, 32bit
          환경을 위한 library 설치의 연속이었습니다(순정 Pintos는 32bit 환경서
          작동합니다). 이후, 인터넷에서 Pintos 설치에 대하여 검색하며, 하나의
          블로그 글을 보게 되었습니다(놀랍게도 Pintos는 영어로 검색하는 것 보다
          한글로 검색하는 것이 효과적이었습니다!).
        </p>
      </div>
      <SubTitle subTitle='Ubuntu 12와 함께' />
      <div className='flex flex-col gap-6'>
        <p>
          제가 찾은 블로그 글에는 Ubuntu 12.04 intel 32bit 버전을 사용해야
          한다고 적혀 있었습니다. '반드시'라는 단어에 볼드체를 사용했을 만큼
          강조 되어있었습니다. 저는 VM ware에 해당 버전 Ubuntu를 설치하였습니다.
          비단, 해당 버전은 2012년에 릴리즈 되었으며, 현재 설치는 가능하나,
          지원이 종료되었습니다. 다시 말해, apt를 통해 git과 같은 필수적인
          모듈을 설치할 수 없었습니다. 저는 QEMU 등 Pintos 설치를 위하여 필요한
          모듈들을 github에 release된 file들을 찾아 설치하였습니다. 비단
          의존성으로 인해 설치에 끝이 없었고, 다른 방법을 찾아야만 했습니다.
        </p>
      </div>
      <SubTitle subTitle='WSL2와 함께' />
      <div className='flex flex-col gap-6'>
        <p>
          다시 WSL2 환경으로 돌아왔습니다. 순정 Pintos는 32 bit 환경에서
          작동합니다. 물론, '순정'이라는 단어를 사용한 것은 개조된 Pintos가
          존재하기 때문입니다. kaist에서 수업을 위해 개조되었다는 Pintos-kaist는
          64 bit 환경에서 설치 가능하였으며, WSL이 가능한 ubuntu 18.04에서
          설치한 블로그 글이 다수 존재했습니다. 글에 나온 step by step
          solution을 따라가며 저 또한 Pintos-kaist를 설치할 수 있었습니다.
          아래는 성공적으로 Pintos를 실행한 화면입니다.
        </p>
        <ImageBox
          imgSrc='/images/paper/pintos-install/pintos-first.png'
          alt='Pintos 실행 화면'
          className='mx-auto max-w-[500px]'
        />
        <p>
          이제 1人 1project를 참으로 시작합니다. Pintos를 설치하는데 이렇게 많은
          고난을 경험하고 시간을 투자하게 될거라고 상상하지 못했습니다. 이제,
          Pintos를 통해 OS에 대하여 하나 하나 알아가 보겠습니다. :) 글 읽어
          주어서 고맙습니다.
        </p>
      </div>
    </Paper>
  );
}
