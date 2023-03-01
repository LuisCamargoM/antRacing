import { useQuery } from '@apollo/client';
import React, { useContext, useEffect } from 'react';
import { Alert, FlatList, Text, View } from 'react-native';
import AntButton from '../../../../components/AntButton';
import AntImage from '../../../../components/AntImage';
import AntText from '../../../../components/AntText';
import { GET_ANTS } from '../../../../graphql/queries';
import { QueryAnts } from '../../../../graphql/queriesInterface';
import { useFetchContext } from '../../../../hooks/useFetchContext';
import { useScreenSize } from '../../../../hooks/useScreenSize';
import { addImages } from '../../../../utils';
import { Ants, ants } from '../../../../utils/mockeData';

const ItemsList: React.FC = () => {
    const { data, loading } = useQuery(GET_ANTS);
    const [antsData, setAntsData] = React.useState();


    const images = [
        {
            image: require('../../../../../assets/images/0_ant.png')
        },
        {
            image: require('../../../../../assets/images/1_ant.png')
        },
        {
            image: require('../../../../../assets/images/2_ant.png')
        },
        {
            image: require('../../../../../assets/images/3_ant.png')
        },
        {
            image: require('../../../../../assets/images/4_ant.png')
        },

    ]

    React.useEffect(() => {
        if (data) {
            const { ants } = data;
            if (ants) setAntsData(ants);
            console.log(antsData);
        }
    }, [data]);

    const Item = ({ item, index }) => {
        const { width, scale } = useScreenSize();
        return (
            <View style={{ backgroundColor: 'red', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
                <View style={{ marginVertical: 20 }}>
                    <AntImage path={images[index].image} style={{ width: width / (scale * 1.8), height: width / (scale * 1.8) }} />
                    <AntText label={`status ...`} style={{ color: '#A8A8A8', fontSize: 10, fontWeight: 'bold', textTransform: 'capitalize' }} />
                </View>
            </View>
        )
    }
    const Footer = () => {
        return (
            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                <AntButton
                    onPress={() => Alert.alert('Start racing')}
                    label='Start Racing'
                    styleLabel={{ color: '#fff' }}
                    styleButton={{ height: 40, backgroundColor: '#000', width: '80%' }} />
            </View>
        )
    }
    return (
        <View style={{ width: '100%', marginTop: 10, justifyContent: 'center' }}>
            <FlatList data={antsData} renderItem={Item} ListFooterComponent={Footer} />
        </View>
    );
}

export default ItemsList;