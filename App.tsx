/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { useState } from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  View,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { tasks } from './src/data/Data';

import TaskListHeader from './src/components/TaskListHeader';

import TaskList from './src/components/TaskList';

import AddTask from './src/components/AddTask';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const [yourTasks, setYourTasks] = useState(tasks);

  function handleToggleTask(taskId: number) {
    setYourTasks(yourTasks.map(task => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task;
      }
    }));
  }

  function cleanTasks() {
    setYourTasks([]);
  }

  function addTask(taskName: string) {
    setYourTasks([
      ...yourTasks,
      {
        id: yourTasks.length,
        name: taskName,
        detail: 'Detail for' + taskName,
        completed: false
      }
    ]);
  }

  return (
    <SafeAreaView style={{ flexGrow: 1, padding: 10 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        automaticallyAdjustKeyboardInsets={true}
        contentInsetAdjustmentBehavior='automatic'
        contentContainerStyle={{ flexGrow: 1, padding: 10 }}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <TaskListHeader tasks={yourTasks} onCleanTasks={cleanTasks} />
          <TaskList tasks={yourTasks} onChangeTask={handleToggleTask} />
        </View>
        <View style={{ flexGrow: 2 }} />
        <AddTask onAddTask={addTask} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  italic: {
    fontStyle: 'italic'
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: 'white'
  },
});

export default App;
