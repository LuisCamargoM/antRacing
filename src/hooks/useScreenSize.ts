import React from 'react';
import { Dimensions } from 'react-native';


export const useScreenSize = () => {
    const { width, scale } = Dimensions.get('window');
    return { width, scale };
}

