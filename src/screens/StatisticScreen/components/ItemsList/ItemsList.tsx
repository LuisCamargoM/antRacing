import React from 'react';
import { ActivityIndicator, Alert, FlatList, StyleSheet, Text, View } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_ANTS } from '../../../../graphql/queries';
import AntButton from '../../../../components/AntButton';
import AntImage from '../../../../components/AntImage';
import AntText from '../../../../components/AntText';
import { useScreenSize } from '../../../../hooks/useScreenSize';
import { Ant, statisticInfo } from '../../../../utils/mockeData';
import { ContainerItemList } from './styles';
import ProgressBarItem from '../ProgressBarItem/ProgressBarItem';

const { width, scale } = useScreenSize();

const ItemsList: React.FC = () => {
    const { data, loading } = useQuery(GET_ANTS);
    const [antsData, setAntsData] = React.useState();
    interface Item {
        item: Ant,
        index: number
    }

    const Item = ({ item, index }: Item) => {
        const { itemView, itemFirstColumn, itemImageLabel, itemImageView, } = styles;
        return (
            <View key={index} style={itemView}>
                <View style={itemFirstColumn}>
                    <AntImage path={statisticInfo[index].image} style={itemImageView} />
                    <AntText label={`status ...`} style={itemImageLabel} />
                </View>
                <View>
                    <ProgressBarItem name={item.name} timeValue={item.length} colorItem={statisticInfo[index].color} />
                </View>
            </View>
        )
    }
    const Footer = () => {
        const { footerView, buttonStyle, textButtonStyle } = styles;
        return (
            <View style={footerView}>
                <AntButton
                    onPress={() => Alert.alert('Start racing')}
                    label='Start Racing'
                    styleLabel={textButtonStyle}
                    styleButton={buttonStyle} />
            </View>
        )
    }

    function compare(a, b) {
        if (a.length > b.length) return 1;
        if (b.length > a.length) return -1;

        return 0;
    }
    React.useEffect(() => {
        if (data) {
            const { ants } = data;
            var ascending = ants.slice().sort(compare);
            console.log(ascending)
            setAntsData(ascending);
        }
    }, [data]);


    return (
        <ContainerItemList>
            {loading ?
                <ActivityIndicator size={'large'} />
                :
                antsData ? (<FlatList
                    keyExtractor={(item) => item.name}
                    data={antsData}
                    renderItem={Item}
                    ListFooterComponent={Footer}
                />) : (<AntText label='Empty data' />)
            }
        </ContainerItemList>
    );
}


const styles = StyleSheet.create({
    itemView: { flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center', paddingHorizontal: 10 },
    itemFirstColumn: { marginVertical: 20 },
    itemImageView: { width: width / (scale * 1.8), height: width / (scale * 1.8) },
    itemImageLabel: { color: '#A8A8A8', fontSize: 10, fontWeight: 'bold', textTransform: 'capitalize', },

    buttonStyle: { height: 40, backgroundColor: '#000', width: '80%', borderRadius: 10 },
    textButtonStyle: { color: '#fff' },
    footerView: { justifyContent: 'center', alignItems: 'center', marginTop: 20 },
})

export default ItemsList;
