import Button from "@mui/material/Button";
import CloseIcon from '@mui/icons-material/Close';
import {Link} from "react-router-dom";

function PopupBase(props) {
  return (
    <div className='popup-base'>
      <Link
        to='/'
        className='popup-base__dropback'
      />

      <div className='popup-base__content'>
        <div className='popup-base__header'>
          <h2>
            {props.title}
          </h2>

          <Link to='/'>
            <CloseIcon sx={{ fontSize: 38 }}/>
          </Link>
        </div>
        <div className='popup-base__body'>
          {props.children}
        </div>
      </div>
    </div>
  )
}

export default PopupBase
