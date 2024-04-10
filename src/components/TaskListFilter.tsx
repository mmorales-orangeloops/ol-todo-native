import { PropsWithChildren } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import { Button } from '@rneui/themed';

import { TasksFilter } from '../utils/Types';

type TaskListFilterProps = PropsWithChildren<{
    currentFilter: TasksFilter;
    onSelectFilter: (filter: TasksFilter) => void
}>;

type FilterButtonProps = PropsWithChildren<{
    type: TasksFilter;
    currentFilter: TasksFilter;
    onPress: () => void
}>;

export default function TaskListFilter(props: TaskListFilterProps): React.JSX.Element {
    return (
        <View
            style={{
                paddingBottom: 15,
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 15
            }}>
            <FilterTaskButton
                type={TasksFilter.All}
                currentFilter={props.currentFilter}
                onPress={() => {
                    props.onSelectFilter(TasksFilter.All)
                }} />
            <FilterTaskButton
                type={TasksFilter.Active}
                currentFilter={props.currentFilter}
                onPress={() => {
                    props.onSelectFilter(TasksFilter.Active)
                }} />
            <FilterTaskButton
                type={TasksFilter.Completed}
                currentFilter={props.currentFilter}
                onPress={() => {
                    props.onSelectFilter(TasksFilter.Completed)
                }} />
        </View>
    )
}

const FilterTaskButton = (props: FilterButtonProps) => (
    <Button
        onPress={props.onPress}
        buttonStyle={props.type === props.currentFilter ? styles.selectedButtonContainer : styles.unselectedButtonContainer}>
        <Text style={props.type === props.currentFilter ? styles.selectedButtonText : styles.unselectedButtonText}>
            {props.type}
        </Text>
    </Button>
);

const styles = StyleSheet.create({
    selectedButtonContainer: {
        backgroundColor: 'orange'
    },
    selectedButtonText: {
        color: 'white'
    },
    unselectedButtonContainer: {
        backgroundColor: undefined
    },
    unselectedButtonText: {
        color: 'black'
    }
});