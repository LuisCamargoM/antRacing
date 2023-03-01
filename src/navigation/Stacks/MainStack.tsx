import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { View } from 'react-native';
import Statistics from '../../screens/StatisticScreen/Statistics';


const Main = createNativeStackNavigator();


export const MainStack = (): JSX.Element => {
    return (
        <Main.Navigator>
            <Main.Screen name="StatisticScreen" component={Statistics} />
        </Main.Navigator>
    )
}