import question from '../api/question'

// export const signin = (name,password) => async(dispatch) =>{
//     try {
//         const response = await linkServer.post('/signin',{name,password})
//         dispatch({type:'signin',payload:response.data})
       
//     } catch (error) {
//         console.log('Error',error);
//     }
// }

export const getQuestions = () => async (dispatch) =>{
    try {
        const response = await question.get('/question')
        dispatch({type:'GET',payload:response.data})
    } catch (error) {
        console.log('Error: ',error );
    }
}

export const addQuestion = (title,description,note) => async (dispatch) =>{
    try {
        const response = await question.post('/question',{title,description,note})
        dispatch({type:'POST',payload:response.data})
    } catch (error) {
        console.log('Error',error);
    }
}

export const updateQuestion = (id,title,description,note) => async (dispatch) =>{
    try {
        const response = await question.put(`/question/${id}`,{title,description,note})
        dispatch({type:'PUT',payload:response.data})
    } catch (error) {
        console.log('Error',error);
        
    }
}

export const deleteQuestion = (id) => async (dispatch) =>{
    try {
        const response = await question.delete(`/question/${id}`)
        dispatch({type:'DELETE',payload:response.data})
    } catch (error) {
        console.log('Error',error);
        
    }
}