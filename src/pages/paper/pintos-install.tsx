import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import { SubTitle } from '@/components/utilities';

export default function Test() {
  return (
    <Paper title='Pintos 설치 시행 착오'>
      <p>
        본 페이지에서는 제가 Pintos를 설치하는 과정서 경험한 시행 착오에 대하여
        소개합니다.
      </p>
      <SubTitle subTitle='Pintos 공식 문서를 읽으며' />
      <div className='flex flex-col gap-6'>
        <p>
          <ColorLink
            target='_blank'
            href='https://web.stanford.edu/class/cs140/projects/pintos/pintos.html'
          >
            Pintos 공식 문서
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
    </Paper>
  );
}
