import { useEffect, useRef } from 'react';
import styles from './Pages/Pages.module.css';
import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';
import Page6 from './Pages/Page6';
import Page7 from './Pages/Page7';
import Page8 from './Pages/Page8';
import Page9 from './Pages/Page9';
import P가우스_소거법 from './Pages/P가우스-소거법';
import Page11 from './Pages/Page11';
import Page12 from './Pages/Page12';
import Page13 from './Pages/Page13';
import Page14 from './Pages/Page14';
import P행렬식 from './Pages/P행렬식';
import Pstack from './Pages/Pstack';
import P프레직_수업_진행 from './Pages/P프레직-수업-진행';
import P현대_모형 from './Pages/P현대-모형';

function Papers(props) {
  const commentsEl = useRef(null);

  useEffect(() => {
    const scriptEl = document.createElement('script');
    scriptEl.async = true;
    scriptEl.src = 'https://giscus.app/client.js';
    scriptEl.setAttribute('data-repo', 'ysw421/My-blog');
    scriptEl.setAttribute('data-repo-id', 'R_kgDOJCUXQQ');
    scriptEl.setAttribute('General', 'General');
    scriptEl.setAttribute('data-category-id', 'DIC_kwDOJCUXQc4CW0wT');
    scriptEl.setAttribute('data-mapping', 'pathname');
    scriptEl.setAttribute('data-strict', '0');
    scriptEl.setAttribute('data-reactions-enabled', '1');
    scriptEl.setAttribute('data-emit-metadata', '0');
    scriptEl.setAttribute('data-input-position', 'bottom');
    scriptEl.setAttribute('data-theme', props.isDarkMode ? 'dark' : 'light');
    scriptEl.setAttribute('data-lang', 'ko');
    scriptEl.setAttribute('data-loading', 'lazy');
    scriptEl.setAttribute('crossorigin-loading', 'anonymous');
    commentsEl.current?.appendChild(scriptEl);
  }, [props.isDarkMode]);

  return (
    <div style={{ fontFamily: 'font2' }} className={styles.mainText}>
      {props.numberId === 1 && <Page1 isDarkMode={props.isDarkMode} />}
      {props.numberId === 2 && <Page2 isDarkMode={props.isDarkMode} />}
      {props.numberId === 3 && <Page3 isDarkMode={props.isDarkMode} />}
      {props.numberId === 4 && <Page4 isDarkMode={props.isDarkMode} />}
      {props.numberId === 5 && <Page5 isDarkMode={props.isDarkMode} />}
      {props.numberId === 6 && <Page6 isDarkMode={props.isDarkMode} />}
      {props.numberId === 7 && <Page7 isDarkMode={props.isDarkMode} />}
      {props.numberId === 8 && <Page8 isDarkMode={props.isDarkMode} />}
      {props.numberId === 9 && <Page9 isDarkMode={props.isDarkMode} />}
      {props.numberId === '가우스-소거법' && <P가우스_소거법 isDarkMode={props.isDarkMode} />}
      {props.numberId === 11 && <Page11 isDarkMode={props.isDarkMode} />}
      {props.numberId === 12 && <Page12 isDarkMode={props.isDarkMode} />}
      {props.numberId === 13 && <Page13 isDarkMode={props.isDarkMode} />}
      {props.numberId === 14 && <Page14 isDarkMode={props.isDarkMode} />}
      {props.numberId === 15 && <P행렬식 isDarkMode={props.isDarkMode} />}
      {props.numberId === 16 && <Pstack isDarkMode={props.isDarkMode} />}
      {props.numberId === '프레직-수업-진행' && <P프레직_수업_진행 isDarkMode={props.isDarkMode} />}
      {props.numberId === '현대-모형' && <P현대_모형 isDarkMode={props.isDarkMode} />}
      <div style={{ height: '100px' }}></div>
      <center>
        <div ref={commentsEl} style={{ width: '100%', maxWidth: '800px' }} />
      </center>
      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default Papers;
