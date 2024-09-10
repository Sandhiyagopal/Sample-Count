
const initialState={
    count:0,
}
const createReducer=(intialState,action)=>{
    switch(action.type){
        case 'increMent':
            return { count : initialState.count+1}
    }
}

export default createReducer;