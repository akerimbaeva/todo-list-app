import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

const styles = {
    ul: {
        listStyle: 'none',
        margin:0,
        padding: 0
    }
}

function TodoList(props) {
    return (
        <ul style={styles.ul}>
            {props.todos.map((todo, index) => {
                return (
                <TodoItem 
                    todo={todo} 
                    index={index} 
                    key={todo.id} 
                    onChange={props.onToggle}
                    onClick={props.onRemove}
                    />
            )})}
        </ul>
    );
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired , // for check our data types
    onToggle: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default TodoList;