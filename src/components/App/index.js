import React from 'react';
import { ThemeProvider } from 'styled-components';
import 'sanitize.css';
import theme from '../../utils/theme';
import GlobalStyle from '../GlobalStyle';
import SocialProof from '../SocialProof';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <SocialProof />
      </div>
    </ThemeProvider>
  );
}

export default App;
