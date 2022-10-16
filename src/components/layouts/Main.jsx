import Header from '../Header';
import {Link} from "react-router-dom";
import TopSection from "../sections/Top";

function MainLayout(props) {
  return (
    <div className='main-layout'>
      <Header />

      <TopSection title={props.title}>
        {props.topRight}
      </TopSection>

      <div className='wrap'>
        {props.children}
      </div>
    </div>
  )
}

export default MainLayout
