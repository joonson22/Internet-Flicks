export const OPEN_POPOUT = "OPEN_POPOUT";
export const CLOSE_POPOUT = "CLOSE_POPOUT";
export const SET_POPOUT = 'SETPOPOUT';

export const openPopout = () => {
    return({
        type: OPEN_POPOUT
    })
}
export const closePopout = () => {
    return({
        type: CLOSE_POPOUT
    })
}

export const setPopout = (id) => {
    return({
        type: SET_POPOUT,
        id
    })
}