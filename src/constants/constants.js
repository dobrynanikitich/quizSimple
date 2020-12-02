import { css } from "@emotion/core";

const initialState = {
    currentScore: 0,
    currentQuizType: null,
    quizTypes: ['country', 'flag', 'currency', 'area'],
    isLoading: true,
    isLogin: false,
}

const override = css`
    display: block;
    margin: 0 auto;
`;

export { override, initialState };