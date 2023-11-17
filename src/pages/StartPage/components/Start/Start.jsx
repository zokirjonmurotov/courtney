import React from 'react';
import startStyle from './Start.module.scss'
import requestIcon from '../../../../../public/images/GlobalCard Icons/request.png'
import interviewIcon from '../../../../../public/images/GlobalCard Icons/interview.png'
import hireIcon from '../../../../../public/images/GlobalCard Icons/hire.png'
import Title from '../../../../Components/Title/Title';
import GlobalCard from '../../../../Components/GlobalCard/GlobalCard';


export default function Start(){
    return(
        <div className="container">
            <div className={startStyle.startSection}>
            <Title h2Text='How to Get Started with Courtney' pText='From full-time remote engineering teams to hourly contractors, work with remote devs as needed'/>
            <div className={startStyle.startCards}>
            <GlobalCard flex='row' width='30%' icon={requestIcon} heading='01. Request' bottom='Tell us more about your requirements and technical needs' />
            <GlobalCard flex='row' width='30%' icon={interviewIcon} heading='02. Interview' bottom='You interview candidates. Average 2 interviews to hire.' />
            <GlobalCard flex='row' width='30%' icon={hireIcon} heading='03. Hire' bottom='You choose who to hire, and we handle all the paperwork.' />
            </div>
            </div>
        </div>
    )
}