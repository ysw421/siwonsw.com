import Page1 from './Pages/Page1';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';

function Papers(props) {
  return (
    <div style={{ fontFamily: 'font2' }}>
      {props.numberId === 1 && <Page1 isDarkMode={props.isDarkMode} />}
      {props.numberId === 2 && <Page2 isDarkMode={props.isDarkMode} />}
      {props.numberId === 3 && <Page3 isDarkMode={props.isDarkMode} />}
      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default Papers;
