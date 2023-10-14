import '../assets/styles/NavigationBar.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as CalmCornerLogo } from '../assets/icons/logo.svg';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

function NavigationBar() {

  function toggleNavMobile() {
    var x = document.getElementById("navigation");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }
  return (
    <nav>
      <div className='for-mobile'>
        <div className='logo'><Link to='/'><CalmCornerLogo /></Link></div>
        <button onClick={toggleNavMobile}><MenuRoundedIcon /></button>
      </div>
      <ul className='topnav' id='navigation'>
        <li><NavLink to='/מוקדי-תמיכה' className="navigation-link">מוקדי תמיכה</NavLink></li>
        <li><NavLink to='/שיטות-הרגעה' className="navigation-link">שיטות הרגעה</NavLink></li>
        <li><NavLink to='/סיפורים-אישיים' className="navigation-link">סיפורים אישיים</NavLink></li>
        <li><NavLink to='/דיווחים-מהשטח' className="navigation-link">דיווחים מהשטח</NavLink></li>
        <li><NavLink to='/הגנה-עצמית' className="navigation-link">הגנה עצמית</NavLink></li>
      </ul>
    </nav>
  )
}

export default NavigationBar