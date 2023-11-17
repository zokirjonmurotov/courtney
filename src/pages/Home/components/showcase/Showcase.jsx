import React from 'react';
import styles from './Showcase.module.scss';
import Button from '../../../../components/Button/Button';
import HomeTitle from '../HomeTitle/HomeTitle';
import showcase from '../../../../assets/homeShowcase.png';
import Container from '../container/Container';

const Showcase = () => {
    return (
        <Container>
            <div className={styles.homeShowcase}>
            <div className={styles.content}>
                <HomeTitle h2='Building dev team, Quickly and Affordably' p='We specialize in helping you build a team of expert developers, testers, and leaders. We are setup to deliver long term solutions, or scale to different needs quickly.' left='left'/>
                <Button btnText='Build a team' styles='orange'/>
            </div>
            <img src={showcase} alt="" />
        </div>
        </Container>
    );
}

export default Showcase;
