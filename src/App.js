
import './App.css';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contact from './Components/Contact';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Footer from './Components/Footer';
import Header from './Components/Header';
import {ThemeProvider} from 'styled-components'
import { GlobalStyle } from './GlobalStyle';
import Error from "./Components/Error"
import Scroll from './Components/Scroll';
function App() {

  const theme = {
    colors: {
      heading: "rgb(24 24 29)",
      text: "rgb(24 24 29)",
      white: "#fff",
      black: " #212529",
      helper: "#8490ff",
      bg: "rgb(249 249 255)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "rgba(98, 84, 243, 0.5)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    //Theme as prop which is object
    <ThemeProvider theme={theme}>

{/* Global style */}
      <GlobalStyle/>

    {/* router */}
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Scroll/>
      <Footer/>
    </BrowserRouter>
    </ThemeProvider>
    );
}

export default App;
