let initialState = [];

// localStorage.clear()

let getFromStorage = localStorage.getItem('shortenLinks');
// console.log(JSON.parse(getFromStorage));

if( getFromStorage !== null){
    initialState = JSON.parse(getFromStorage);
    // console.log(initialState.length)
}

const shortenReducer = (state = initialState, action) => {
    switch(action.type){
        case 'ADDED_LINK':
            return [
                ...state,
                {
                    id: ++initialState.length,
                    oriLink: action.payload.oriLink,
                    shortenLink: action.payload.shortenLink,
                    copied : false
                }
            ]
        case 'COPIED_LINK':
            return state.map(item => {
                return item.id === action.payload.id ? { ...item, copied: true} : { ...item, copied: false}
                
            })
        case 'DELETED_LINK':
            return state.filter(item => {
                return item.id !== action.payload.id
            })
        default:
            return state;
    }
}

export default shortenReducer;