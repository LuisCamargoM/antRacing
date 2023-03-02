import React from 'react';
import { Animated } from 'react-native';


const LoadingDots: React.FC = () => {
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
            <Animated.Text key={i} style={{ color: '#000', fontSize: 50, opacity, marginHorizontal: 5 }}>
                .
            </Animated.Text>
        )
    })
    return Dots;
}

export default LoadingDots;