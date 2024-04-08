import { useContext } from 'react';

import { View, Text } from 'react-native';

import { TaskDetailProps } from '../../App';

import { YourTasksContext } from '../hooks/YourTasksContext';

export default function TaskDetail({ route }: TaskDetailProps): React.JSX.Element {
    const { yourTasks } = useContext(YourTasksContext);

    return (
        <View>
            <Text>{yourTasks[route.params.taskId].detail}</Text>
        </View>
    )
}