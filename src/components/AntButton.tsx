import React from 'react';
import { ActivityIndicator, ImageStyle, StyleProp, StyleSheet, TextStyle, TouchableOpacity, TouchableOpacityProps, View, ViewProps, ViewStyle } from 'react-native';
import AntText from './AntText';

// import { Container } from './styles';

export interface AntButtonInterface {
    label: string,
    loading?: boolean,
    styleButton: StyleProp<ViewStyle>,
    styleLabel: StyleProp<TextStyle>,
}

const AntButton = ({ loading, label, styleLabel, styleButton, ...props }: AntButtonInterface & TouchableOpacityProps): JSX.Element => {
    return (
        <TouchableOpacity disabled={loading} onPress={props.onPress} style={[{ justifyContent: 'center', alignItems: 'center' }, styleButton]}>
            {loading ? <ActivityIndicator size={'small'} color='white' />
                :
                <AntText label={label} style={styleLabel} />
            }
        </TouchableOpacity>
    )
}


export default AntButton;