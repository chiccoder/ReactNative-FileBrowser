const initialState = {
    files:[]
}

function fileList (state = initialState, action) {
    console.log(action)
    switch(action.type) {
        case 'SET_FILES':
            return {
                ...state,
                files: action.payload.fileList 
            }
        default:
            return state;
        
    }
}
export default fileList