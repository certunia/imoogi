import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'

function FloatToggle(props) {
  const items = props.items;
  const [id] = useState(Math.round(Math.random() * 99999).toString());

  const history = useLocation();
  let pathName = '';
  let activeIndex = 0;

  useEffect(() => {
    pathName = history.pathname;
  }, [history.pathname]);

  items.forEach((item, index) => {
    item.id = id + '_' + index;
    if (item.to === history.pathname) {
      item.class = 'active';
      activeIndex = index;
    } else {
      item.class = '';
    }
  });

  const gap = props.gap ? props.gap : 50;

  const [elementsWidth, setElementsWidth] = useState([]);
  useEffect(() => {
    setTimeout(() => {
      for (let i = 0; items.length > i ; i++) {
        let width = document.getElementById(`${id}_${i}`).clientWidth;
        elementsWidth.push(width);
      }
    }, 0);
  }, []);

  let [decorWidth, setDecorWidth] = useState('');
  let [decorLeft, setDecorLeft] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      let width = document.getElementById(`${id}_${activeIndex}`).clientWidth;
      setDecorWidth(width);

      let left = 0;
      for (let i = 0; activeIndex >= i ; i++) {
        if (i !== 0) {
          left += parseInt(elementsWidth[i - 1]) + gap;
        }
      }
      setDecorLeft(left + 1);// +1px of border
    }, 0);
  }, [id, activeIndex]);

  return (
    <div className='float-toggle'>
      <nav
        className='float-toggle__links'
        style={{gap: gap + 'px'}}
        id={id}
      >
        { items.map(item => (
          <Link
            to={item.to}
            key={item.title}
            id={item.id}
            className={item.class}
          >
            {item.title}
          </Link>
        ))}
      </nav>
      <span
        className="float-toggle__decor"
        style={{width: decorWidth, left: decorLeft}}
      />
    </div>
)
}

export default FloatToggle
