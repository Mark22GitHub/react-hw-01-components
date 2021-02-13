import React from "react";
import PropTypes from 'prop-types';


const Statistics = ({title, stats}) => {
    return (
    <section className="statistics">
    {title ? <h2 className="title">{title}</h2> : null}

  <ul className="stat-list">  
      {stats.map(stat => (
      <li className="item" key={stat.id} style={ {color: randomColor()}}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
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
    const color = () => {Math.floor(Math.random()*255)};
    return "rgb(" + color() + "," + color() + "," + color() + ")";
}