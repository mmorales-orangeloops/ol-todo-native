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
  Text,
  useColorScheme,
  View,
} from 'react-native';

import { Button } from '@rneui/themed';

import Icon from 'react-native-vector-icons/Ionicons';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { tasks } from './src/data/Data';

import TaskList from './src/components/TaskList';

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

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
            padding: 10
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between'
            }}>
            <Text style={styles.titleText}>Tasks</Text>
            <Button type="solid" color="red" onPress={cleanTasks}>
              <Icon name="trash" size={20} color="white" />
              <Text style={styles.buttonText}>Clean</Text>
            </Button>
          </View>
          <Text style={styles.italic}>{yourTasks.filter((task) => !task.completed).length} items left</Text>
          <TaskList tasks={yourTasks} onChangeTask={handleToggleTask} />
        </View>
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
