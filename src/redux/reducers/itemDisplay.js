const itemDisplay = (state = [], action) => {
    console.log('in itemDisplay REDUCER');
    switch (action.type) {
        case 'SET_ITEMS':
            return action.payload;
        default:
            return state;
    }
};


export default itemDisplay;
