export const increment = (payload) => {
    return {
        type: 'INCREMENT',
        payload
    }
}
export const decrement = () => {
    return {
        type: 'DECREMENT'
    }
}
export const toggleLogin = () => {
    return {
        type: 'SIGN_IN'
    }
}
export const getStats = (payload) => {
    return {
        type: 'GET_STATS',
        payload
    }
}