class TodoManager {
  constructor() {
    this.todos = [];
    this.nextId = 1;
  }

  addTodo(text) {
    if (!text || typeof text !== "string" || text.trim() === "") {
      throw new Error("Todo text must be a non-empty string");
    }

    const todo = {
      id: this.nextId++,
      text,
      completed: false,
    };

    this.todos.push(todo);
    return todo;
  }

  getTodos() {
    return [...this.todos];
  }

  getTodoById(id) {
    if (typeof id !== "number") {
      throw new Error("Invalid id");
    }
    return this.todos.find(t => t.id === id) || null;
  }

  toggleTodo(id) {
    const todo = this.getTodoById(id);
    if (!todo) {
      throw new Error("Todo not found");
    }
    todo.completed = !todo.completed;
    return todo;
  }

  removeTodo(id) {
    const index = this.todos.findIndex(t => t.id === id);
    if (index === -1) {
      throw new Error("Todo not found");
    }
    return this.todos.splice(index, 1)[0];
  }
}

module.exports = TodoManager;
