import React from 'react'
import styles from './GlobalCard.module.scss';

export default function GlobalCard(props) {

  // !!! READ COMMENTS BELOW

  if (props.flex == 'row') {
    return (
      <div className={styles['global-card-row']} style={{width:`${props.width}`}}>
        <div className={styles["card-icon"]}>
          <img src={props.icon} alt="" />
        </div>
        <div className='flex-col'>
          <div className={styles["card-heading"]}>
            {props.heading}
          </div>
          <p className={styles["card-bottom-txt"]}>
            {props.bottom}
          </p>
        </div>
      </div>
    )
  }
else {
    return (
      <div className={styles['global-card']} style={{ width: `${props.width}` }}>
        <div className={styles["card-icon"]}>
          <img src={props.icon} alt="" />
        </div>
        <div className={styles["card-heading"]}>
          {props.heading}
        </div>
        <p className={styles["card-bottom-txt"]}>
          {props.bottom}
        </p>
      </div>
    )
  }
}


//  1. GLOBALCARD  IS USED IN TWO DIRECTION (ROW AND COLUMN),OUT OF YOUR
//  PAGE DESIGN USE FLEX = 'ROW' WHETHER CARD'S ICON AND TEXT POSITIONED 
//  IN A ROW, OTHERWISE JUST IGNORE FLEX PROPS IN COMPONENT.
//  ************************************************************
//  2. ICONS FOR GLOBAL CARD ARE IN /PUBLIC/IMAGES/GLOBALCARD ICON FOLDER, 
//  USE THEM IN YOUR ARRAY OBJECT TO MAP DATA.
// ************************************************************
//  3. TO DISPLAY CARDS IN A ROW OR COLUMN WRAP THEM IN YOUR CUSTOM DIV AND  CUSTOMIZE CARD'S WIDTH GIVEN VALUE FOR
// "WIDTH " PARAMETER
// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//  EXAMPLE TO USE GLOBALCARD COMPONENT
//  <GlobalCard flex='row'    width='25%' icon={icon1} heading='Architect your Solution' bottom='Our team ...' />
