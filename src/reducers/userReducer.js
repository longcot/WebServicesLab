export default (state = [],action) =>{
    switch(action.type){
        case 'signin':
            return [...state,action.payload]
        default:
            return state
    }
}