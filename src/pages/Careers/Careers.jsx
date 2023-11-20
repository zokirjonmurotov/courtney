import React from "react";
import Developers from '../Careers/components/devs/Developers'
import Joinus from '../Careers/components/joinus/Joinus'
import classes from './Careers.module.scss'

const Careers = () => {
    return(
        <div className={classes.careers}>
            <Joinus/>
            <Developers/>

        </div>
    )
}
export default Careers;