import React from 'react';
import { Image, ImageSourcePropType, ImageStyle, StyleProp, View } from 'react-native';

// import { Container } from './styles';

export interface AntImageInterface {
    path: ImageSourcePropType,
    style: StyleProp<ImageStyle>,
}

const AntImage = ({ path, style }: AntImageInterface): JSX.Element => {
    return (
        <View>
            <Image source={path} style={[style]} />;
        </View>
    )
}

export default AntImage;