const TodoManager = require('../src/todoManager.js');

describe("TodoManager", () => {
  let manager;

  beforeEach(() => {
    manager = new TodoManager();
  });

  describe("addTodo", () => {
    test("adds a todo", () => {
      const todo = manager.addTodo("Buy milk");
      expect(todo).toEqual({
        id: 1,
        text: "Buy milk",
        completed: false,
      });
      expect(manager.getTodos()).toHaveLength(1);
    });

    test("throws on empty text", () => {
      expect(() => manager.addTodo("")).toThrow();
      expect(() => manager.addTodo("   ")).toThrow();
      expect(() => manager.addTodo(null)).toThrow();
    });
  });

  describe("getTodos", () => {
    test("returns empty array initially", () => {
      expect(manager.getTodos()).toEqual([]);
    });

    test("returns copy, not reference", () => {
      manager.addTodo("Test");
      const todos = manager.getTodos();
      todos.push({ fake: true });
      expect(manager.getTodos()).toHaveLength(1);
    });
  });

  describe("getTodoById", () => {
    test("returns todo if found", () => {
      const todo = manager.addTodo("Learn Jest");
      expect(manager.getTodoById(todo.id)).toEqual(todo);
    });

    test("returns null if not found", () => {
      expect(manager.getTodoById(999)).toBeNull();
    });

    test("throws on invalid id type", () => {
      expect(() => manager.getTodoById("1")).toThrow();
    });
  });

  describe("toggleTodo", () => {
    test("toggles completed state", () => {
      const todo = manager.addTodo("Write tests");
      manager.toggleTodo(todo.id);
      expect(todo.completed).toBe(true);
      manager.toggleTodo(todo.id);
      expect(todo.completed).toBe(false);
    });

    test("throws if todo does not exist", () => {
      expect(() => manager.toggleTodo(123)).toThrow();
    });
  });

  describe("removeTodo", () => {
    test("removes a todo", () => {
      const todo = manager.addTodo("Delete me");
      manager.removeTodo(todo.id);
      expect(manager.getTodos()).toHaveLength(0);
    });

    test("throws if todo does not exist", () => {
      expect(() => manager.removeTodo(1)).toThrow();
    });
  });
});
