import {makeObservable, observable, action, autorun, computed} from 'mobx';
import uuid from 'uuid-random';

// export function createTodosStore() {
//   return {
//     todos: mockData,
//     addTodo(title) {
//       console.log('title', title);
//       this.todos.push({
//         title,
//         completed: false,
//         id: uuid(),
//       });
//     },
//     deleteTodo(id) {
//       this.todos = this.todos.filter((todo) => todo.id !== id);
//     },
//     editTodo(id, completed) {
//       this.todos = this.todos.map((todo) => {
//         if (todo.id === id) {
//           todo.completed = completed;
//         }
//         return todo;
//       });
//     },
//   };
// }

const mockData = [
  {
    id: '5fe3f4ca-193c-4170-83c1-cb5a19908601',
    title: 'Buy food for dinner',
    completed: true,
  },
  {
    id: 'f619466c-a016-4281-b584-7db2795d103d',
    title: 'Call Marie at 10.00 PM',
    completed: false,
  },
  {
    id: '5fe3f4ca-193c-4170-83c1-cb5a19908602',
    title: 'Write a react blog post',
    completed: false,
  },
];
export class TodosStore {
  constructor() {
    makeObservable(this, {
      todos: observable,
      addTodo: action,
      deleteTodo: action,
      editTodo: action,
      listContent: computed,
    });
    autorun(() => console.log(this.listContent));
  }
  todos = [];
  get listContent() {
    return this.todos;
  }

  addTodo(title) {
    this.todos.push({
      title,
      completed: false,
      id: uuid(),
    });
    // console.log(this.todos);
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
  editTodo(id, completed) {
    this.todos = this.todos.map((todo) => {
      if (todo.id === id) {
        console.log('infunction', completed);
        todo.completed = completed;
      }
      return todo;
    });
  }
}
