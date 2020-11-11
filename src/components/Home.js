import React from 'react';
import styles from './Home.module.css';
import desktop from '../assests/images/desktop.jpg';
import PropTypes from 'prop-types';

const Home = props => {
    return (
        <div className={styles.Home}>
            <div className={styles.Description}>
                <h2>Hello, </h2>
                <h2>I'm Dan.</h2>
                <h3>A Web Developer</h3>
            </div>
            <div className={styles.Illustrate}>
                <img src={desktop} />
            </div>
        </div>
    );
};

Home.propTypes = {

};

export default Home;