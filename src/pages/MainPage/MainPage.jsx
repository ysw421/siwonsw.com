import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton';
import Profile from '../../useful/Profile/Profile';
import Avatar from 'avataaars';
import styles from './MainPage.module.css';

function MainPage(props) {
  return (
    <>
      <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
      <Profile />
      <div className={styles.mainGrid}>
        <div className={styles.introduceGrid}>
          <div className={styles.introduceBox}>
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
            <p className={styles.blogName}>SiWon's Blog</p>
          </div>
        </div>
        <div className={styles.detailGrid}></div>
      </div>
    </>
  );
}

export default MainPage;
