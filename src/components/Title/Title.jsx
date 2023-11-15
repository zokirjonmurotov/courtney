import React from 'react'
import TitleScss from './Title.module.scss'

//Examples
//<Title h2Text ='text' pText='text' /> 
// if you have more than one <p> in your title component ---> pText = {['text1', 'text2', 'text3']}


export default function Title({h2Text, pText}) {
  return (
    <div>
                <div className={TitleScss.text}>
                    <h2 className={TitleScss.h2}>{h2Text}</h2>
                    {Array.isArray(pText) ? pText.map((item, i) => <p key={i} className={TitleScss.p}>{item}</p>) : <p className={TitleScss.p}>{pText}</p>}
                </div>
    </div>
  )
}
