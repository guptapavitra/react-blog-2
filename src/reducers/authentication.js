const initialState = {
    logged: true,
    signInModalOpen: false
}

export default (state = initialState, payload) => {
    switch (payload.type) {
        case 'SIGN_IN':
            return { logged: true, signInModalOpen: false };
        case 'SIGN_OUT':
            return { logged: false, signInModalOpen: false };
        case 'OPEN_SIGN_IN_MODAL':
            return { logged: state.logged, signInModalOpen: true };
        case 'CLOSE_SIGN_IN_MODAL':
            return { logged: state.logged, signInModalOpen: false };
        default:
            return state;
    }
}