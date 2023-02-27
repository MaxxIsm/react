// App - компонент
import React, { Component } from "react";
import { TodoList, Header } from "../components";
import { ITodo } from "../types";

interface IAppState {
  todos: ITodo[];
}

export default class App extends Component<{}, IAppState> {
  state = {
    todos: [
      { id: 1, text: "Learn React", done: true, important: true },
      { id: 2, text: "Drink Water", done: false, important: false },
      { id: 3, text: "Drink Soda", done: false, important: false },
    ],
  };

  onChangeStateTodos = (id: number) => {
    this.setState((state) => {
      // 1. нашли индекс элемента на который кликнули
      const todoIdx = state.todos.findIndex((item) => item.id === id);
      // 2. создали копию с противоположным значением
      const newTodo = {
        ...state.todos[todoIdx],
        done: !state.todos[todoIdx].done,
      };

      // 3. создали новый массив с обновленной таской
      const before = state.todos.slice(0, todoIdx);
      const after = state.todos.slice(todoIdx + 1);

      return {
        todos: [...before, newTodo, ...after],
      };
    });
  };

  onChangeStateImportant = (id: number) => {
    this.setState((state) => {
      // 1. нашли индекс элемента на который кликнули
      const todoIdx = state.todos.findIndex((item) => item.id === id);
      // 2. создали копию с противоположным значением
      const newTodo = {
        ...state.todos[todoIdx],
        important: !state.todos[todoIdx].important,
      };

      // 3. создали новый массив с обновленной таской
      const before = state.todos.slice(0, todoIdx);
      const after = state.todos.slice(todoIdx + 1);

      return {
        todos: [...before, newTodo, ...after],
      };
    });
  };

  render() {
    return (
      <div>
        <Header title="Todo App" />
        <TodoList
          todos={this.state.todos}
          onDone={this.onChangeStateTodos}
          onImportant={this.onChangeStateImportant}
        />
      </div>
    );
  }
}
