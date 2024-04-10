import { PropsWithChildren } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Button } from '@rneui/themed';

import Icon from 'react-native-vector-icons/Ionicons';

import { Task } from '../data/Data';

type TaskListHeaderProps = PropsWithChildren<{
    tasks: Task[];
    onCleanTasks: () => void
}>;

export default function TaskListHeader(props: TaskListHeaderProps): React.JSX.Element {
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                <Text style={styles.titleText}>Tasks</Text>
                <Button type='solid' color='red' onPress={props.onCleanTasks}>
                    <Icon name='trash' size={20} color='white' />
                    <Text style={styles.buttonText}>Clean</Text>
                </Button>
            </View>
            <Text style={styles.italic}>{props.tasks.filter((task) => !task.completed).length} items left</Text>
        </View>
    )
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