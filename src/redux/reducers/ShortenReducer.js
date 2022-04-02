let lastId = 0;

const shortenReducer = (state = [], action) => {
    switch(action.type){
        case 'ADDED_LINK':
            return [
                ...state,
                {
                    id: ++lastId,
                    oriLink: action.payload.oriLink,
                    shortenLink: action.payload.shortenLink,
                    copied : false
                }
            ]
        case 'COPIED_LINK':
            return state.map(item => {
                return item.id === action.payload.id ? { ...item, copied: true} : { ...item, copied: false}
                
            })
        default:
            return state;
    }
}

export default shortenReducer;