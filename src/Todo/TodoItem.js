import React from 'react'
import PropTypes from 'prop-types' 

const styles = {
    li: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: 'center',
        padding: '.5rem 1rem',
        border: '1px solid #ccc',
        borderRadius: '5px',
        margin: '0.5rem'
    },

    input: {
        marginRight: '1rem',

    }
}

function TodoItem( {todo, index, onChange, onClick}) {
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li style={styles.li}>
            <span className={classes.join('')}>
                <input  
                    style={styles.input} 
                    type="checkbox" 
                    onChange = {() => onChange(todo.id)}/>
                <strong>{index + 1}</strong>
                &nbsp;
                {todo.title}
            </span>
            <button className="rm"
                    onClick = {() => onClick(todo.id) }>
                    &times;
            </button>
        </li>
    )
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired
}

export default TodoItem;