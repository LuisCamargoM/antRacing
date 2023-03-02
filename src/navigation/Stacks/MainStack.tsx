import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { Touchable, TouchableOpacity, View } from 'react-native';
import AntText from '../../components/AntText';
import BackIcon from '../../components/Icons/BackIcon';
import { useFetchContext } from '../../hooks/useFetchContext';
import Statistics from '../../screens/StatisticScreen/Statistics';


const Main = createNativeStackNavigator();


export const MainStack = (): JSX.Element => {
    const { restartProcess } = useFetchContext();
    const handleBack = async () => {
        restartProcess();
    }
    return (
        <Main.Navigator initialRouteName='MainStack'>
            <Main.Screen
                name="StatisticScreen"
                component={Statistics}
                options={{
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTitle: (): JSX.Element => <AntText label='Ant Racing Statistics' />,
                    headerLeft: (): JSX.Element => {
                        return <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', width: 20, height: 20 }} onPress={async (): Promise<void> => handleBack()}>
                            <BackIcon />
                        </TouchableOpacity>
                    },
                }}
            />
        </Main.Navigator >
    )
}