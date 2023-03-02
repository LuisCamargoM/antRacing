import React from 'react';
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AntText from '../../../../components/AntText';
import { useScreenSize } from '../../../../hooks/useScreenSize';
import { ContainerProgressBarItem } from './styles';

const { width, scale } = useScreenSize();

interface ProgressItem {
    colorItem: string,
    timeValue: number
}
const ProgressBarItem = ({ colorItem, timeValue }: ProgressItem): JSX.Element => {
    const [progress, setProgress] = React.useState(0);
    const progressAnim = React.useRef(new Animated.Value(0)).current;
    const { progressContainer, progressView, progressText } = styles;
    const animateProgress = () => {
        Animated.spring(progressAnim, {
            toValue: progress,
            bounciness: 10,
            speed: 2,
            useNativeDriver: false,
        }).start();
    }

    React.useEffect(() => {
        animateProgress();
        setProgress((timeValue * 100))
        return () => { };
    }, [progress])

    return (
        <ContainerProgressBarItem>
            <View style={progressContainer}>
                <AntText label={`${timeValue} s`} style={progressText} />
                <View style={progressView}>
                    <Animated.View
                        style={[
                            styles.progress,
                            { backgroundColor: colorItem },
                            {
                                width: progressAnim.interpolate({
                                    inputRange: [0, 100],
                                    outputRange: ['0%', `100%`],
                                }),
                            },
                        ]}
                    />
                </View>
            </View>
        </ContainerProgressBarItem >
    );
}


const styles = StyleSheet.create({
    progressContainer: { width: width / 1.5, flexDirection: 'column', justifyContent: 'center' },
    progressText: { alignSelf: 'flex-end', marginRight: 10, textTransform: 'lowercase' },
    progressView: { flex: 1, height: 20, justifyContent: 'center', backgroundColor: 'white', borderRadius: 10, borderWidth: 1, borderColor: '#000' },
    progress: { marginLeft: 2, height: 15, borderRadius: 10, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }

})

export default ProgressBarItem;
