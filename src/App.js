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
import Link from '@material-ui/core/Link';
import ReactTypingEffect from 'react-typing-effect';


function App() {
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
        text={["384"]} eraseDelay={20000} cursor= "|" typingDelay = {250}
      /></Box>
          <Box lineHeight={.1} fontWeight="400" fontSize="Button.fontSize" className="white" m={1}>
          JOINED THE MARKJOY ARMY
          </Box>
          <br />
          <Box lineHeight={2} fontWeight="300" fontSize="overline.fontSize" className="white" m={1}>
          MADE WITH <span className="red">♥</span> BY @<Link href="https://instagram.com/kunala" color="inherit"><u>KUNALA</u></Link>
          </Box>

          </center>
        </Box>
      </Container>    
    </div>
    </StylesProvider>
  );
}

export default App;
