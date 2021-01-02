import React from 'react';
import {observer} from 'mobx-react-lite';
import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import {useTodosStore} from '../contexts/TodosContext';
import {action} from 'mobx';
const TodoList = observer(() => {
  const todosStore = useTodosStore();

  const renderItem = ({item}) => {
    return (
      <View
        style={{
          ...styles.listContainer,
          backgroundColor: item.completed ? 'darkgray' : '#eaeaea',
        }}>
        <CheckBox
          disabled={false}
          boxType="square"
          style={styles.checkBox}
          value={item.completed}
          tintColor="#fff"
          onTintColor="darkgray"
          onValueChange={(newValue) => {
            todosStore.editTodo(item.id, newValue);
          }}
        />
        <Text
          style={{
            ...styles.listTitle,
            textDecorationLine: item.completed ? 'line-through' : 'none',
            color: item.completed ? '#fff' : '#000',
          }}>
          {item.title}
        </Text>
        <TouchableOpacity
          onPress={() => todosStore.deleteTodo(item.id)}
          style={styles.deleteBtn}>
          <Text style={{color: 'firebrick', fontSize: 22, fontWeight: '500'}}>
            x
          </Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <FlatList
      data={todosStore?.todos.slice()}
      keyExtractor={(item) => `${item.id}`}
      renderItem={renderItem}
    />
  );
});

export default TodoList;

const styles = StyleSheet.create({
  listContainer: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#eaeaea',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listTitle: {
    flex: 1,
    fontSize: 18,
  },
  deleteBtn: {
    marginRight: 10,
  },
  checkBox: {
    height: 20,
    width: 20,
    borderWidth: 0,
    marginHorizontal: 10,
  },
});
