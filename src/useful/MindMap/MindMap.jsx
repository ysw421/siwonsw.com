import { AiOutlineHome } from 'react-icons/ai';
import styles from './MindMap.module.css';
import { useNavigate } from 'react-router-dom';
import { useState, Fragment, createRef, useEffect } from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { MdOutlineLightMode, MdOutlineDarkMode } from 'react-icons/md';

function MindMap(props) {
  // const nodes = [new Node('Machine Learning', 0, 0, [1, 2], 60), new Node(2, -70, -50), new Node(3, 60, 100)];
  const handleOpenNewTab = (url) => {
    window.open(url, '_blank', 'noopener, noreferrer');
  };

  const mainRef = createRef(null);
  const [innerSize, setInnerSize] = useState(null);
  const [canvasSize, setCanvasSize] = useState({ width: 3000, height: 3000 });

  useEffect(() => {
    if (mainRef.current) {
      setInnerSize({ width: mainRef.current.offsetWidth, height: mainRef.current.offsetHeight });
    }
  }, []);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [saveMousePos, setSaveMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };
  const movePage = useNavigate();
  function goTo(url) {
    if (mousePos.x === saveMousePos.x && mousePos.y === saveMousePos.y) movePage(url);
  }
  return (
    <>
      <div style={{ width: '100%', height: '100%' }} ref={mainRef}>
        {innerSize && (
          <TransformWrapper
            initialScale={1}
            initialPositionX={innerSize.width / 2 - canvasSize.width / 2}
            initialPositionY={innerSize.height / 2 - canvasSize.height / 2}
            limitToBounds={false}
            minScale={0.2}
          >
            {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
              <Fragment>
                <TransformComponent style={{ height: '100%', width: '100%' }}>
                  <div
                    className={styles.mindMap}
                    style={{ width: `${canvasSize.width}px`, height: `${canvasSize.height}px` }}
                  >
                    <div>
                      <svg xmlns="http://www.w3.org/2000/svg" className={styles.svg}>
                        {props.nodes &&
                          Object.keys(props.nodes).map((key) =>
                            props.nodes[key].edges.map((edge, edgeIndex) => {
                              return (
                                <g key={edgeIndex}>
                                  <path
                                    d={`M ${props.nodes[key].x + canvasSize.width / 2} ${
                                      props.nodes[key].y + canvasSize.height / 2
                                    } L ${props.nodes[edge].x + canvasSize.width / 2} ${
                                      props.nodes[edge].y + canvasSize.height / 2
                                    }`}
                                    stroke="#818181"
                                    strokeWidth="0.5"
                                    fill="none"
                                    style={{ transition: 'all 0.5s ease-in-out' }}
                                  ></path>
                                </g>
                              );
                            })
                          )}
                      </svg>
                      <div>
                        {props.nodes &&
                          Object.keys(props.nodes).map((key) => (
                            <div
                              // key={index}
                              className={styles.node}
                              style={{
                                transform: `translate(${
                                  props.nodes[key].x - props.nodes[key].circleSize / 2 + canvasSize.width / 2
                                }px, ${
                                  props.nodes[key].y -
                                  (props.nodes[key].circleSize > 27 ? props.nodes[key].circleSize / 2 : 13.5) +
                                  canvasSize.height / 2
                                }px)`,
                              }}
                            >
                              <div
                                onMouseDown={() => setSaveMousePos({ x: mousePos.x, y: mousePos.y })}
                                onMouseMove={handleMouseMove}
                                className={styles.nodeCircle}
                                onClick={() => goTo(props.nodes[key].link)}
                                style={{
                                  width: `${props.nodes[key].circleSize}px`,
                                  height: `${props.nodes[key].circleSize}px`,
                                  backgroundColor: props.isDarkMode ? '#f8f8f8' : '#201c1c',
                                }}
                              ></div>
                              <span className={styles.nodeValue}>{props.nodes[key].value}</span>
                            </div>
                          ))}
                      </div>
                    </div>
                  </div>
                </TransformComponent>
                {props.isDarkModeBtnHidden !== true && (
                  <div className={styles.changeDarkModeButtonBox}>
                    <span style={{ color: props.isDarkMode ? '' : '#f8f8f8' }} className={styles.difference}>
                      {props.isDarkMode ? 'Dark Mode' : 'Light Mode'}
                    </span>
                    <div
                      // style={properties}
                      className={`${styles.changeDarkModeButton} ${styles.miniButton}`}
                      onClick={() => {
                        props.toggleDarkMode();
                        localStorage.setItem('isDarkMode', props.isDarkMode ? false : true);
                      }}
                      style={{ backgroundColor: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}
                    >
                      {props.isDarkMode ? (
                        <MdOutlineDarkMode color="#201c1c" style={{ width: '100%' }} />
                      ) : (
                        <MdOutlineLightMode color="'#201c1c" style={{ width: '100%', color: '#f8f8f8' }} />
                      )}
                    </div>
                  </div>
                )}
                <div
                  className={styles.resetPositionButtonBox}
                  style={
                    props.setPos === true
                      ? {
                          borderColor: props.isDarkMode ? '#f8f8f8' : '#201c1c',
                          float: 'right',
                          position: 'sticky',
                          bottom: '12px',
                          right: '14px',
                        }
                      : { borderColor: props.isDarkMode ? '#f8f8f8' : '#201c1c' }
                  }
                >
                  {/* <button onClick={() => zoomIn()}>+</button>
              <button onClick={() => zoomOut()}>-</button> */}
                  {props.setPos !== true && (
                    <span
                      style={
                        props.setPos === true
                          ? { color: props.isDarkMode ? '' : '#201c1c' }
                          : { color: props.isDarkMode ? '' : '#f8f8f8' }
                      }
                      className={styles.difference}
                    >
                      Reset
                    </span>
                  )}
                  <div
                    className={`${props.setPos !== true ? styles.resetPositionButton : styles.resetPositionButton2} ${
                      styles.miniButton
                    }`}
                    onClick={() => resetTransform()}
                    style={{ backgroundColor: props.isDarkMode ? '#f8f8f8' : '#201c1c' }}
                  >
                    <AiOutlineHome
                      style={{
                        position: 'relative',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -58%)',
                        width: '100%',
                        color: props.isDarkMode ? '#201c1c' : '#f8f8f8',
                      }}
                    />
                  </div>
                </div>
              </Fragment>
            )}
          </TransformWrapper>
        )}
      </div>
      {props.setPos === undefined && (
        <span className={styles.bottomBar} style={{ filter: props.isDarkMode ? 'brightness(0.7)' : 'brightness(1.1)' }}>
          Made with 🔥 by{' '}
          <span onClick={() => handleOpenNewTab('https://github.com/ysw421')} className={styles.linkToMyGit}>
            siwon
          </span>
        </span>
      )}
    </>
  );
}

export default MindMap;
