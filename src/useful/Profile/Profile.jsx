import styles from './Profile.module.css';
import { useNavigate } from 'react-router-dom';

function Profile() {
  const navigate = useNavigate();
  function goTo() {
    navigate('/');
  }
  return (
    <div className={styles.profileBox}>
      <img onClick={goTo} alt="siwon" src={process.env.PUBLIC_URL + '/img/my-logo.png'} className={styles.myLogo} />
    </div>
  );
}

export default Profile;
