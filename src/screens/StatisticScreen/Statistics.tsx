import React from 'react';
import { StyleSheet } from 'react-native';
import AntText from '../../components/AntText';
import ItemsList from './components/ItemsList/ItemsList';
import { Container, ListContainer, StatusDataView } from './styles';

const Statistics: React.FC = () => {
    const { lighterText } = styles;
    return (
        <Container>
            <StatusDataView>
                <AntText label='Calculation Status' style={lighterText} />
                <AntText label='Not Finished yet!' />
            </StatusDataView>
            <ListContainer>
                <ItemsList />
            </ListContainer>
        </Container>
    );
}

const styles = StyleSheet.create({
    lighterText: { textTransform: 'capitalize', fontWeight: '300' }
});

export default Statistics;
