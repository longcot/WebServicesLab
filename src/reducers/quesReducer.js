export default (state = [],action) =>{
    switch(action.type){
        case 'GET':
            return [...state,action.payload]
        case 'POST':
            return [...state,action.payload]
        case 'PUT':
            return [...state,action.payload]
        case 'DELETE':
            return [...state,action.payload]

        default:
            return state
    }
}