import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import AntText from '../../components/AntText';
import InitialScreen from '../../screens/InitialScreen/InitialScreen';

const Fetcher = createNativeStackNavigator();


export const FetcherStack = (): JSX.Element => {
    const { headerStyle } = styles;
    return (
        <Fetcher.Navigator initialRouteName='FetcherStack0'>
            <Fetcher.Screen
                name="InitialScreen"
                component={InitialScreen}
                options={{
                    headerStyle,
                    headerTitle: (): JSX.Element => <AntText label='Ant Racing' />
                }}
            />
        </Fetcher.Navigator>
    )
}

const styles = StyleSheet.create({
    headerStyle: { backgroundColor: 'transparent' }
})