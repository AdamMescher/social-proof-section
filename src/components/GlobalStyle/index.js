import { createGlobalStyle } from 'styled-components';
import theme from '../../utils/theme';
import 'fontsource-spartan/400.css';
import 'fontsource-spartan/500.css';
import 'fontsource-spartan/700.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Spartan:wght@400;500;700&display=swap');
    html {
        height: 100vh;
        width: 100%;
        grid-template-areas: "content";
    }
    body {
        font-family: ${theme.typography.fontFamily};
        font-size: ${theme.typography.sizes.base};
    }
`;

export default GlobalStyle;
