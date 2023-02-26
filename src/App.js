import './App.css';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import MachineLearning from './pages/MachineLearning/MachineLearning.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import PaperPage from './pages/PaperPage/PaperPage.jsx';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
// import reset from 'styled-reset';
import { darkTheme, lightTheme } from './theme';
import { useState, useEffect } from 'react';

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
  //   console.log('dark mode');
  // } else {
  // }

  // const history = useNavigate();
  // history('/home');
  // const inputValue = history.location.inputValue;

  ///useEffect() 활용하여 `name`이라는 키로 inputValue를 저장하였다.
  // useEffect(() => {
  // localStorage.setItem('name', JSON.stringify(inputValue));

  /// 새로고침 시, localStorage에 id의 값이 있다면 그 값을 `setName`에 저장해준다.
  // const saved = localStorage.getItem('isDarkMode');
  // if (saved !== null) {
  // setIsDarkMode(saved);
  // } else localStorage.setItem('isDarkMode', false);
  // }, [inputValue]);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyle />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route
              path="/machine-learning"
              element={<MachineLearning isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />}
            />
            <Route path="/" element={<MainPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="/paper/:id" element={<PaperPage isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} />
            <Route path="*" element={<div>404</div>} />
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
