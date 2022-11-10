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

  headingOne:<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8.637 13V3.669H7.379V7.62H2.758V3.67H1.5V13h1.258V8.728h4.62V13h1.259zm5.329 0V3.669h-1.244L10.5 5.316v1.265l2.16-1.565h.062V13h1.244z"></path></svg>,
  headingTwo:<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.638 13V3.669H6.38V7.62H1.759V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.022-6.733v-.048c0-.889.63-1.668 1.716-1.668.957 0 1.675.608 1.675 1.572 0 .855-.554 1.504-1.067 2.085l-3.513 3.999V13H15.5v-1.094h-4.245v-.075l2.481-2.844c.875-.998 1.586-1.784 1.586-2.953 0-1.463-1.155-2.556-2.919-2.556-1.941 0-2.966 1.326-2.966 2.74v.049h1.223z"></path></svg>,
  headingThree:<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7.637 13V3.669H6.379V7.62H1.758V3.67H.5V13h1.258V8.728h4.62V13h1.259zm3.625-4.272h1.018c1.142 0 1.935.67 1.949 1.674.013 1.005-.78 1.737-2.01 1.73-1.08-.007-1.853-.588-1.935-1.32H9.108c.069 1.327 1.224 2.386 3.083 2.386 1.935 0 3.343-1.155 3.309-2.789-.027-1.51-1.251-2.16-2.037-2.249v-.068c.704-.123 1.764-.91 1.723-2.229-.035-1.353-1.176-2.4-2.954-2.385-1.873.006-2.857 1.162-2.898 2.358h1.196c.062-.69.711-1.299 1.696-1.299.998 0 1.695.622 1.695 1.525.007.922-.718 1.592-1.695 1.592h-.964v1.074z"></path></svg>,

  superscript:<SuperscriptIcon size={15}/>,
  subscript:<SubscriptIcon size={15}/>,
  table:<GridOnIcon size={20}/>,
  row:<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1569683503597" viewBox="0 0 1024 1024" version="1.1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M904 768H120c-4.4 0-8 3.6-8 8v80c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-80c0-4.4-3.6-8-8-8zM878.7 160H145.3c-18.4 0-33.3 14.3-33.3 32v464c0 17.7 14.9 32 33.3 32h733.3c18.4 0 33.3-14.3 33.3-32V192c0.1-17.7-14.8-32-33.2-32zM360 616H184V456h176v160z m0-224H184V232h176v160z m240 224H424V456h176v160z m0-224H424V232h176v160z m240 224H664V456h176v160z m0-224H664V232h176v160z"></path></svg>,
  column:<svg className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-i4bv87-MuiSvgIcon-root" stroke="currentColor" fill="currentColor" strokeWidth="0" t="1569683555439" viewBox="0 0 1024 1024" version="1.1" height="20" width="20" xmlns="http://www.w3.org/2000/svg"><defs></defs><path d="M856 112h-80c-4.4 0-8 3.6-8 8v784c0 4.4 3.6 8 8 8h80c4.4 0 8-3.6 8-8V120c0-4.4-3.6-8-8-8zM656 112H192c-17.7 0-32 14.9-32 33.3v733.3c0 18.4 14.3 33.3 32 33.3h464c17.7 0 32-14.9 32-33.3V145.3c0-18.4-14.3-33.3-32-33.3zM392 840H232V664h160v176z m0-240H232V424h160v176z m0-240H232V184h160v176z m224 480H456V664h160v176z m0-240H456V424h160v176z m0-240H456V184h160v176z"></path></svg>,
  removeTable:<DeleteOutlineIcon size={20}/>
}




const Icon = (props)=>{
  const {icon} = props
  return(
    iconList[icon]
  )
}

export default Icon;
