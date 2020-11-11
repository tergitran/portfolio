import React from 'react';
import styles from './Navigation.module.css';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

const Navigation = props => {
    const style = {
        color: '#0de2e2',
        // fontWeight: 'bold'
    }
    return (
        <div className={styles.Navigation}>
            <ul className={styles.NavigationItems}>
                <li>
                    <NavLink activeStyle={style} to='/projects'>Projects</NavLink>
                </li>
                <li>
                    <NavLink activeStyle={style} to='/about'>About</NavLink>
                </li>
                {/* <li>
                    <NavLink activeStyle={style} to='/contact'>Contact</NavLink>
                </li> */}
            </ul>
        </div>
    );
};

Navigation.propTypes = {

};

export default Navigation;