import { ApolloProvider } from "@apollo/client";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { client } from "../context/ApolloProvider";
import { FetchProvider } from "../context/Fetcher";
import { useFetchContext } from "../hooks/useFetchContext";
import { FetcherStack } from "./Stacks/FetcherStack";
import { MainStack } from "./Stacks/MainStack";

export const AppNavigator = () => {
    const { wasFetched } = useFetchContext();
    return (
        <ApolloProvider client={client}>
            <NavigationContainer>
                {!wasFetched ? <FetcherStack /> : <MainStack />}
            </NavigationContainer>
        </ApolloProvider>
    )
}