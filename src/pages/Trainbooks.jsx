import MainLayout from '../components/layouts/Main';
import FloatToggle from '../components/ui/FloatToggle';
import {Link} from "react-router-dom";

function Trainbooks(props) {
  const menuItems = [
    {to: '/trainbooks', title: 'all'},
    {to: '/trainbooks/saved', title: 'saved'},
    {to: '/trainbooks/my', title: 'my'},
  ]

  return (
    <MainLayout
      title='Trainbooks'
      topRight={<FloatToggle items={menuItems}/>}
    >
      <div className='trainbooks'>

      </div>
    </MainLayout>
  )
}

export default Trainbooks
