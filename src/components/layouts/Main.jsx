import Header from '../Header';
import {Link} from "react-router-dom";

function MainLayout(props) {
  return (
    <div className='main-layout'>
      <Header />

      <div className='wrap'>
        {props.children}
      </div>
    </div>
  )
}

export default MainLayout
