import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { createContext } from 'react';

interface FetchContextInterface {
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
    }, [])

    return (
        <FetchContext.Provider value={{ wasFetched }}>
            {children}
        </FetchContext.Provider>
    )

}