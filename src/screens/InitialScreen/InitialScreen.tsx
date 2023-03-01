import React from 'react';
import { Text, View } from 'react-native';

// import { Container } from './styles';

const InitialScreen: React.FC = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{color:'#fff'}}>InitialScreen</Text>
        </View>
    );
}

export default InitialScreen;