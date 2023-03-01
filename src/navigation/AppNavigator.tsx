import { NavigationContainer } from "@react-navigation/native";
import { View } from "react-native";
import { useFetchContext } from "../hooks/useFetchContext";
import { FetcherStack } from "./Stacks/FetcherStack";
import { MainStack } from "./Stacks/MainStack";

export const AppNavigator = () => {
    const { wasFetched } = useFetchContext();
    return (
        <NavigationContainer>
            {!wasFetched ? <FetcherStack /> : <MainStack />}
        </NavigationContainer>
    )
}