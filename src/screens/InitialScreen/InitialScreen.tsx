import { useQuery } from '@apollo/client';
import React from 'react';
import { Animated, StyleSheet, View } from 'react-native';
import { useDispatch } from 'react-redux';
import AntButton from '../../components/AntButton';
import AntImage from '../../components/AntImage';
import AntText from '../../components/AntText';
import { GET_ANTS } from '../../graphql/queries';
import { useFetchContext } from '../../hooks/useFetchContext';
import { useScreenSize } from '../../hooks/useScreenSize';
import { modelService } from '../../services/modelService';
import { setAntsInfo } from '../../store/slices/antsSlice';
import { Container } from '../StatisticScreen/styles';

const { width, scale } = useScreenSize();

const InitialScreen: React.FC = () => {
    const { buttonStyle, textButtonStyle, imageContainer, imageView, loadingText } = styles;
    const { fetchData } = useFetchContext();
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState<boolean>(false);
    const { data } = useQuery(GET_ANTS);

    const handlePress = async (): Promise<void> => {
        setLoading(true);
        // console.log(data);
        await fetchData().then(() => {
            setLoading(false);
            const newAnts = modelService.formatData(data.ants);
            dispatch(setAntsInfo(newAnts));
            // console.log(JSON.stringify(, null, 2));
        });
    }


    return (
        <Container>
            <View style={imageContainer}>
                <AntImage
                    style={[imageView, { opacity: loading ? 0.5 : 1 }]}
                    path={require('../../../assets/images/ant_head.png')}
                />
                {loading && <AntText label={``} style={loadingText} loading={loading} />}
            </View>
            <AntButton
                loading={loading}
                label='Get Ant Data'
                onPress={handlePress}
                styleLabel={textButtonStyle}
                styleButton={buttonStyle}
            />
        </Container>
    );
}

const styles = StyleSheet.create({
    imageContainer: { flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' },
    imageView: { width: width / scale, height: width / scale },
    loadingText: { marginTop: 20, textTransform: 'capitalize' },
    buttonStyle: {
        width: '80%',
        height: 50,
        marginBottom: 50,
        backgroundColor: '#000',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textButtonStyle: {
        color: '#fff',
        fontWeight: 'bold'
    }
})

export default InitialScreen;
