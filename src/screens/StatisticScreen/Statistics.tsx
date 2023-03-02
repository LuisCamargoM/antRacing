import React from 'react';
import { StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import AntText from '../../components/AntText';
import { selectDataStatusMessage } from '../../store/slices/antsSlice';
import ItemsList from './components/ItemsList/ItemsList';
import { Container, ListContainer, StatusDataView } from './styles';

const Statistics: React.FC = () => {
    const { lighterText } = styles;
    const message = useSelector(selectDataStatusMessage); //'Not Finished yet!'

    return (
        <Container>
            <StatusDataView>
                <AntText label='Calculation Status' style={lighterText} />
                <AntText label={message} style={{ textTransform: "capitalize" }} />
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
