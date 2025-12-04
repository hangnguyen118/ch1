import classes from './Header.module.css'
import SearchBox from '../searchbox/SearchBox'
import { burger, logo } from '../../assets'

export default function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <img src={logo} alt='' />
      </div>
      <div className={classes.search_box}>
        <SearchBox />
      </div>
      <div className={classes.nav}>
        <ul>
          <li className={classes.nav_item}>
            <a href=''>Dashboard</a>
          </li>
          <li className={classes.nav_item}>
            <a href=''>Sandbox Page</a>
          </li>
          <li className={classes.nav_item}>
            <a href=''>Admin Dashboard</a>
          </li>
          <li className={classes.sandbox_button}>
            <a href=''>Sandbox Page</a>
          </li>
        </ul>
      </div>
      <div className={classes.burger}>
        <img src={burger} alt='' />
      </div>
    </div>
  )
}
