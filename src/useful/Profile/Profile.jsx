import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';

function Profile(props) {
  const navigate = useNavigate();
  function goTo() {
    navigate('/');
  }
  return (
    <div className={styles.profileBox}>
      <img
        // style={{ borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)' }}
        onClick={goTo}
        alt="siwon"
        src={process.env.PUBLIC_URL + '/img/my-logo.png'}
        className={styles.myLogo}
      />
    </div>
  );
}

export default Profile;
