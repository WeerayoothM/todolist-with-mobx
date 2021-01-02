import {observer} from 'mobx-react';
import {useLocalObservable} from 'mobx-react-lite';
import React from 'react';
import {TodosStore} from '../stores/todosStore';

export const TodosStoreContext = React.createContext(undefined);
export const useTodosStore = () => React.useContext(TodosStoreContext);

export const TodosProvider = observer(({children}) => {
  return (
    <TodosStoreContext.Provider value={new TodosStore()}>
      {children}
    </TodosStoreContext.Provider>
  );
});
