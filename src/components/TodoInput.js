import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {useTodosStore} from '../contexts/TodosContext';
import {action} from 'mobx';

const TodoInput = observer(() => {
  const [inputText, setInputText] = useState('');

  const todosStore = useTodosStore();

  const addTodo = () => {
    todosStore?.addTodo(inputText);
    // setData((prev) => {
    //   if (inputText) {
    //     const newTodo = {title: inputText, id: uuid(), completed: false};
    //     return [...prev, newTodo];
    //   }
    // });
    setInputText('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        onChangeText={(val) => {
          setInputText(val);
        }}
        onSubmitEditing={() => {
          addTodo();
        }}
        value={inputText}
        style={styles.textInput}
        placeholder="Title..."
      />
      <TouchableOpacity onPress={addTodo} style={styles.addButton}>
        <Text style={{color: 'white'}}>Add</Text>
      </TouchableOpacity>
    </View>
  );
});

export default TodoInput;

const styles = StyleSheet.create({
  container: {
    height: 60,
    flexDirection: 'row',
    width: '100%',
    padding: 10,
  },
  textInput: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
    fontSize: 18,
  },
  addButton: {
    backgroundColor: '#0064e1',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
