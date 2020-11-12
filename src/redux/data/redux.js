const initialState = {
}

export const Action = {
    Types: {
        UPDATE_STATE: '@DATA/UPDATE_STATE',
        CLEAR_STORE: '@DATA/CLEAR_STORE',
    },
    Creators: {
        updateState: (payload) => ({
            type: Action.Types.UPDATE_STATE,
            payload
        }),
        clearStore: () => ({
            type: Action.Types.CLEAR_STORE,
        }),
    }
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case Action.Types.UPDATE_STATE:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}


