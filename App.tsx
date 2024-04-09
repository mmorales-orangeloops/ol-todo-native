/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  View,
  useColorScheme,
} from 'react-native';

import { Colors } from 'react-native/Libraries/NewAppScreen';

import { YourTasksProvider, useYourTasks } from './src/components/YourTasksContext';

import TaskListHeader from './src/components/TaskListHeader';

import TaskList from './src/components/TaskList';

import AddTask from './src/components/AddTask';

import TaskDetail from './src/components/TaskDetail';

import { NavigationContainer, DefaultTheme } from '@react-navigation/native';

import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

type RootStackParamList = {
  Home: undefined;
  TaskDetail: { taskId: number };
};

type HomeProps = NativeStackScreenProps<RootStackParamList>;
export type TaskDetailProps = NativeStackScreenProps<RootStackParamList, 'TaskDetail'>;

const Stack = createNativeStackNavigator<RootStackParamList>();

function Home({ navigation }: HomeProps) {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const { yourTasks, setYourTasks } = useYourTasks()

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

  function handleSelectTask(taskId: number) {
    navigation.navigate('TaskDetail', {
      taskId: taskId
    });
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
        detail: 'Detail for ' + taskName,
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
          <TaskList tasks={yourTasks} onChangeTask={handleToggleTask} onSelectTask={handleSelectTask} />
        </View>
        <View style={{ flexGrow: 2 }} />
        <AddTask onAddTask={addTask} />
      </ScrollView>
    </SafeAreaView>
  );
}

function App(): React.JSX.Element {
  return (
    <YourTasksProvider>
      <NavigationContainer theme={NavigationTheme}>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="TaskDetail" component={TaskDetail} options={{ title: 'Task Detail' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </YourTasksProvider>
  );
}

const NavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: 'white'
  },
};

export default App;
