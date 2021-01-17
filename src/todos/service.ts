import { Todo } from './model';
import { TodoType } from "./type"

let TODOS: Todo[] = []

const generateId = () =>
  Math.random()
    .toString()
    .split('.')[1]

export class TodoService {

  static findAll(): Todo[] {
    return TODOS
  }

  static findById(id:string): Todo | undefined {
    const todo = TODOS.find(todo => todo.id === id)

    return todo
  }

  static save(todo: TodoType) {
    const savedTodo = todo.id
      ? this.update(todo)
      : this.create(todo)

    return savedTodo
  }

  static create({ text }: TodoType) {
    const newTodo = new Todo({ id: generateId(), text })
    TODOS.push(newTodo)

    return newTodo
  }

  static update(todo: TodoType): Todo | undefined {
    const indexTodo = TODOS.findIndex(({ id }) => id === todo.id)

    if (indexTodo < 0) {
      return undefined
    }

    const updatedTodo = new Todo(todo)

    TODOS[indexTodo] = updatedTodo

    return updatedTodo
  }

  static deleteTodo(id:string): boolean {
    const totalTodos = TODOS.length

    TODOS = TODOS.filter(todo => todo.id !== id)

    return (TODOS.length !== totalTodos)
  }
}