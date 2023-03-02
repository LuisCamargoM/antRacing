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
import { useSelector } from 'react-redux';
import { AntState, selectAnts } from '../../../../store/slices/antsSlice';

const { width, scale } = useScreenSize();

const ItemsList: React.FC = () => {
    const [antsData, setAntsData] = React.useState<AntState[]>();
    const [loading, setLoading] = React.useState<boolean>(false);

    const ants = useSelector(selectAnts);
    interface Item {
        item: AntState,
        index: number
    }

    const Item = ({ item, index }: Item) => {
        const { itemView, itemFirstColumn, itemImageLabel, itemImageView, } = styles;
        console.log(JSON.stringify(item, null, 2))
        return (
            <View key={index} style={itemView}>
                <View style={itemFirstColumn}>
                    <AntImage path={item?.image} style={itemImageView} />
                    <AntText label={item?.statusFetched} style={itemImageLabel} />
                </View>
                <View>
                    <ProgressBarItem name={item?.name} timeValue={item?.likelihoodOfAntWinng} colorItem={item?.color} />
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
        if (a.likelihoodOfAntWinng > b.likelihoodOfAntWinng) return 1;
        if (b.likelihoodOfAntWinng > a.likelihoodOfAntWinng) return -1;

        return 0;
    }

    React.useEffect
        (() => {
            if (ants.length) {
                let ascending = ants.slice().sort(compare);
                setAntsData(ascending)
            }
        }, [ants]);

    return (
        <ContainerItemList>
            {loading ?
                <ActivityIndicator size={'large'} />
                :
                antsData && antsData?.length ? (<FlatList
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
