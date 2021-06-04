import './Card.css'

function Card(props) {
    // body...
    const classes = 'card ' + props.className;
    return <div className={classes}>{props.children}</div>;
}

export default Card