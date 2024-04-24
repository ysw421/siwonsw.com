import 'katex/dist/katex.min.css';

import Paper from '@/components/Paper';
import { BookBox } from '@/components/utilities';

export default function Determinant() {
  return (
    <Paper title='책 『퀀텀의 세계』를 읽고'>
      <div className='flex flex-col gap-6'>
        <p>
          본 글은 책 『퀀텀의 세계』를 읽고 작성한 독후감입니다. 길지만,
          재미있게 읽어주시면 고맙겠습니다 :){'\n'}
        </p>
        <BookBox
          imgSrc='/images/paper/world-of-quantum/book-img.jpg'
          title='퀀텀의 세계'
          subTitle='2021'
          author='이순칠'
        />
        <p>
          어린 시절부터 프로그래밍에 관심 많은 나였기에 연산 속도 향상에 대한
          방법을 사유하고 양자 컴퓨터의 병렬성에 대하여 관심을 가지는 것은
          자연스러운 성장 과정이었다. 이 책을 읽기 전 2권의 양자 컴퓨터 관련
          책을 읽었는데, 각각은 컴퓨터 연산에 대한 수학적 이해와 활용 기술에
          주목하였다. 도서관에서 우연히 이 책을 접하였는데, 첫째로 물리학자가
          집필하였다는 점이 마음에 들었고, 둘째, 양자 컴퓨터의 활용보다는 구성과
          배경에 대하여 초점을 맞추었다는 점이 이전 책과 차별화되었다. 과학
          도서서 액자식 구성으로 글을 이룬다는 점 또한 특별났다. 학교에서
          프로그래밍을 넘어 컴퓨터의 시스템을 배우며 느낀 점이 있다면, 그저
          프로그래밍 언어의 코드를 작성하던 나의 과거는 발전이 불가하다는
          점이다. 얼마 전 학교 선배로부터 AI 훈련 속도 향상을 위해 개발된 GPU에
          대하여 전해 들었는데, 실수를 정수로 변환하여 연산을 수행한다. 현
          컴퓨터 체제는 실수를 연산하는 과정이 복잡하다. 해당 아이디어는 현
          컴퓨터 체제에 대한 이해로 가능한 일이 있으며, 체제 전체를 변환하기
          위한 연구의 현시점이 양자 컴퓨터라고 생각한다. 즉, 이전 읽은 책과 달리
          양자 컴퓨터의 구성에 대하여 서술하여 마음에 들었고, 이는 내가 해당
          책을 읽은 이유였다. 본 독후감에서는 기술적 부분을 제외하여, 책을
          읽으며 뇌리에 박힌 부분과 사유한 점을 서술하여 본다.
        </p>
        <p>
          이 책에서 양자 컴퓨터를 설명하기 위해 양자물리학의 배경 및 역사를
          설명하는데, 이는 내가 기존에 읽었던 책과의 커다란 차별점이다. 이러한
          배경과 역사를 읽는 것은 나에게 역사책을 읽는 것과 같은 커다란
          재미였다. 책 『역사로 배우는 공업수학』을 읽으며 관련한 기술이나 식,
          또는 학문이 만들어진 이유와 배경을 아는 것은 목적을 이해하는 것임을
          느꼈다. 책은 양자 물리학이 발전하며 그 과정 속 존재한 수많은 논쟁과
          의견, 그리고 사건을 담고 있었다. 기억나는 이야기 하나를 언급하자면, 이
          책에서 양자물리학의 아버지라 불리는 닐스 보어의 말, "계산이나 열심히
          해"을 인용하며 양자 물리학의 암흑기를 설명한다. 이는 양자 물리학의
          철학을 정립하기보다 실용성에 의존하며 암흑기를 맞이하였다는 해석이다.
          책에서 이는 현대 화학의 발전과 함께 유전 공학 등 새로운 학문의
          시작점이 되었으며, 핵분열을 활용한 원자폭탄과 원자력 발전 또한 양자
          물리학으로 시작되었음을 명시한다. 학교 화학 선생님께서도 언제나
          반도체를 예로 들며 양자 물리학이 우리 일상을 변화 시켰음을
          강조하셨는데, 이러한 예에서 알 수 있듯이, 양자 물리학의 실용화는
          성공적이다. 나는 책을 읽으며, 필자는 물리학자로서 실용화를 통한
          영향력을 인정하면서도, 해당 시기를 부정적으로 바라보고 있음을 느꼈다.
          또한 학문의 실용화와 철학의 정립 중 우리가 또는 내가 추구해야 할
          목적이자 목표는 무엇인가 고민하였다. 둘 모두 혁신의 근거였음을 역사는
          말한다. 둘의 관계를 역설적으로 표현하자면, 유사하며 상반된다. 이에
          대한 다양한 사람의 의견이 궁금하다. 비단 명백한 사실은 기초 학문의
          중요성인데, 대표적 응용 학자인 아르키메데스의 말 "수학을 공부하지 않은
          대부분의 사람들에게는 믿기지 않는 일들이 있습니다."에서 알 수 있다.
        </p>
        <p>
          이전 양자 컴퓨터 관련 책을 읽으며 해결하지 못한 의문이 있다면 큐빗의
          상태를 변화시키는 방법과 큐빗을 측정하는 방법이다. 나의 의문과 책을
          통해 얻은 해답을 간단히 서술해 본다. 큐빗은 양자 컴퓨터에서 양자
          역학의 중첩 상태를 활용하여 컴퓨터의 비트 역할을 수행한다. 처음 읽은
          양자 컴퓨터 관련 책의 경우 필자를 '수학자'로 소개하였을 만큼 수학적
          계산만을 중점적으로 다루었는데, 나는 이를 읽으며 수학적 계산에 의해
          변화되는 큐빗의 상태를 물리적으로 변화시키는 방법을 상상치 못하였다.
          이 책에서 설명한 방법의 핵심은 자석이다. 자석으로 생성된 자기장은
          큐빗의 상태를 변화시킨다. 큐빗의 필수 조건은 양자적 성질을 띠며 양자화
          되어야 하는데, 이를 위해 이온 하나를 큐빗으로 사용하는 방법이
          존재한다. 학교 화학 시간에 배운 내용을 되새겨 보면, 전자의 스핀
          양자수는 양자화 되어 있으며 자기를 띈다. 이온 전체적으로 또한
          마찬가지인데, 이는 양자화되어 있음을 의미한다. 큐빗으로 이온을
          활용하였기에, 자기적 성질을 가지며 자석을 통해 상태를 변화시키는 것이
          가능하다. 새로운 기술에 대하여 다룬 책을 접할 때마다 공통으로 느끼는
          점이 있다면 현대 기술은 나의 상상 그 이상으로 발전하여 있다는 점이다.
          얼마나 설레이는 일인가, 내가 성인이 되었을 때의 변화는 또
          어떠하겠는가, 상상의 나래를 펼치운다. 화학 선생님께 앞선 나의 궁금증에
          대하여 질문한 적이 있는데, 웃으시며 "내가 이것을 알았다면 다른 연구소
          같은 곳에 있었겠지요"라고 말씀하셨다. 학생들이 무엇을 질문하든 만족할
          만한 답변을 해주시는 선생님이셨기에 의외의 답변이었다. 필자는 "딱히
          추천할 책이 없다"라고 적으며 책의 집필 배경을 서술했듯이, 양자
          컴퓨터와 관련하여 공부하기에 많은 자료가 존재하지는 않는다. 나의
          의문을 해결해 준 이 책을 접한 것에 대하여 감사함을 느끼며, 관련 자료가
          많아지고, 함께 공부할 사람들이 늘어나기를 희망한다.
        </p>
        <p>
          책에서 과학적 개념 및 기술 서술을 목적으로 활용된 문학적 표현, 특히
          예시를 위한 비유는 기하적으로 느껴졌다. 예컨대 다차원에 대하여
          보편화된 식의 경우 특정 차원, 주로 2차원으로 또는 변수의 값을 특정하여
          표현하는데, 이는 우리에게 직관적 이해 및 식으로 표현하지 못한 사실을
          부각하지만, 모든 것을 표현하기에 한계는 존재한다. 예컨대 이 책에는
          아래와 같은 비유가 존재한다. 필자는 "양자물리는 아무도 이해할 수
          없다"는 결론 설명을 위해 작은 벌레를 통해 비유한다. 점묘법을 통해
          그려진 것으로 유명한 『그랑자트 섬의 일요일 오후』에 작은 벌레가
          올라가 있다. 파랑 점과 빨간 점으로 이루어진 공간 위에 있다면, 벌레에게
          세상은 보라색으로 보일 것이다, 보라색을 나눌 경우 파랑 점과 빨간
          점으로 이루어졌으리라 생각지 못할 것이다. 이는 벌레가 우리보다 한 차원
          낮은 공간에 살고 있다 판단할 수 있는데, 우리가 벌레와 같은 처지라는
          것이다. 우리는 양자물리에 대하여 알고 있으나, 벌레가 보라색을 이해하기
          불가하듯 양자물리를 이해하는 것은 불가하다. 해당 비유는 명확하며
          황홀하게 느껴졌다. 우리 전체에 대하여와 이해 불가한 차원에 관계한
          양자물리를 우리가 이해 가능한 차원의 사건으로 투영하며 자연스럽게 이해
          가능한 글을 이루었다. 감사의 말에서 필자의 아내분께서 젊은 시절 시를
          적었다고 하며, 누구라도 읽을 수 있는 글을 적기 위해 많은 도움을
          받으셨다고 한다. 아름다운 글을 적기 위한 노력을 엿볼 수 있었으며 다시
          한번 필자분께 감사함을 느끼고, 나 또한 사유 및 지식을 공유할 때면
          아름다운 글을 활용하고 싶다.
        </p>
        <p>
          책의 필자께 이메일을 적은 적이 있는데, 답변의 내용은 나의 생각을 변화
          및 강화 시켰으며, 보다 진리를 고민하는 계기가 되었다. 나에게 새로운
          생각을 심어준 이 장문의 글에서 핵심 키워드를 고르자면, '기술자',
          '과학자', 그리고 '스스로'이다. 주제를 요약하자면 '스스로 사유하여
          알아내자'이다. 글은 책에서 양자물리학의 배경을 소개하며 언급된
          아인슈타인의 이야기를 시작으로 구성되었는데, 그는 단순히 공부한 내용을
          암기하지 않고 스스로 사유하였다고 한다. 이를 읽으며 책에서 인용된
          아인슈타인의 말, "나는 신이 주사위 놀이를 하고 있다고 생각하지
          않는다"와 "나는 고양이가 쳐다본다고 해서 달의 상태가 변한다는 사실을
          믿을 수 없다"라는 말이 다르게 느껴졌다. 필자께서 말한 '과학자'는
          스스로 사유하고 진정으로 공부한 내용을 이해하는 추구 점으로, 대표적
          예가 아인슈타인이다. 철학자이자 수학자인 르네 데카르트는 저서
          『방법서설』에서 건축가의 손으로 건축된 건축물과 다수가 건축한 성벽의
          아름다움을 비교하며 '스스로'의 중요성을 강조하였다. 또한 그의 오랜
          철학의 결론인 '나는 사유한다. 고로 존재한다'에서 드러나듯 그는 사유가
          학문에서 진리를 찾는 유일한 방법으로 여겼는데, 필자에게 이를 표현하는
          단어는 '과학자'였던 것이다. 이와 대조되는 단어는 '기술자'이며, '그저
          공식을 외운 사람'에 불가하다. 사실 나 또한 과학자가 아닌 기술자로서
          살아왔다. 예컨대, 어린 시절 수학 시험을 보더라도 공식을 외우지
          아니하고 시험을 보며 공식을 유도한 후 활용하던 나였지만, 글을 읽으며
          변한 나를 발견하였다. 부끄럽지만 고백하자면, 얼마 전 모의고사에서 또한
          시험 전 이전 기출된 문제를 풀어보며 공식을 외우고 유형을 외웠을
          뿐이다. 수많은 유혹과 두려움, 그리고 고통이 나를 방해하겠지만,
          필자께서 말한 '과학자'가 되기 위해 노력하리라 다짐한다. 그리고 이 글을
          적어주신 필자께 온 마음 담아, 진심으로 감사함을 느낀다.
        </p>
        <p>
          필자 이순칠 교수님께서는 이 책을 집필하시며 양자 컴퓨터에 관한 자신의
          지식을 공유하셨다. 흰 종이에 검게 적힌 글을 읽으며, 책이 가지는 지식
          공유에 대한 기능을 다시 한번 경험하며 느꼈다. 한 명의 글이 수많은
          사람의 사고 및 지식을 향상 시키는 경이로움에 찬양하고프다. 나 또한
          필자와 같이 전문성을 키워 지식과 사고, 그리고 철학을 글로써 적고 싶다.
          나의 글이 누군가에게 큰 도움이 되기를, 그리고 사회를 변화시킬 수
          있기를 희망한다. 이날을 희망하며 첫 단계인 전문성 향상을 위해 오늘과
          내일의 나는 열정을 다할 것을 다짐한다.
        </p>
      </div>
    </Paper>
  );
}
