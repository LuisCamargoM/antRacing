import React from 'react';
import { FlatList, Text, View } from 'react-native';
import AntText from '../../components/AntText';
import { useScreenSize } from '../../hooks/useScreenSize';
import ItemsList from './components/ItemsList/ItemsList';
import { Container } from './styles';

const Statistics: React.FC = () => {
    const { width } = useScreenSize();
    return (
        <Container>
            <View style={{ marginTop: 10, paddingHorizontal: 15, width, flexDirection: 'row', justifyContent: 'space-between' }}>
                <AntText label='Calculation Status' style={{ textTransform: 'capitalize', fontWeight: '200' }} />
                <AntText label='Not Finished yet!' />
            </View>
            <View style={{ flex: 1, paddingHorizontal: 15, width, flexDirection: 'row', justifyContent: 'space-between' }}>
                <ItemsList />
            </View>
        </Container>
    );
}

export default Statistics;