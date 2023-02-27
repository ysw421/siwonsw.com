import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
// import MachineLearning from './pages/MachineLearning/MachineLearning.jsx';
import MainPagePc from './pages/MainPage/MainPagePc.jsx';
import PaperPage from './pages/PaperPage/PaperPage.jsx';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
// import reset from 'styled-reset';
import { darkTheme, lightTheme } from './theme';
import { useState, useEffect } from 'react';
import MainPageMobile from './pages/MainPage/MainPageMobile';
import Error404 from './pages/404Error/404Error';
import { AnimatePresence } from 'framer-motion';
import MindMapPage from './pages/MindMapPage/MindMapPage';

const GlobalStyle = createGlobalStyle`
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }
`;
//${reset}

function App() {
  const saved = localStorage.getItem('isDarkMode') === 'false' ? false : true;
  if (localStorage.getItem('isDarkMode') === null) {
    localStorage.setItem('isDarkMode', true);
  }

  const [isDarkMode, setIsDarkMode] = useState(saved);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  function setScreenSize() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`); //"--vh"라는 속성으로 정의해준다.
  }

  window.addEventListener('resize', () => setScreenSize());

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <AnimatePresence>
            <Routes>
              {/* <Route
                path="/mind-map/machine-learning"
                element={<MachineLearning isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
              /> */}
              <Route
                path="/mind-map/:id"
                element={<MindMapPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
              />
              {innerWidth > 1100 && (
                <Route path="/" element={<MainPagePc isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              )}
              {innerWidth <= 1100 && (
                <Route path="/" element={<MainPageMobile isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              )}
              <Route
                path="/paper/:id"
                element={<PaperPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
              />
              <Route path="*" element={<Error404 isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
              <Route path="/*/*" element={<Error404 isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            </Routes>
          </AnimatePresence>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
