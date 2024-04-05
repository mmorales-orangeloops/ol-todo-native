import { PropsWithChildren, useState } from 'react';

import { View, TextInput } from 'react-native';

import { Button } from '@rneui/themed';

import Icon from 'react-native-vector-icons/Ionicons';

type AddTaskProps = PropsWithChildren<{
    onAddTask: (taskName: string) => void
}>;

export default function Addtask(props: AddTaskProps): React.JSX.Element {
    const [text, setText] = useState('');

    return (
        <View
            style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                gap: 15
            }}>
            <TextInput
                style={{ flexGrow: 1, height: 40, borderColor: 'lightgray', borderWidth: 1, borderRadius: 5 }}
                placeholder='Type here to add a new task!'
                onChangeText={newText => setText(newText)}
                defaultValue={text}
            />
            <Button type='solid' color='orange' onPress={() => {
                setText('');
                props.onAddTask(text)
            }}>
                <Icon name='add-outline' size={20} color='white' />
            </Button>
        </View>
    )
}