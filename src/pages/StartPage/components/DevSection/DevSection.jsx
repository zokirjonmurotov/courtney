import React from 'react';
import devStyles from './DevSection.module.scss'

let ArrForText =[
    {h3: '>Talent shortage'},
    {h3: '>Lack of Expertise'},
    {h3: '>Quich Kick-Off'},
    {h3: '>Cost Optimization'},
    {h3: '>Talent Accessibility'},
    {h3: '>Administrative Hassle'},
]
const DevSection = () => {
    return (
        <div>
           <div className="container">
           <div className={devStyles.devSection}>
            <h2 className={devStyles.h2}>Why You Need To Hire Remote Developers</h2>
                    <div className={devStyles.h3}>{
                        ArrForText.map((item, i)=> <h3 key={i}>{item.h3}</h3>)
                    }
                    </div>
                    <div className={devStyles.showcase}>
                        <h2>1000+</h2>
                        <p>Developers</p>
                    </div>

            </div>
           </div>
        </div>
    );
}

export default DevSection;