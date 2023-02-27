import Page1 from './Pages/Page1';

function Papers(props) {
  return (
    <div style={{ fontFamily: 'font2' }}>
      {props.numberId === 1 && <Page1 isDarkMode={props.isDarkMode} />}
      <div style={{ height: '50px' }}></div>
    </div>
  );
}

export default Papers;
