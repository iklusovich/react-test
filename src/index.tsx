import { render } from "react-dom";
import App from "./App";
import { BrowserRouter } from 'react-router-dom';
import { ThemeContext } from './components/theme/ThemeContext';
import { ThemeProvider } from './components/theme/ThemeProvider';

render(
	<BrowserRouter><ThemeProvider><App /></ThemeProvider></BrowserRouter>,
	document.getElementById('root')
)
