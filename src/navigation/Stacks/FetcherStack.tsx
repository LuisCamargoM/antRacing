import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import AntText from '../../components/AntText';
import InitialScreen from '../../screens/InitialScreen/InitialScreen';

const Fetcher = createNativeStackNavigator();


export const FetcherStack = (): JSX.Element => {    
    return (
        <Fetcher.Navigator initialRouteName='FetcherStack0'>
            <Fetcher.Screen
                name="InitialScreen"
                component={InitialScreen}
                options={{
                    headerStyle: { backgroundColor: 'transparent' },
                    headerTitle: (): JSX.Element => <AntText label='Ant Racing' />
                }}
            />
        </Fetcher.Navigator>
    )
}