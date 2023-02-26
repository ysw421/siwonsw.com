import ChangeDarkModeButton from '../../useful/ChangeDarkModeButton/ChangeDarkModeButton';
import Profile from '../../useful/Profile/Profile';
import Avatar from 'avataaars';
import styles from './MainPage.module.css';
import MindMap from '../../useful/MindMap/MindMap';
import { mainNodes } from '../../parameters/nodes';
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
              Made with 🔥by{' '}
              <span onClick={() => handleOpenNewTab('https://github.com/ysw421')} className={styles.linkToMyGit}>
                siwon
              </span>
            </span>
          </div>
        </div>
        <div className={styles.detailGrid}>
          <div className={styles.detailBox}>
            <div className={styles.headBox}>
              <div
                className={styles.mindMapBox}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                  // borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.2)' : 'rgb(40, 44, 53, 0.2)',
                  // boxShadow: `1px 0.5px 5px ${props.isDarkMode ? 'rgb(248, 248, 248, 0.5)' : 'rgb(40, 44, 53, 0.5)'}`,
                }}
              >
                <MindMap
                  nodes={mainNodes}
                  isDarkMode={props.isDarkMode}
                  toggleDarkMode={props.toggleDarkMode}
                  isDarkModeBtnHidden={true}
                  setPos={true}
                />
              </div>
              <div
                className={styles.headBox2}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                  // boxShadow: `1px 0.5px 5px ${props.isDarkMode ? 'rgb(248, 248, 248, 0.5)' : 'rgb(40, 44, 53, 0.5)'}`,
                }}
              ></div>
            </div>
            <div style={{ height: '40px' }}></div>
            <span className={styles.contactMe}>Contact Me</span>
            <div style={{ height: '20px' }}></div>
            <div className={styles.contactBox}>
              {/* 깃허브 */}
              <div
                className={styles.contactMiniBox}
                onClick={() => handleOpenNewTab('https://github.com/ysw421')}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              >
                <div className={styles.contactLogos}>
                  <svg
                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    viewBox="0 0 98 96"
                    width="32px"
                    height="32px"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      width="80%"
                      height="80%"
                      style={{ fill: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"
                      // fill="#818181"
                    />
                  </svg>
                </div>
                <p className={styles.contactTitle}>Github</p>
                <p className={styles.contactSubTitle}>SiWon Yun</p>
              </div>
              {/* 인스타 */}
              <div
                className={styles.contactMiniBox}
                onClick={() => handleOpenNewTab('https://www.instagram.com/ysw421_/')}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              >
                <div className={styles.contactLogos}>
                  <img
                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    width="70%"
                    height="70%"
                    // style={{ transform: 'scale(1.05)' }}
                    alt="instagram"
                    src={process.env.PUBLIC_URL + '/img/main-page/Instagram_logo_2016.svg.png'}
                  ></img>
                </div>
                <p className={styles.contactTitle}>Instagram</p>
                <p className={styles.contactSubTitle}>♪(^∇^*) 시원</p>
              </div>
              {/* 메일 */}
              <div
                className={styles.contactMiniBox}
                onClick={() => handleOpenNewTab('mailto:me@siwonsw.com')}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              >
                <div className={styles.contactLogos}>
                  <svg
                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    xmlns="http://www.w3.org/2000/svg"
                    height="80%"
                    viewBox="0 96 960 960"
                    width="80%"
                  >
                    <path
                      style={{ fill: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}
                      d="M480 976q-83 0-156-31.5T197 859q-54-54-85.5-127T80 576q0-83 31.5-156T197 293q54-54 127-85.5T480 176q83 0 156 31.5T763 293q54 54 85.5 127T880 576v53q0 56-39.5 94.5T744 762q-36 0-68-17.5T627 695q-26 34-65 50.5T480 762q-78 0-132.5-54T293 576q0-78 54.5-133T480 388q78 0 132.5 55T667 576v53q0 31 22.5 52t54.5 21q31 0 53.5-21t22.5-52v-53q0-142-99-241t-241-99q-142 0-241 99t-99 241q0 142 99 241t241 99h214v60H480Zm0-274q53 0 90-36.5t37-89.5q0-54-37-91t-90-37q-53 0-90 37t-37 91q0 53 37 89.5t90 36.5Z"
                    />
                  </svg>
                </div>
                <p className={styles.contactTitle}>Email</p>
                <p style={{ letterSpacing: '0.05rem' }} className={styles.contactSubTitle}>
                  me@siwonsw.com
                </p>
              </div>
              {/* 디스코드 */}
              <div
                className={styles.contactMiniBox}
                onClick={() => handleOpenNewTab('https://www.discord.com/users/398624527682371594')}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              >
                <div className={styles.contactLogos}>
                  <svg
                    style={{ position: 'relative', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
                    fill={props.isDarkMode ? '#f8f8f8' : '#201c1c'}
                    width="65%"
                    height="65%"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 127.14 96.36"
                  >
                    <g id="Discord_Logos" data-name="Discord Logos">
                      <g id="Discord_Logo_-_Large_-_White" data-name="Discord Logo - Large - White">
                        <path
                          class="cls-1"
                          d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
                        />
                      </g>
                    </g>
                  </svg>
                </div>
                <p className={styles.contactTitle}>Discord</p>
                <p style={{ letterSpacing: '0.05rem' }} className={styles.contactSubTitle}>
                  3.141592#7499
                </p>
              </div>
              {/* 내 블로그 */}
              <div
                className={styles.contactMiniBox}
                onClick={() => handleOpenNewTab('https://blog.siwonsw.com')}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              >
                <div className={styles.contactLogos}>
                  <img
                    style={{
                      position: 'relative',
                      top: '50%',
                      left: '50%',
                      transform: 'translate(-50%, -50%)',
                      borderRadius: '11px',
                    }}
                    src="/img/my-logo.png"
                    alt="blog"
                    width="80%"
                    height="80%"
                  />
                </div>
                <p className={styles.contactTitle}>My Blog</p>
                <p className={styles.contactSubTitle}>바로 이곳!</p>
              </div>
              {/* <div
                className={styles.contactMiniBox}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              ></div>
              <div
                className={styles.contactMiniBox}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              ></div>
              <div
                className={styles.contactMiniBox}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              ></div>
              <div
                className={styles.contactMiniBox}
                style={{
                  borderColor: props.isDarkMode ? 'rgb(248, 248, 248, 0.6)' : 'rgb(40, 44, 53, 0.6)',
                }}
              ></div> */}
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
