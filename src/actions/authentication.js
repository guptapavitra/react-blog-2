export const signIn = (userDetails) => {
    console.log("SIGN IN ACTION...");
    return {
        type: "SIGN_IN",
        userDetails
    }
}

export const signOut = () => {
    console.log("SIGN OUT ACTION...");
    return {
        type: "SIGN_OUT"
    }
}

export const openSignInModal = () => {
    console.log("OPEN SIGN IN MODAL...");
    return {
        type: "OPEN_SIGN_IN_MODAL"
    }
}

export const closeSignInModal = () => {
    console.log("CLOSE SIGN IN MODAL...");
    return {
        type: "CLOSE_SIGN_IN_MODAL"
    }
}

export const submitSignInModal = (userDetails) => {
    console.log("SUBMIT SIGN IN MODAL...");
    return {
        type: "SUBMIT_SIGN_IN_MODAL"
    }
}

