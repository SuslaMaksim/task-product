import {apiData} from '../API';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';


const getProducts = 'bodyProducts/GET_PRODUCTS';
const fetchProductData = 'bodyProducts/FETCH_PRODUCTS_DATA'




let InitialState = {

            productData: null

}

let mainReducer = (state = InitialState, action)=>{
    switch(action.type){
        case getProducts:
            return {
              ...state,
              productData: [...action.products]

            }
        default:
            return state;
    }
}
export default mainReducer;

export const fetchProductDataCreator = () => ({type: fetchProductData })
const getProductsCreator = (products) => ({type: getProducts,products})




//Sagas
export function* watchFetchDataSaga(){
    yield takeEvery(fetchProductData, fetchProductAsyncSaga)
}

function* fetchProductAsyncSaga(){

    try{
        const data = yield call(() => {
            return apiData.getProducts()
        })
        yield put(getProductsCreator(data))

    }catch(error){
        console.log(error)
    }
}





