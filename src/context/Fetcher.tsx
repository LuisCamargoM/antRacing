import { useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext } from 'react';
import { Alert } from 'react-native';
import { GET_ANTS } from '../graphql/queries';
import { apiService } from '../services/apiService';
import { Ants, ants } from '../utils/mockeData';

export interface FetchContextInterface {
    wasFetched: boolean | undefined,
    restartProcess: () => void;
    fetchData: () => Promise<void>;
}

export const FetchContext = createContext<FetchContextInterface>({} as FetchContextInterface);

export const FetchProvider: React.FC = ({ children }) => {
    const [wasFetched, setWasFetched] = React.useState<boolean>();

    const loadFromStorage = async (): Promise<void> => {
        const fetched = await AsyncStorage.getItem('@wasFetched');
        console.log(JSON.stringify(fetched))
        if (fetched) setWasFetched(JSON.parse(fetched));
    }

    const fetchData = async () => {
        await apiService.fetchData().then(async () => {
            await AsyncStorage.setItem('@wasFetched', JSON.stringify(true))
            setWasFetched(true);
        })
    }

    const restartProcess = async (): Promise<void> => {
        try {
            setTimeout(async () => {
                setWasFetched(false);
                await AsyncStorage.removeItem('@wasFetched');
            }, 200)
        } catch (error) {
            Alert.alert(JSON.stringify(error))
        }
    }

    React.useEffect(() => {
        loadFromStorage();
    }, [wasFetched])

    return (
        <FetchContext.Provider value={{ wasFetched, restartProcess, fetchData }}>
            {children}
        </FetchContext.Provider>
    )

}