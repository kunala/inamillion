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
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import { useHistory } from "react-router"
import axios from 'axios';




function App() {
  return(
    <Router>

    <StylesProvider injectFirst>
    <div className="milli">
      <Container maxWidth="xs">
        <Box my={10}>

          <center>
            <img src={markjoy} width="100%"/>
            
          <Box lineHeight={2} fontWeight="900" fontSize="h6.fontSize" className="white" m={1}>
          ONE IN A MILLION
          </Box>

          </center>

          <Switch>

            <Route path="/thankyou">
            <Thankyou />
            </Route>

            <Route path="/about">
            <About />
            </Route>

            <Route path="/presave">
            <Presave />
            </Route>

            <Route path="/" >
            <About />
            </Route>
          </Switch>

          <center>
          <br />
          <Box lineHeight={1.2} fontWeight="600" fontSize="h3.fontSize" className="white" m={1}><ReactTypingEffect
        text={["10278"]} eraseDelay={20000} cursor= "|" typingDelay = {250} /></Box>
          <Box lineHeight={.1} fontWeight="400" fontSize="Button.fontSize" className="white" m={1}>
          HAVE SAVED ONE IN A MILLION
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
    </Router>
    );
}

function Getsaves(){
  axios.get(`https://api.inamillion.io/getsaves`).then((response) => {
    console.log(response.data.count);
    return response.data.count;
  });
}


function Presave(){
  let history = useHistory()
  function presaveApple(){
    let music = window.MusicKit.getInstance();
    music.authorize().then( () => {
      var musicUserToken = music.musicUserToken;
      if (typeof musicUserToken !== typeof undefined && musicUserToken != '') {
        console.log("musicUserToken Acquired");
        console.log(musicUserToken);
        axios.post(`https://api.inamillion.io/saveapplemusic`, {"musicUserToken":musicUserToken}).then((response) => {
          console.log("MUT Sent to Backend");
          history.push("/thankyou");      
        }, (error) => {
          console.log(error);
        });
      }else {
      console.log("eek something bad happened with apple music user token.")    
      }
    });
  }

  return(
  <div>
  <center>
  <Box lineHeight={2} fontWeight="700" fontSize="body1.fontSize" className="white" >
  Are you ready 🔥?
  </Box>
  </center>

    <br />
    <Box m={1}>
      <Button href="https://accounts.spotify.com/authorize?client_id=22ed6c5a182a45ee9f012a1a735edc80&response_type=code&redirect_uri=https://inamillion.io/spotify&scope=user-follow-modify+user-library-modify+user-library-read+playlist-modify-public+playlist-modify-private+user-read-email+user-read-private%20user-read-email&state=34fFs29kd09" variant="outlined" className="spot" fullWidth><Icon icon={spotifyIcon} height="25" />&nbsp;&nbsp;Presave</Button>
    </Box>
    <Box m={1}>
      <Button onClick={presaveApple} variant="outlined" className="apple" fullWidth><Icon icon={appleMusic} height="20" />&nbsp;&nbsp;&nbsp;Preadd</Button>
    </Box>

  </div>
  );


}



function Thankyou(){
  return(
    <div>
    <center>
      <Box lineHeight={2} fontWeight="700" fontSize="h4.fontSize" className="white" >
      🙌
      </Box>
      <Box lineHeight={1.3} fontWeight="700" fontSize="body1.fontSize" className="white" m={1}>
      THANK YOU SO MUCH!<br />
      IT'LL BE AUTO-SAVED INTO YOUR LIBRARY ON FEB 12<br />
      SEE YOU ON THE OTHER SIDE 🤫
      </Box>
      <Box lineHeight={2} fontWeight="700" fontSize="h4.fontSize" className="white" >
      🙏
      </Box>
    </center>
    </div>
  );
}


function About(){
  return(
  <div>
    <center>
    <Box lineHeight={2} fontWeight="700" fontSize="body1.fontSize" className="white" >
    The 🔥&nbsp; returns this weekend.
    </Box>
    </center>
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
          Oh, my name is Kunal Agarwal. I am one of the songwriters and I made the One in a Million video. I work in cyber-security.
          <br /><br />
          5. YES. WE KNOW KUNALA. NOW, SPOILER?<br /><br />
          👹&nbsp;&nbsp;&nbsp;There is one on this page.
    </Box>
</div>
  );
}

function Play(){
  return(
  <div>
    <br />
    <Box m={1}>
      <Button href="#" variant="outlined" className="spot" fullWidth><Icon icon={spotifyIcon} height="25" />&nbsp;&nbsp;SPOTIFY</Button>
    </Box>
    <Box m={1}>
      <Button href="#" variant="outlined" className="apple" fullWidth><Icon icon={appleMusic} height="20" />&nbsp;&nbsp;&nbsp;APPLE MUSIC</Button>
    </Box>
  </div>
  );
}




export default App;
