import React from 'react';
import styles from './Project.module.css';
import PropTypes from 'prop-types';

const Project = props => {
    const { data } = { ...props };
    const { name, description, jpeg_name, source_url, web_url } = { ...data };

    return (
        <div className={styles.Project}>
            <img src={process.env.PUBLIC_URL + `/thumbnails/${jpeg_name}.JPG`}></img>
            <div cla>
                <h2>{name}</h2>
                <p>{description}</p>
                <div className={styles.Buttons}>
                    <a href={source_url} target='_blank' className={styles.Link}>View Code</a>
                    <a href={web_url} target='_blank' className={styles.Link}>Live Preview</a>
                </div>
            </div>
        </div>
    );
};

Project.propTypes = {

};

export default Project;