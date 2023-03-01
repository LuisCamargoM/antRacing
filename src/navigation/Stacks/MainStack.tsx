import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AntText from '../../components/AntText';
import Statistics from '../../screens/StatisticScreen/Statistics';


const Main = createNativeStackNavigator();


export const MainStack = (): JSX.Element => {
    return (
        <Main.Navigator>
            <Main.Screen
                name="StatisticScreen"
                component={Statistics}
                options={{
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTitle: (): JSX.Element => <AntText label='Ant Racing Statistics' />
                }}
            />
        </Main.Navigator>
    )
}