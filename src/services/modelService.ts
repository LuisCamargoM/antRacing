import { useQuery } from '@apollo/client';
import axios, { AxiosRequestConfig } from 'axios';
import { GET_ANTS } from '../graphql/queries';
import { Ant, ants, Ants, statisticInfo } from '../utils/mockeData';
import merge from 'lodash';


const formatData = (ants: Ant[]) => {
    const newData = ants.map((ant, i) => {
        return {
            ...ant,
            image: statisticInfo[i].image,
            color: statisticInfo[i].color,
            likelihoodOfAntWinng: 0,
            statusFetched: 'not run yet!'
        }
    })

    return newData;
}

const calculateOdds = (actualState) => {
    let counterTemp = 0;
    let actualModel = actualState;
    Object.keys(actualModel).forEach((ant, i) => {
        const responseCallback = (likelihoodOfAntWinning: number) => {
            const newAnts = merge({}, actualModel);
            newAnts.ants[ant].likelihoodOfAntWinning = likelihoodOfAntWinning;
            counterTemp++;
            if (counterTemp === Object.keys(actualModel.ants).length) {
                newAnts.calculated = true;
            }
            actualModel = [...newAnts];
        };
        getAntWinLikelihoood()(responseCallback);
    })
}

const getAntWinLikelihoood = () => {
    let delay = 7000 * Math.random() + 7000;
    let likelihoodOfAnWinning = Math.random();
    return function (callback) {
        setTimeout(
            function () { callback(likelihoodOfAnWinning) }
            , delay);
    };
}

export const modelService = { formatData };