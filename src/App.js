import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MachineLearning from './pages/MachineLearning/MachineLearning.jsx';
import MainPage from './pages/MainPage/MainPage.jsx';
import PaperPage from './pages/PaperPage/PaperPage.jsx';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components';
// import reset from 'styled-reset';
import { darkTheme, lightTheme } from './theme';
import { useState } from 'react';

const GlobalStyle = createGlobalStyle`
  body {        
    background-color: ${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }
`;
//${reset}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

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
