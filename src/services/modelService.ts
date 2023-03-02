import { Ant, statisticInfo } from '../utils/mockeData';
const formatData = (ants: Ant[]) => {
    const newData = ants.map((ant, i) => {
        return {
            ...ant,
            image: statisticInfo[i].image,
            color: statisticInfo[i].color,
            likelihoodOfAntWinning: 0,
            statusFetched: 'not run yet!'
        }
    })

    return newData;
}


const getAntWinLikelihoood = () => {
    let delay = 7000 * Math.random() + 7000;
    let likelihoodOfAnWinning = Math.random();
    return function (callback) {
        setTimeout(function () { callback(likelihoodOfAnWinning); }, delay);
    };
}

export const modelService = { formatData, getAntWinLikelihoood };