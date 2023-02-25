import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton';
import Profile from '../../useful/Profile/Profile';
import Avatar from 'avataaars';
import styles from './MainPage.module.css';

function MainPage(props) {
  return (
    <div className={styles.mainGrid}>
      <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
      <Profile />
      <div className={styles.introduceGrid}>
        <div style={{ alignItems: 'center' }}>
          <Avatar
            avatarStyle="Circle"
            topType="ShortHairShortWaved"
            accessoriesType="Round"
            hairColor="BrownDark"
            facialHairType="Blank"
            clotheType="BlazerSweater"
            eyeType="Wink"
            eyebrowType="UpDown"
            mouthType="Default"
            skinColor="Light"
            className={styles.avatar}
          />
        </div>
      </div>
      <div className={styles.detailGrid}></div>
    </div>
  );
}

export default MainPage;
