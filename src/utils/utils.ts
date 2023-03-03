import { AntState } from "../store/slices/antsSlice";

export const compare = (a: AntState, b: AntState) => {
    if (a.likelihoodOfAntWinning < b.likelihoodOfAntWinning) return 1;
    if (b.likelihoodOfAntWinning < a.likelihoodOfAntWinning) return -1;
    return 0;
}