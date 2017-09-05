import React from 'react'

const TodoItem = ({id, isCompleted, description}) => (
    <li>
        <input type="checkbox" defaultChecked={isCompleted} /> {description}
    </li>
)

export default (props) => (
    <div className="Todo-List">
        <ul>
            {
                props.todos.map((todo) => (
                    <TodoItem key={todo.id} {...todo} />
                    )
                )
            }
        </ul>
    </div>
)