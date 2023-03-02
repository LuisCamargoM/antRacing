import { useQuery } from '@apollo/client';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import AntButton from '../../components/AntButton';
import AntImage from '../../components/AntImage';
import AntText from '../../components/AntText';
import { GET_ANTS } from '../../graphql/queries';
import { useFetchContext } from '../../hooks/useFetchContext';
import { useScreenSize } from '../../hooks/useScreenSize';
import { Container } from '../StatisticScreen/styles';

// import { Container } from './styles';

const InitialScreen: React.FC = () => {
    const { buttonStyle, textButtonStyle } = styles;
    const { width, scale } = useScreenSize();

    const [loading, setLoading] = React.useState<boolean>(false);
    const { data } = useQuery(GET_ANTS);
    const { fetchData } = useFetchContext();
    const handlePress = (): void => {
        setLoading(true);
        fetchData().then(() => {
            setLoading(false);
        });
    }

    React.useEffect(() => {

    }, [])

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                <AntImage
                    style={{ width: width / scale, height: width / scale, opacity: loading ? 0.5 : 1 }}
                    path={require('../../../assets/images/ant_head.png')}
                />
                {loading && <AntText label='Loading' style={{ marginTop: 20, textTransform: 'capitalize' }} />}
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