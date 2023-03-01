import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext } from 'react';
import { Alert } from 'react-native';
import { apiService } from '../services/apiService';

export interface FetchContextInterface {
    wasFetched: boolean | undefined,
    dataFetched: () => Promise<void> | undefined
}

export const FetchContext = createContext<FetchContextInterface>({} as FetchContextInterface);

export const FetchProvider: React.FC = ({ children }) => {
    const [wasFetched, setWasFetched] = React.useState<boolean>();

    const loadFromStorage = async () => {
        const fetched = await AsyncStorage.getItem('@wasFetched');
        if (fetched) setWasFetched(JSON.parse(fetched));
    }

    const dataFetched = async (): Promise<void> => {
        try {
            const hehe = await apiService.fetchData();
            Alert.alert(JSON.stringify(hehe));
        } catch (error) {
            Alert.alert(JSON.stringify(error));
        }
    }

    React.useEffect(() => {
        loadFromStorage();
    }, [])

    return (
        <FetchContext.Provider value={{ wasFetched, dataFetched }}>
            {children}
        </FetchContext.Provider>
    )

}