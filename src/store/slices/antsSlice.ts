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
    counter: number,
    status: string
}

interface AntsSlice {
    antsData: InitialState
}



const initialState = {
    ants: {},
    inProgress: false,
    completed: false,
    counter: 0,
    status: 'Not yet run!'
}

const antsSlice = createSlice({
    name: 'antsData',
    initialState,
    reducers: {
        setAntsInfo: (state, action) => {
            state.ants = action.payload;
            if (state.counter === 4) {
                state.completed = true;
                state.inProgress = false;
                state.status = 'All Calculated!'
            } else {
                if (state.counter !== 0 && state.counter < 5) {
                    state.inProgress = true;
                    state.completed = false;
                    state.status = 'In Progress ....'
                }
            }
        },
        setDataInProgress: (state) => {
            state.inProgress = true;
            state.status = 'In Progress ....'
        },
        setDataCompleted: (state) => {
            state.completed = true;
            state.inProgress = false;
            state.status = 'All Calculated!'
        },
        setDataStatus: (state, action) => {
            state.status = action.payload.message;
        },
        setCounterIncrement: (state, action) => {
            state.counter = action.payload.counter;
        },
    }
});

export const { setAntsInfo, setDataInProgress, setDataCompleted, setDataStatus, setCounterIncrement } = antsSlice.actions;

export const selectAnts = (state: AntsSlice) => state.antsData.ants;
export const selectInProgressStatus = (state: AntsSlice) => state.antsData.inProgress;
export const selectCompletedStatus = (state: AntsSlice) => state.antsData.completed;
export const selectDataStatusMessage = (state: AntsSlice) => state.antsData.status;
export const selectCounter = (state: AntsSlice) => state.antsData.counter;

export default antsSlice.reducer;