import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import {connect} from 'react-redux'
import {fetchTodos, toggleTodo, deleteTodo, getVisibleTodos} from '../reducers/todo'

const TodoItem = ({id, name, isComplete, toggleTodo, deleteTodo}) => (
    <li>
        <span className='delete-item'>
          <button onClick={() => deleteTodo(id)}></button>
        </span>
        <input type="checkbox" id={id}
            defaultChecked={isComplete} 
            onChange={() => toggleTodo(id)} />
          <label htmlFor={id}>{name}</label>
    </li>
)

class TodoList extends Component {
    componentDidMount() {
      this.props.fetchTodos()
    }
    render() {
        return (
            <div className="Todo-List">
            <ul>
            <ReactCSSTransitionGroup
              transitionName="example"
              transitionEnterTimeout={500}
              transitionLeaveTimeout={300}>
                {
                    this.props.todos.map((todo) => (
                      <TodoItem 
                        key={todo.id} 
                        toggleTodo={this.props.toggleTodo} 
                        deleteTodo={this.props.deleteTodo}
                        {...todo} />
                      )
                    )
                }
              </ReactCSSTransitionGroup>
            </ul>
        </div>
      )
    }
} 

export default connect(
  (state, ownProps) => ({todos: getVisibleTodos(state.todo.todos, ownProps.filter)}),
  {fetchTodos, toggleTodo, deleteTodo}
)(TodoList)
