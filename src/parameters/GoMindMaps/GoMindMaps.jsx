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
  return (
    <>
      <div>{props.type === 'ml' && <GoBack url="mind-map/machine-learning" text="Machine Learning Mind Map" />}</div>
      <div>{props.type === 'math' && <GoBack url="mind-map/math" text="Math Mind Map" />}</div>
      <div>{props.type === '일상' && <GoBack url="mind-map/나의-일상" text="일상 마인드 맵" />}</div>
      <div>{props.type === '프로그래밍' && <GoBack url="mind-map/프로그래밍" text="프로그래밍 마인드 맵" />}</div>
      <div>{props.type === '양자 컴퓨터' && <GoBack url="mind-map/양자-컴퓨터" text="양자 컴퓨터 마인드 맵" />}</div>
    </>
  );
}

export default GoMindMaps;
