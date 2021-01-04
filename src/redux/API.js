import axios from 'axios';



export const apiData = {
  async getProducts(){
    const response = await axios.get('https://demo3062417.mockable.io/products');
    return response.data;
  },
  async postComment(comment){
    const response = await axios.post(comment);
    return response;
  }
  
}