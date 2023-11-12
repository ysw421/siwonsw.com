import Paper from '@/components/Paper';
import { MovieBox } from '@/components/utilities';

export default function Movie() {
  return (
    <Paper title='🎭 뮤지컬'>
      <p>제가 보았던 뮤지컬의 목록입니다.</p>
      <p className='mb-8'>아래는 제가 좋아하는 영화들입니다.</p>
      <MovieBox
        imgSrc='/images/paper/musical/ThePhantomOfTheOpera.jpg'
        cast=''
        title='오페라의 유령'
        subTitle='The Phantom Of The Opera, 2023'
        director=''
        isHideDirectorCast={true}
      />
      <MovieBox
        imgSrc='/images/paper/musical/TheThreeMusketeers.jpg'
        cast=''
        title='삼총사'
        subTitle='The Three Musketeers, 2022'
        director=''
        isHideDirectorCast={true}
      />
    </Paper>
  );
}
