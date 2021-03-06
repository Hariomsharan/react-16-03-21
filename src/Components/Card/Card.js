import { PropTypes } from 'prop-types';

import './Card.css';

function Card(props) {
    let {image, title, desc} = props.card1;
        return (
            <div className="Card">

                {props.children}

                <div style={{backgroundImage: `url(${image})`}} className="image"></div>
                <br/>
                <hr/>
                <h3>{title}</h3>
                <br/>
                <p>{desc}</p>
                <br/>
                <button onClick={props.deleteCard} >Delete</button>
            </div>
        )
}


Card.propTypes = {
    deleteCard: PropTypes.func,
    card1: PropTypes.object
}
    
    export default Card
    
