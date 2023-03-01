import { ImageSourcePropType } from "react-native"

interface Ant {
    name: string,
    length: number,
    weight: number,
    image?: ImageSourcePropType,
    __typename?: string
}
export interface Ants {
    ants: Ant[]
}
export const { ants }: Ants = {
    "ants": [
        {
            "name": "Marie ‘Ant’oinette",
            "length": 12,
            "weight": 2
        },
        {
            "name": "Flamin’ Pincers",
            "length": 11,
            "weight": 2
        },
        {
            "name": "Big Susan",
            "length": 20,
            "weight": 5
        },
        {
            "name": "The Unbeareable Lightness of Being",
            "length": 5,
            "weight": 1
        },
        {
            "name": "‘The Duke’",
            "length": 17,
            "weight": 3
        }
    ]
}
