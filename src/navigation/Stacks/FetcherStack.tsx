import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import InitialScreen from '../../screens/InitialScreen/InitialScreen';

const Fetcher = createNativeStackNavigator();


export const FetcherStack = (): JSX.Element => {
    return (
        <Fetcher.Navigator>
            <Fetcher.Screen name="InitialScreen" component={InitialScreen} />
        </Fetcher.Navigator>
    )
}