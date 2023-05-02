import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import RecentActorsRoundedIcon from '@mui/icons-material/RecentActorsRounded';

function LandingPage(){
    return(
        <nav className="general">
      <div className="landing-page">
          <h1 className="land">Welcome to Learn Africa E- <br/>Store</h1>
          <p className="landings">Access thousands of school textbooks <br/> and learning materials online.</p>
          <p className="landing">Get started for #500 monthly</p>
          </div>
          <div className="texbook-image">
          <p className="access">Access the best <br/> anywhere and <br/> anytime</p>
          <div className='material-ui'>
          <p><RecentActorsRoundedIcon className='icons'/></p> 
          <p><RecentActorsRoundedIcon className='icons'/></p>
          <p className='icons2'>+98</p>
          </div>

          <div className='compatible'> 
          <p id='divy'><AutoStoriesIcon className="icons"/></p>
          <p id='compat'>compatible on <br/> all device</p>
          </div>
          </div>
         
      </nav>
        )
}
export default LandingPage;