import markjoy from './markjoy2.jpeg';
import './App.css';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import 'fontsource-roboto';
import Button from '@material-ui/core/Button';
import { StylesProvider } from "@material-ui/core/styles";
import { Icon } from '@iconify/react';
import spotifyIcon from '@iconify-icons/mdi/spotify';
import appleMusic from '@iconify-icons/cib/apple-music';
import Link from '@material-ui/core/Link';

function App() {
  return (
    <StylesProvider injectFirst>

    <div className="milli">
      <Container maxWidth="xs">
        <Box my={19}>

          <center>
            <img src={markjoy} width="100%"/>
            


          {/*<h4 className="white">
            ONE IN A MILLION
          </h4>*/}
          <Box lineHeight={2} fontWeight="900" fontSize="h6.fontSize" className="white" m={1}>
          ONE IN A MILLION
          </Box>
          <Box lineHeight={1} fontWeight="700" fontSize="body1.fontSize" className="white" m={1}>
          12 February
          </Box>
          <br />
          {/*<Button variant="contained" color="primary" disableElevation>
          Disable elevation
          </Button>*/}
            <Box m={1}>
              <Button variant="outlined" className="spot" fullWidth><Icon icon={spotifyIcon} height="25" />Presave</Button>
            </Box>

            <Box m={1}>
              <Button variant="outlined" className="apple" fullWidth><Icon icon={appleMusic} height="25" />Preadd</Button>
            }
            </Box>
            
          <br /><br /><br /><br /><br /><br />

          <Box lineHeight={2} fontWeight="400" fontSize="overline.fontSize" className="white" m={1}>
          MADE WITH ♥ BY @<Link href="https://instagram.com/kunala" color="inherit"><u>KUNALA</u></Link>
          </Box>

          </center>
        </Box>
      </Container>    
    </div>
    </StylesProvider>
  );
}

export default App;
