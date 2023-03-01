import { useQuery } from '@apollo/client';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext } from 'react';
import { Alert } from 'react-native';
import { GET_ANTS } from '../graphql/queries';
import { apiService } from '../services/apiService';
import { Ants, ants } from '../utils/mockeData';

export interface FetchContextInterface {
    wasFetched: boolean | undefined,
}

export const FetchContext = createContext<FetchContextInterface>({} as FetchContextInterface);

export const FetchProvider: React.FC = ({ children }) => {
    const [wasFetched, setWasFetched] = React.useState<boolean>();

    const loadFromStorage = async () => {
        const fetched = await AsyncStorage.getItem('@wasFetched');
        if (fetched) setWasFetched(JSON.parse(fetched));
    }


    React.useEffect(() => {
        loadFromStorage();
        Alert.alert('loading')
    }, [])

    return (
        <FetchContext.Provider value={{ wasFetched }}>
            {children}
        </FetchContext.Provider>
    )

}