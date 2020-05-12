import React from 'react'
import './badge.scss';
const Badge = ({color, click, className }) => <i onClick={click} className={`badge badge--${color} ${className} `}></i>


export default Badge;
