import React from 'react';
import './Cards.css'


class Cards extends React.Component {
  
  render(){
    
    return (
        <ul>
            {this.props.weather.map(day => {
            return (
                <li>
                    <h2>{day.day}</h2>
                    <p>{day.hitemp}</p>
                </li>
            )
            })}
        </ul>
    );
  }
}

export default Cards;