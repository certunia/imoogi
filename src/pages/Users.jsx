import MainLayout from '../components/layouts/Main';
import FloatToggle from '../components/ui/FloatToggle';
import {Link} from "react-router-dom";

function Users(props) {
  const menuItems = [
    {to: '/users', title: 'All'},
    {to: '/users/favorites', title: 'Favorites'},
  ]

  return (
    <MainLayout
      title='Users'
      topRight={<FloatToggle items={menuItems}/>}
    >
      <div className='trainbooks'>

      </div>
    </MainLayout>
  )
}

export default Users
