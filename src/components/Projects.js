import React from 'react';
import PropTypes from 'prop-types';
import projects from '../ProjectsData';
import Project from './Project/Project';
import styles from './Projects.module.css';

const Projects = props => {
    const cards = projects.map(project => <Project key={project.jpeg_name} data={project} />);
    return (
        <div className={styles.Projects}>
            {/* <h1 style={{ fontSize: '4vw' }}>Some small projects i did</h1> */}
            <div className={styles.CardsContainer}>
                {cards}
            </div>
        </div>

    );
};

Projects.propTypes = {

};

export default Projects;