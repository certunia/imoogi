import UserLogin from './blocks/UserLogin';
import {Link} from "react-router-dom";

function Header(props) {
  const menuItems = [
    {to: '/trainbooks', title: 'Trainbooks'},
    {to: '/users', title: 'Users'},
    {to: '/statistics', title: 'Statistics'},
  ]

  return (
    <header className='header'>
      <div className='header-left'>
        <Link
          to='/'
          className='header-logo'
        >
          <img src='logo.svg' alt='Imoogi logo dragon'/>
        </Link>

        <div className='header-divider'></div>

        <nav className='header-nav'>
          { menuItems.map(item => <Link to={item.to} key={item.title}> {item.title} </Link>) }
        </nav>
      </div>

      <div className='header-right'>
        <UserLogin />
      </div>
    </header>
  )
}

export default Header
