import { SlArrowLeft } from 'react-icons/sl';
import { useNavigate } from 'react-router-dom';
import styles from './GoMindMaps.module.css';

function GoBack(props) {
  const navigate = useNavigate();
  function goBack(url) {
    navigate('/' + url);
  }

  return (
    <div onClick={() => goBack(props.url)} className={styles.topRodeMap}>
      <SlArrowLeft />
      <span>{props.text}</span>
    </div>
  );
}

function GoMindMaps(props) {
  // 여기!
  return <div>{props.type === 'ml' && <GoBack url="machine-learning" text="Machine Learning Mind Map" />}</div>;
}

export default GoMindMaps;