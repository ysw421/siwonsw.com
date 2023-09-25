import ColorLink from '@/components/ColorLink';
import Paper from '@/components/Paper';
import { MovieBox } from '@/components/utilities';

export default function Movie() {
  return (
    <Paper title='🎬 영화를 좋아하는 시원입니다.'>
      <p>
        영화 보기를 좋아합니다, 영화를 보며 다양한 생각을 하는 것을, 나와 다른
        관점에서 생각해 보기를 즐깁니다.
      </p>
      <p className='mb-8'>아래는 제가 좋아하는 영화들입니다.</p>
      <MovieBox
        imgSrc='/images/paper/movie/Titanic.jpeg'
        cast={`레오나르도 디카프리오(잭 도슨)\n케이트 윈슬렛(로즈 드위트 버케이터)`}
        title='타이타닉'
        subTitle='Titanic, 1997'
        director='제임스 카메론'
      />
      <div className='flex flex-col items-center w-full mb-8'>
        <p className='text-2xl'>"I'm the King of the world!"</p>
        <p>
          -{' '}
          <ColorLink href='/paper/movie-titanic'>
            타이타닉 후기 보러가기
          </ColorLink>
        </p>
      </div>
      <MovieBox
        imgSrc='/images/paper/movie/LifeIsBeautiful.jpeg'
        cast={`로베르토 베니니(귀도)\n니콜레타 브라스키(도라)\n조르지오 칸타리니(조슈아)`}
        title='인생은 아름다워'
        subTitle='Life Is Beautiful, 1999'
        director='로베르토 베니니'
      />
      <MovieBox
        imgSrc='/images/paper/movie/TheShawshankRedemption.jpeg'
        cast={`팀 로빈스(앤디)\n모건 프리먼(레드)`}
        title='쇼생크 탈출'
        subTitle='The Shawshank Redemption, 1994'
        director='프랭크 다라본트'
      />
      <MovieBox
        imgSrc='/images/paper/movie/HarryPotter.jpeg'
        cast={`다니엘 래드클리프(해리)\n루퍼트 그린트(론)\n엠마 왓슨(헤르미온느)`}
        title='해리포터 시리즈'
        subTitle='Harry Potter'
        director='크리스 콜럼버스(2, 비밀의 방)'
      />
      <MovieBox
        imgSrc='/images/paper/movie/LifeOfPi.jpeg'
        cast='수라즈 샤르마(파이)'
        title='라이프 오브 파이'
        subTitle='Life Of Pi, 2012'
        director='이안'
      />
      <MovieBox
        imgSrc='/images/paper/movie/ForrestGump.jpeg'
        cast={`톰 행크스(포레스트 검프)\n로빈 라이트(제니 커란)`}
        title='포레스트 검프'
        subTitle='Forrest Gump, 1994'
        director='로버트 저메키스'
      />
      <MovieBox
        imgSrc='/images/paper/movie/Ghost.jpeg'
        cast={`패트릭 스웨이지(샘 휘트)\n데미 무어(몰리 젠슨)`}
        title='사랑과 영혼'
        subTitle='Ghost, 1990'
        director='제리 주커'
      />
      <MovieBox
        imgSrc='/images/paper/movie/TheSixthSense.jpeg'
        cast={`브루스 윌리스(말콤 크로우)\n할리 조엘 오스먼트(콜 시어)`}
        title='식스 센스'
        subTitle='The Sixth Sense, 1999'
        director='M. 나이트 샤말란'
      />
      <MovieBox
        imgSrc='/images/paper/movie/StarWars.jpeg'
        cast={`마크 해밀(루크 스카이워커)\n해리슨 포드(한 솔로)\n캐리 피셔(레아 오르가나)`}
        title='스타 워즈'
        subTitle='Star Wars'
        director='조지 루카스'
      />
      <MovieBox
        imgSrc='/images/paper/movie/GoneWithTheWind.jpeg'
        cast={`비비안 리(스칼렛)\n클라크 게이블(레트)\n레슬리 하워드(애슐리)`}
        title='바람과 함께 사라지다'
        subTitle='Gone with the Wind, 1939'
        director='빅터 플레밍'
      />
      <MovieBox
        imgSrc='/images/paper/movie/RomanHoliday.jpeg'
        cast={`그레고리 펙(조)\n오드리 헵번(앤 공주)`}
        title='로마의 휴일'
        subTitle='Roman Holiday, 1953'
        director='월리엄 와일러'
      />
      <MovieBox
        imgSrc='/images/paper/movie/RomeoAndJuliet.jpeg'
        cast={`레오나드 위팅(로미오)\n올리비아 핫세(줄리엣)`}
        title='로미오와 줄리엣'
        subTitle='Romeo And Juliet, 1968'
        director='프란코 제피렐리'
      />
      <MovieBox
        imgSrc={`/images/paper/movie/Schindler'sList.jpeg`}
        cast='리암 니슨(쉰들러)'
        title='쉰들러 리스트'
        subTitle={`Schindler's List, 1993`}
        director='스티븐 스필버그'
      />
      <MovieBox
        imgSrc='/images/paper/movie/OperationDaybreak.jpeg'
        cast={`티모시 바톰즈(얀)\n마틴 쇼(카렐)\n조스 아클랜드(야나크)`}
        title='새벽의 7인'
        subTitle='Operation Daybreak, 1975'
        director='루이스 길버트'
      />
      <MovieBox
        imgSrc='/images/paper/movie/TheSoundOfMusic.jpeg'
        cast={`줄리 앤드류스(마리아)\n크리스토퍼 플러머(대령)`}
        title='사운드 오브 뮤직'
        subTitle='The Sound of Music, 1965'
        director='로버트 와이즈'
      />
      <MovieBox
        imgSrc='/images/paper/movie/ThePhantomOfTheOpera.jpeg'
        cast={`제라드 버틀러(팬텀)\n에미 로섬(크리스틴)\n패트릭 윌슨(라울)`}
        title='오페라의 유령'
        subTitle='The Phantom of the Opera, 2004'
        director='조엘 슈마허'
      />
    </Paper>
  );
}
