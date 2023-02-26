import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton';
import Profile from '../../useful/Profile/Profile';
import Avatar from 'avataaars';
import styles from './MainPage.module.css';
import MindMap from '../../useful/MindMap/MindMap';
import { nodes } from '../../parameters/nodes';
import { useState, useEffect } from 'react';

function MainPage(props) {
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const [isWink, setIsWink] = useState(false);
  const [constWink, setConstWink] = useState(6);

  useEffect(() => {
    setTimeout(() => {
      if (constWink > 0) {
        setConstWink((e) => e - 1);
      } else {
        setIsWink((e) => !e);
        if (isWink) {
          setConstWink(18);
        } else {
          setConstWink(0);
        }
      }
    }, 200);
  });

  return (
    <>
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
              eyeType={isWink ? 'Wink' : 'Default'}
              eyebrowType="UpDown"
              mouthType="Default"
              skinColor="Light"
              className={styles.avatar}
            />
            <p className={styles.blogName}>SiWon's Blog</p>
            <div
              className={styles.titleBar}
              style={{ backgroundColor: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}
            ></div>
            <span className={styles.introduceMySelf}>
              <p>안녕하세요,🖐️개발자 윤시원입니다 :)</p>
              <p>코드 한줄이 세상을 이롭게 만듭니다.</p>
              <div style={{ height: '4rem' }}></div>
              <p>@KDMHS_21wp</p>
              <p>@Fregic_12th</p>
              <p>더 아름다운 미래를 꿈꾸며~💜</p>
            </span>
            <span
              className={styles.bottomBar}
              style={{ filter: props.isDarkMode ? 'brightness(0.7)' : 'brightness(1.1)' }}
            >
              Made with 🔥
              <span onClick={() => handleOpenNewTab('https://github.com/ysw421')} className={styles.linkToMyGit}>
                siwon
              </span>
            </span>
          </div>
        </div>
        <div className={styles.detailGrid}>
          <div className={styles.detailBox}>
            <div
              className={styles.mindMapBox}
              style={{
                backgroundColor: props.isDarkMode ? '#282c35' : '#f8f8f8',
                borderColor: props.isDarkMode ? '#f8f8f8' : '#201c1c',
              }}
            >
              <MindMap
                nodes={nodes}
                isDarkMode={props.isDarkMode}
                toggleDarkMode={props.toggleDarkMode}
                isDarkModeBtnHidden={true}
                setPos={true}
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className={styles.topBar}
        style={{ backgroundColor: props.isDarkMode ? 'rgb(40, 44, 53, 0.5)' : 'rgb(248, 248, 248, 0.5)' }}
      >
        <span className={styles.topText}>SiWon's Blog</span>
      </div>
      <ChangeDarkModeButton isDarkMode={props.isDarkMode} toggleDarkMode={props.toggleDarkMode} />
      <Profile />
    </>
  );
}

export default MainPage;
