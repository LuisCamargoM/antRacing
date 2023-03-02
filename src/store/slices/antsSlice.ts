import AsyncStorage from "@react-native-async-storage/async-storage";
import { createSlice } from "@reduxjs/toolkit";
import { ImageSourcePropType } from "react-native";

export interface AntState {
    name: string,
    length: number,
    weight: number,
    image?: ImageSourcePropType,
    color: string,
    likelihoodOfAntWinng?: number,
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
            // console.log(JSON.stringify(action, null, 2))
            state.ants = action.payload;
            // console.log(JSON.stringify(state, null, 2))
        },
        setDataInProgress: (state, action) => {
            state.inProgress = action.payload.inProgress;
        },
        setDataCompleted: (state, action) => {
            state.completed = action.payload.completed;
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