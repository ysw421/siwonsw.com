import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';

function Papers(props) {
  return (
    <div style={{ fontFamily: 'font2' }}>
      {props.numberId === 1 && <Page1 isDarkMode={props.isDarkMode} />}
      {props.numberId === 2 && <Page2 isDarkMode={props.isDarkMode} />}
      {props.numberId === 3 && <Page3 isDarkMode={props.isDarkMode} />}
      {props.numberId === 4 && <Page4 isDarkMode={props.isDarkMode} />}
      {props.numberId === 5 && <Page5 isDarkMode={props.isDarkMode} />}
      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default Papers;
