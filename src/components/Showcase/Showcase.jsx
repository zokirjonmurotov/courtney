import React from 'react'
import './Showcase.modules.scss'

export default function Showcase(props) {
  return (
    <div >
   <div className='showcaseImage'>
   <div className='showcaseText'>
        <h2 className='showcaseBigText'>{ props.showcaseBigText }</h2>
        <p className='showcaseSmallText'>{ props.showcaseSmallText }</p>
      </div>
   </div>
      
    </div>
  )
}