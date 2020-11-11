import React from 'react';
import styles from './About.module.css';
import github_ico from '../assests/icons/GitHub-Mark-32px.png'
import PropTypes from 'prop-types';

const About = props => {
    return (
        <div className={styles.About}>
            <h1 className={styles.AboutMe}>TRAN DAN</h1>
            <div className={styles.Detail}>
                <p>Phone: (84)982548515</p>
                <p>Email: tergitran@gmail.com</p>
                <p>Github: github.com/tergitran</p>
                <a href='https://github.com/tergitran' target="_blank"><img src={github_ico}></img></a>

            </div>
            <h1>SKILLS</h1>
            <div className={styles.Detail}>
                <ul>
                    <li>Programming Languages: HTML, CSS, JavaScript</li>
                    <li>Library: ReactJS</li>
                    <li>Tools: Git – GitHub, Visual Studio Code</li>
                    <li>Databases: MySQL</li>
                </ul>
            </div>

            <h1>Education</h1>
            <div className={styles.Detail}>
                <h4>Bachelor of Science, Computer Science (GPA 7.4/10)</h4>
                <p>
                    University of Information Technology VNU-HCM
                </p>
            </div>
            <h1>Cirtifications</h1>
            <div className={styles.Detail}>
                <p><strong>TOEIC</strong> score 620</p>
            </div>
        </div>
    );
};

About.propTypes = {

};

export default About;