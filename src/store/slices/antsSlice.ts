import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

export interface AntState {
    name: string,
    length: number,
    weight: number,
    image?: ImageSourcePropType,
    color: string,
    likelihoodOfAntWinning?: number,
    statusFetched?: string,
    __typename?: string
}
interface InitialState {
    ants: AntState[],
    inProgress: boolean,
    completed: boolean,
    status: string
}

interface AntsSlice {
    antsData: InitialState
}



const initialState = {
    ants: {},
    inProgress: false,
    completed: false,
    status: 'Not initiate'
}

const antsSlice = createSlice({
    name: 'antsData',
    initialState,
    reducers: {
        setAntsInfo: (state, action) => {
            state.ants = action.payload;
        },
        setDataInProgress: (state) => {
            state.inProgress = true;
            state.status = 'Calculating ....'
        },
        setDataCompleted: (state) => {
            state.completed = true;
            state.inProgress = false;
            state.status = 'Calculation Finished!'
        },
        setDataStatus: (state, action) => {
            state.status = action.payload.message;
        },
    }
});

export const { setAntsInfo, setDataInProgress, setDataCompleted, setDataStatus } = antsSlice.actions;

export const selectAnts = (state: AntsSlice) => state.antsData.ants;
export const selectInProgressStatus = (state: AntsSlice) => state.antsData.inProgress;
export const selectCompletedStatus = (state: AntsSlice) => state.antsData.completed;
export const selectDataStatusMessage = (state: AntsSlice) => state.antsData.status;

export default antsSlice.reducer;