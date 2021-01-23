import './App.css';
import markjoy from './markjoy2.jpeg';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";
import { Icon } from '@iconify/react';
import spotifyIcon from '@iconify-icons/mdi/spotify';
import appleMusic from '@iconify-icons/cib/apple-music';
import LinkE from '@material-ui/core/Link';
import ReactTypingEffect from 'react-typing-effect';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return(
    <Router>
      <Switch>
        <Route path="/home">
        <Home />
        </Route>
        <Route path="/">
        <FAQ />
        </Route>
      </Switch>

    </Router>

    );
}

function FAQ() {
  return (
    <StylesProvider injectFirst>
    <div className="milli">
      <Container maxWidth="xs">
        <Box my={10}>

          <center>
            <img src={markjoy} width="100%"/>
            
          <Box lineHeight={2} fontWeight="900" fontSize="h6.fontSize" className="white" m={1}>
          ONE IN A MILLION
          </Box>
          <Box lineHeight={2} fontWeight="700" fontSize="body1.fontSize" className="white" >
          The 🔥&nbsp; returns this weekend.
          </Box>
          </center>
          
          {/*<Button variant="contained" color="primary" disableElevation>
          Disable elevation
          </Button>*/}
           
          {/*<center>
          <Box lineHeight={1} fontWeight="600" fontSize="Button.fontSize" className="white" m={1}>
          TUDO BOM? ÇA VA? WSUP?
          </Box> 
          </center>*/}

          <Box lineHeight={1.3} fontWeight="600" fontSize="caption.fontSize" className="white" m={1}>
          1. TUDO BOM? ÇA VA? WSUP?<br /><br />
          Well, in true AHGASE fashion, you broke the link. There were over 20,000 hits per second.
          Very few people were actually able to get through. And, then, their website died. 😇 <br />
          <br />
          <center>Mark and Sanjoy are 😂&nbsp;&nbsp;😂&nbsp;&nbsp;😂</center>
          <br />
          2. OOPS! NOW WHAT?!<br /><br />
          I'm coding a scalable replacement just for you! This one will not die. 🙌 &nbsp; 
          But, why not put it to the test? Let's see what we can do together!
          <br /><br />
          3. ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ<br /><br />
          Apple Music + Spotify next?! I will do my everything I can to make sure you can pre-save it by the end of the weekend.
          <br /><br />
          4. WAIT, WHO ARE YOU AGAIN?<br /><br />
          Oh, my name is Kunal. I am one of the songwriters and I made the One in a Million video. I work in cyber-security.
          <br /><br />
          5. YES. WE KNOW KUNALA. NOW, SPOILER?<br /><br />
          👹&nbsp;&nbsp;&nbsp;There is one on this page.
          </Box>

          <center>
          <br />
          <Box lineHeight={1.2} fontWeight="600" fontSize="h3.fontSize" className="white" m={1}><ReactTypingEffect
        text={["10278"]} eraseDelay={20000} cursor= "|" typingDelay = {250} /></Box>
          <Box lineHeight={.1} fontWeight="400" fontSize="Button.fontSize" className="white" m={1}>
          JOINED THE MARKJOY FANDOM
          </Box>
          <br />
          <Box lineHeight={2} fontWeight="300" fontSize="overline.fontSize" className="white" m={1}>
          MADE WITH <span className="red">♥</span> BY @<LinkE href="https://instagram.com/kunala" color="inherit"><u>KUNALA</u></LinkE>
          </Box>
          </center>
          
        </Box>
      </Container>    
    </div>
    </StylesProvider>
  );
}


function Home() {
  return (
    <StylesProvider injectFirst>
    <div className="milli">
      <Container maxWidth="xs">
        <Box my={10}>

          <center>
            <img src={markjoy} width="100%"/>
            
          <Box lineHeight={2} fontWeight="900" fontSize="h6.fontSize" className="white" m={1}>
          ONE IN A MILLION
          </Box>
          <Box lineHeight={1} fontWeight="700" fontSize="body1.fontSize" className="white" m={1}>
          Releasing 12 February
          </Box>
          <br />
          {/*<Button variant="contained" color="primary" disableElevation>
          Disable elevation
          </Button>*/}
            <Box m={1}>
              <Button variant="outlined" className="spot" fullWidth><Icon icon={spotifyIcon} height="25" />&nbsp;&nbsp;Presave</Button>
            </Box>

            <Box m={1}>
              <Button variant="outlined" className="apple" fullWidth><Icon icon={appleMusic} height="20" />&nbsp;&nbsp;&nbsp;Preadd</Button>
            
            </Box>
            
          <br />
          <Box lineHeight={1.2} fontWeight="600" fontSize="h3.fontSize" className="white" m={1}><ReactTypingEffect
        text={["783783"]} eraseDelay={20000} cursor= "|" typingDelay = {250}
      /></Box>
          <Box lineHeight={.1} fontWeight="400" fontSize="Button.fontSize" className="white" m={1}>
          HAVE SAVED ONE IN A MILLION
          </Box>
          <br />
          <Box lineHeight={2} fontWeight="300" fontSize="overline.fontSize" className="white" m={1}>
          MADE WITH <span className="red">♥</span> BY @<LinkE href="https://instagram.com/kunala" color="inherit"><u>KUNALA</u></LinkE>
          </Box>

          </center>
        </Box>
      </Container>    
    </div>
    </StylesProvider>
  );
}

export default App;
