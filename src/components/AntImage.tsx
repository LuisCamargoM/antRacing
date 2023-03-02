import React from 'react';
import { Image, ImageProps, ImageSourcePropType, ImageStyle, View } from 'react-native';

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