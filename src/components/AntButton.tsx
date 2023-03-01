import React from 'react';
import { ImageStyle, StyleProp, TouchableOpacity, TouchableOpacityProps, View } from 'react-native';
import AntText from './AntText';

// import { Container } from './styles';

export interface AntButtonInterface {
    label: string,
    style: StyleProp<ImageStyle>,
}

const AntButton = ({ label, style, ...props }: AntButtonInterface & TouchableOpacityProps): JSX.Element => {
    return (
        <View>
            <TouchableOpacity onPress={props.onPress}>
                <AntText />
            </TouchableOpacity>
        </View>
    )
}

export default AntButton;