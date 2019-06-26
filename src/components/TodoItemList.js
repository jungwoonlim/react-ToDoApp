import React, { Component } from "react";
import TodoItem from "./TodoItem";

class TodoItemList extends Component {
  render() {
    const { todos, onToggle, onRemove } = this.props;
    return (
      <div>
        <TodoItem text="안녕" />
        <TodoItem text="React js" />
        <TodoItem text="hello" />
      </div>
    );
  }
}

export default TodoItemList;
