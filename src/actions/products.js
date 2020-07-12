import * as types from '../constants/types'
import { productService } from 'services';

export function addProduct(data) {
    return async (dispatch) => {
      console.log('======>', data)
      try {
        const res = await productService().addProduct(data)
        let addProduct
        if (res.status === 200) {
          addProduct = res.data.data;
        }
        dispatch({
          type: types.ADD_PRODUCT,
          addProduct: addProduct
        })
      } catch (e) {
        dispatch({
          type: types.ADD_PRODUCT,
          addProduct: null
        })
      }
    }
  }