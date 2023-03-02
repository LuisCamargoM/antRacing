import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFetchContext } from '../../hooks/useFetchContext';
import AntText from '../../components/AntText';
import BackIcon from '../../components/Icons/BackIcon';
import Statistics from '../../screens/StatisticScreen/Statistics';

const Main = createNativeStackNavigator();

export const MainStack = (): JSX.Element => {
    const { restartProcess } = useFetchContext();
    const { headerLeftButton, headerStyle } = styles;

    return (
        <Main.Navigator initialRouteName='MainStack'>
            <Main.Screen
                name="StatisticScreen"
                component={Statistics}
                options={{
                    headerStyle,
                    headerTitle: (): JSX.Element => <AntText label='Ant Racing Statistics' />,
                    headerLeft: (): JSX.Element => {
                        return <TouchableOpacity style={headerLeftButton} onPress={async (): Promise<void> => restartProcess()}>
                            <BackIcon />
                        </TouchableOpacity>
                    },
                }}
            />
        </Main.Navigator >
    )
}

const styles = StyleSheet.create({
    headerLeftButton: { justifyContent: 'center', alignItems: 'center', width: 20, height: 20 },
    headerStyle: { backgroundColor: 'transparent' }
})