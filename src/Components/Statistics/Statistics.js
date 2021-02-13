import React from "react";
import PropTypes from 'prop-types';
import styles from './Statistics.module.css'

const Statistics = ({title, stats}) => {
    return (
    <section className={styles.statistics}>
    {title ? <h2 className={styles.title}>{title}</h2> : null}

  <ul className={styles.statsList}>  
      {stats.map(stat => (
      <li className={styles.item} key={stat.id} style={ {backgroundColor: randomColor()}}>
      <span className={styles.label}>{stat.label}</span>
      <span className={styles.percentage}>{stat.percentage}%</span>
    </li>
    ))}
  </ul>           
</section>
)
}

Statistics.defaultProps = {
    title: "Here's a title",
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    })
    ).isRequired,
}

export default Statistics;


const randomColor = () => {
    const color = () => Math.floor(Math.random()*255);
    return "rgb(" + color() + "," + color() + "," + color() + ")";
}