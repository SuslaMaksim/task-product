
let InitialState = {

            productData: null


}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case 'addProduct':
            return {
              
            }
        default:
            return state;
    }
}
export default mainReducer;







