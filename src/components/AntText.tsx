import React from 'react';
import { Animated, ImageStyle, StyleProp, StyleSheet, Text, TextProps, TextStyle, View } from 'react-native';

// import { Container } from './styles';


export interface AntTextInterface {
    label: string,
    style?: StyleProp<TextStyle>,
    loading?: boolean
}

const AntText = ({ label, style, loading, ...props }: TextProps & AntTextInterface): JSX.Element => {
    const { loadingViewStyle, textStyle, textView } = styles;
    const LoadingDots = (): JSX.Element[] => {
        const dotCount = React.useRef(new Animated.Value(0)).current;

        React.useEffect(() => {
            const intervalId = setInterval(() => {
                Animated.timing(dotCount, {
                    toValue: 3,
                    duration: 700,
                    useNativeDriver: true
                }).start(() => {
                    Animated.timing(dotCount, {
                        toValue: 0,
                        duration: 700,
                        useNativeDriver: true
                    }).start();
                })
            }, 1500)

            return () => clearInterval(intervalId);
        }, [])

        const Dots = [0, 1, 2].map((i) => {
            const opacity = dotCount.interpolate({
                inputRange: [0, 1, 2],
                outputRange: [0.2, 1, 0.2],
                extrapolate: 'clamp'
            });

            return (
                <Animated.Text key={i} style={{ color: '#000', fontSize: 50, opacity, marginHorizontal: 2, }}>
                    .
                </Animated.Text>
            )
        })
        return Dots;
    }

    return (
        <View style={textView}>
            {loading ? <View style={loadingViewStyle}><LoadingDots /></View> : (
                <Text style={[textStyle, style]}>{label}</Text>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    textView: { justifyContent: 'center', alignItems: 'center' },
    loadingViewStyle: { padding: 0, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'flex-end' },
    textStyle: { fontWeight: 'bold', textTransform: 'uppercase' }
})

export default AntText;