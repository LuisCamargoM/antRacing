import { FetchContextInterface } from "../context/Fetcher";

enum ENUM_TYPE {
    REST = 'REST',
    GRAPHQL = 'GRAPHQL'
}

async function fetchData(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ he: 'das' })
        }, 5000)
    });

}

export const apiService = { fetchData };