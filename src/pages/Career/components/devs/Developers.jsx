import React from "react";
import classes from './Developers.module.scss'
import Button from "../../../../components/Button/Button";

const Developers = () => {
    return(
        <div className={classes.devs}>
            <h3>Developers</h3>
            <div className={classes.devs__str}>
                <div className={classes.description}>
                    <h4>role</h4>
                    <h4>skills</h4>
                    <h4>location</h4>
                </div>
                <div className={classes.line}></div>
                <div className={classes.devs__senior}>
                    <div className={classes.dev__role}>
                        <h3>Senior Web Full Stack Developer</h3>
                        <p>Seniority in development is not just about how much time you have already spent behind the computer screen. It's the way you think, how you approach problems and their solutions, the responsibility you take on and feel.</p>
                        <div className={classes.btns}>
                            <Button btnText='APPLY NOW' styles='orange'/>
                            
                            <button className={classes.btn__learn}>LEARN MORE</button>
                            
                        </div>
                    </div>
                    <div className={classes.dev__skills}>
                        <h5>Node.js</h5>
                        <h5>React js</h5>
                        <h5>Vue.js</h5>
                        <h5>Typescript</h5>
                        <h5>Javascript</h5>
                        <h5>Next JS</h5>
                        <h5>Amplify</h5>
                        <h5>AWS</h5>
                        <h5>Terraform</h5>
                        <h5>C# and .NET</h5>
                        <h5>GraphQL</h5>
                        <h5>Serverless Framework</h5>
                    </div>
                    <div className={classes.dev__location}>
                        <p>Remote,</p>
                        <p><mark>Ostrava</mark> - Czech Republic</p>
                        <p><mark>Brno</mark> - Czech Republic</p>
                        <p><mark>Barcelona</mark> - Spain</p>
                        <p><mark>Prague</mark> - Czech Republic</p>
                        <p><mark>Zlin</mark> - Czech Republic</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Developers;