import { View, Text } from 'react-native';

import { TaskDetailProps } from '../../App';

import { useYourTasks } from './YourTasksContext';

export default function TaskDetail({ route }: TaskDetailProps): React.JSX.Element {
    const { yourTasks } = useYourTasks()

    return (
        <View>
            <Text>{yourTasks[route.params.taskId].detail}</Text>
        </View>
    )
}