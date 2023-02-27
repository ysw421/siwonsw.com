import styles from './Pages.module.css';
import { MainText, Height50 } from './useful';

export default function Page1(props) {
  return (
    <>
      <MainText text="한국디지털미디어고등학교(KoreaDigitalMediaHighSchool, KDMHS) 21기 웹 프로그래밍과 윤시원입니다. :)" />
      <Height50 num="120px" />
      <MainText text="21기: 2022년 3월 ~" />
      <Height50 num="20px" />
      <MainText text="인공지능 동아리 Fregic 12기" />
    </>
  );
}
