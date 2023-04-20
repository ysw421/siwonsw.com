import styles from './Pages.module.css';
import { MainText } from './useful';

export default function Page1(props) {
  return (
    <>
      <MainText text="↑ 위 '< " isSpan={true} />
      <span style={{ fontFamily: 'font1', fontSize: '20px' }}>프로그래밍 마인드맵</span>
      <MainText text="'을 클릭하여 " isSpan={true} />
    </>
  );
}
