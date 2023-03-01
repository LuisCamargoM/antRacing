import React from 'react';
import { ImageStyle, StyleProp, Text, TextProps, View } from 'react-native';

// import { Container } from './styles';


export interface AntTextInterface {
    label: string,
    style: StyleProp<ImageStyle>,
}

const AntText = ({ label, style, ...props }: TextProps & AntTextInterface): JSX.Element => {
    return (
        <View>
            <Text style={[style]}>{label}</Text>
        </View>
    );
}

export default AntText;