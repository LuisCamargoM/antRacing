import React from 'react';
import { ImageStyle, StyleProp, Text, TextProps, TextStyle, View } from 'react-native';

// import { Container } from './styles';


export interface AntTextInterface {
    label: string,
    style?: StyleProp<TextStyle>,
}

const AntText = ({ label, style, ...props }: TextProps & AntTextInterface): JSX.Element => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
             <Text style={[{ fontWeight: 'bold', textTransform: 'uppercase' }, style]}>{label}</Text>
        </View>
    );
}

export default AntText;