import React from 'react';

import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import StrikethroughSIcon from '@mui/icons-material/StrikethroughS';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import ImageIcon from '@mui/icons-material/Image';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import AddIcon from '@mui/icons-material/Add';

// import { BsTypeH1, BsTypeH2, BsTypeH3 } from 'react-icons/bs'

import SubscriptIcon from '@mui/icons-material/Subscript';
import SuperscriptIcon from '@mui/icons-material/Superscript';

// import { AiOutlineTable, AiOutlineInsertRowBelow, AiOutlineInsertRowRight } from 'react-icons/ai'
import GridOnIcon from '@mui/icons-material/GridOn';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import SubdirectoryArrowLeftIcon from '@mui/icons-material/SubdirectoryArrowLeft';

const iconList={
  bold:<FormatBoldIcon size={20}/>,
  italic:<FormatItalicIcon size={20}/>,
  strikethrough:<StrikethroughSIcon size={20}/>,
  underline:<FormatUnderlinedIcon size={20}/>,
  blockquote:<FormatQuoteIcon size={20}/>,

  alignLeft:<FormatAlignLeftIcon size={20}/>,
  alignCenter:<FormatAlignCenterIcon size={20}/>,
  alignRight:<FormatAlignRightIcon size={20}/>,

  orderedList:<FormatListNumberedIcon size={20}/>,
  unorderedList:<FormatListBulletedIcon size={20}/>,

  link:<InsertLinkIcon size={20}/>,
  image:<ImageIcon size={20}/>,
  video:<VideoLibraryIcon size={20}/>,
  add:<AddIcon size={20}/>,

  // headingOne:<BsTypeH1 size={20}/>,
  // headingTwo:<BsTypeH2 size={20}/>,
  // headingThree:<BsTypeH3 size={20}/>,

  superscript:<SuperscriptIcon size={15}/>,
  subscript:<SubscriptIcon size={15}/>,
  table:<GridOnIcon size={20}/>,
  row:<SubdirectoryArrowLeftIcon size={20}/>,
  column:<AiOutlineInsertRowRight size={20}/>,
  removeTable:<DeleteOutlineIcon size={20}/>
}




const Icon = (props)=>{
  const {icon} = props
  return(
    iconList[icon]
  )
}

export default Icon;
