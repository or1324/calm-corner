import '../assets/styles/NavigationBar.scss'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { ReactComponent as CalmCornerLogo } from '../assets/icons/logo.svg';

function NavigationBar() {


  return (
    <nav>
      <ul>
        <li className='logo'><Link to='/'><CalmCornerLogo /></Link></li>
        <li><NavLink to='/מוקדי-תמיכה' className={({isActive}) =>isActive ? "active" : ""}>מוקדי תמיכה</NavLink></li>
        <li><NavLink to='/>שיטות-הרגעה' className={({isActive}) =>isActive ? "active" : ""}>שיטות הרגעה</NavLink></li>
        <li><NavLink to='/סיפורים-אישיים' className={({isActive}) =>isActive ? "active" : ""}>סיפורים אישיים</NavLink></li>
        <li><NavLink to='/דיווחים-מהשטח' className={({isActive}) =>isActive ? "active" : ""}>דיווחים מהשטח</NavLink></li>
        <li><NavLink to='/הגנה-עצמית' className={({isActive}) =>isActive ? "active" : ""}>הגנה עצמית</NavLink></li>


      </ul>
    </nav>
  )
}

export default NavigationBar