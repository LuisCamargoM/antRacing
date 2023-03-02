import React from 'react';
import { Image, ImageProps, ImageSourcePropType, ImageStyle, StyleProp, View } from 'react-native';

// import { Container } from './styles';

export interface AntImageInterface {
    path: ImageSourcePropType | undefined,
    style: ImageStyle,
}

const AntImage = ({ path, style }: AntImageInterface & ImageProps): JSX.Element => {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            <Image source={path} style={style} />
        </View>
    )
}

export default AntImage;