import React from "react";
import "./todoListTemplate.css";

const todoListTemplate = ({ form, children }) => {
  return (
    <main className="todo-list-template">
      <div className="title">
        <span>오늘 할 일</span>
      </div>
      <section className="form-wrapper">{form}</section>
      <section className="todos-wrapper">{children}</section>
    </main>
  );
};

export default todoListTemplate;
