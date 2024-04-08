import { PropsWithChildren } from 'react';

import { View } from 'react-native';

import { ListItem } from '@rneui/themed';

import { Task } from '../data/Data';

type TaskListProps = PropsWithChildren<{
    tasks: Task[];
    onChangeTask: (taskId: number) => void
    onSelectTask: (taskId: number) => void
}>;

export default function TaskList(props: TaskListProps): React.JSX.Element {
    return (
        <View>
            {props.tasks.map((task, i) => (
                <ListItem key={i} onPress={() => props.onSelectTask(task.id)} bottomDivider>
                    <ListItem.CheckBox
                        iconType="material"
                        checkedColor='orange'
                        uncheckedColor='orange'
                        checkedIcon="check-circle-outline"
                        uncheckedIcon="radio-button-unchecked"
                        checked={task.completed}
                        onPress={() => props.onChangeTask(task.id)}
                    />
                    <ListItem.Content>
                        <ListItem.Title
                            style={{ textDecorationLine: task.completed ? 'line-through' : 'none' }}>
                            {task.name}
                        </ListItem.Title>
                    </ListItem.Content>
                    <ListItem.Chevron />
                </ListItem>))
            }
        </View>
    )
}