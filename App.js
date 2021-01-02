import {observer} from 'mobx-react';
import React from 'react';
import {View} from 'react-native';

import Header from './src/components/Header';
import TodoInput from './src/components/TodoInput';
import TodoList from './src/components/TodoList';
import {TodosProvider} from './src/contexts/TodosContext';

const App = () => {
  return (
    <View>
      <TodosProvider>
        <Header />
        <TodoInput />
        <TodoList />
      </TodosProvider>
    </View>
  );
};

export default App;
