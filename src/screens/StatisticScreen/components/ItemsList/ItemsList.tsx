import React from 'react';
import { ActivityIndicator, FlatList, StyleSheet, View } from 'react-native';

import { compare } from '../../../../utils/utils';
import AntButton from '../../../../components/AntButton';
import AntImage from '../../../../components/AntImage';
import AntText from '../../../../components/AntText';

import { useScreenSize } from '../../../../hooks/useScreenSize';
import { ContainerItemList } from './styles';

import { useDispatch, useSelector } from 'react-redux';
import { AntState, selectAnts, selectCompletedStatus, selectInProgressStatus, setAntsInfo, setDataCompleted, setDataInProgress } from '../../../../store/slices/antsSlice';

import ProgressBarItem from '../ProgressBarItem/ProgressBarItem';
import { modelService } from '../../../../services/modelService';

const { width, scale } = useScreenSize();

const ItemsList: React.FC = () => {
    const [antsData, setAntsData] = React.useState<AntState[]>();
    const [loading, setLoading] = React.useState<boolean>(false);

    const dispatch = useDispatch();
    const ants = useSelector(selectAnts);
    const inProgress = useSelector(selectInProgressStatus);
    const completed = useSelector(selectCompletedStatus);

    interface Item {
        item: AntState,
        index: number
    }

    const isCalculating = (): boolean => inProgress && !completed;

    const calculateOdds = (actualState: AntState[]) => {
        actualState.map((ant: AntState, i: number) => {
            actualState[i].statusFetched = 'Calculating...';
            dispatch(setAntsInfo(actualState));
            const responseCallback = (likelihoodOfAntWinning: number) => {
                actualState[i].likelihoodOfAntWinning = likelihoodOfAntWinning;
                actualState[i].statusFetched = 'Calculated';
                dispatch(setAntsInfo(actualState))
                setAntsData(actualState)
            };
            modelService.getAntWinLikelihoood()(responseCallback);
        })
    }

    const startCalculation = async () => {
        dispatch(setDataInProgress())
        calculateOdds(ants);
        dispatch(setDataCompleted())
    }
    const handleRace = async () => {
        await startCalculation().then(() => {
            dispatch(setDataCompleted)
        })

    };

    const Item = ({ item, index }: Item) => {
        const { itemView, itemFirstColumn, itemImageLabel, itemImageView, } = styles;
        return (
            <View key={index} style={itemView}>
                <View style={itemFirstColumn}>
                    <AntImage path={item?.image} style={itemImageView} />
                    <AntText label={item?.statusFetched} style={itemImageLabel} />
                </View>
                <View>
                    <ProgressBarItem name={item?.name} timeValue={item?.likelihoodOfAntWinning} colorItem={item?.color} />
                </View>
            </View>
        )
    }

    const Footer = () => {
        const { footerView, buttonStyle, textButtonStyle } = styles;
        return (
            <View style={footerView}>
                <AntButton
                    onPress={handleRace}
                    label={isCalculating() ? 'Running' : 'START RACING'}
                    styleLabel={textButtonStyle}
                    styleButton={buttonStyle}
                    loading={isCalculating()}
                />
            </View>
        )
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
                antsData && antsData?.length ?
                    (
                        <FlatList
                            keyExtractor={(item) => item.name}
                            data={antsData}
                            renderItem={Item}
                            ListFooterComponent={Footer}
                        />
                    ) : (
                        <AntText label='Empty data' />
                    )
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
