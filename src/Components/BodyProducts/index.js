import React,{useEffect} from 'react' ;
import BodyProducts from './BodyProducts';
import {connect } from 'react-redux';
import {fetchProductDataCreator} from '../../redux/Reducers/MainReduser';

const  BodyProductsContainer = ({fetchProductDataCreator,productsData}) => {


  useEffect(() => {

    fetchProductDataCreator();

  }, [fetchProductDataCreator]);

  return (

    <BodyProducts productsData = {productsData} /> 

  );

}

let mapSetStateToProps = (state) => (

  {
    productsData: state.data.productData
  }

)




export default connect(mapSetStateToProps,{fetchProductDataCreator})(BodyProductsContainer);
