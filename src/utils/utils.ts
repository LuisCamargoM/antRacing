import { AntState } from "../store/slices/antsSlice";

export const compare = (a: AntState, b: AntState) => {
    if (a.likelihoodOfAntWinng > b.likelihoodOfAntWinng) return 1;
    if (b.likelihoodOfAntWinng > a.likelihoodOfAntWinng) return -1;
    return 0;
}