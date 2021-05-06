const statsReducer = (state = 0, action) => {
    switch(action.type){
        case 'GET_STATS':
            return(action.payload)
        default:
            return state;
    }
};


export default statsReducer;