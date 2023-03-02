import { ImageSourcePropType } from "react-native"

export interface Ant {
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


export const statisticInfo = [
    {
        image: require('../../assets/images/0_ant.png'),
        color: '#3000EB',
        timeValue: 0.2231
    },
    {
        image: require('../../assets/images/1_ant.png'),
        color:'#53F56F',
        timeValue: 0.11231
    },
    {
        image: require('../../assets/images/2_ant.png'),
        color:'#EB7B00',
        timeValue: 0.8731
    },
    {
        image: require('../../assets/images/3_ant.png'),
        color:'#EB0000',
        timeValue: 0.7821
    },
    {
        image: require('../../assets/images/4_ant.png'),
        color: '#B653F5',
        timeValue: 0.6231
    },

]