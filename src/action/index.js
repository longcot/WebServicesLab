import linkServer from '../api/linkServer'

export const signin = (name,password) => async(dispatch) =>{
    try {
        const response = await linkServer.post('/signin',{name,password})
        dispatch({type:'signin',payload:response.data})
       
    } catch (error) {
        console.log('Error',error);
    }
}