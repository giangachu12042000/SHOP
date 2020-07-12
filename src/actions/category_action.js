import * as types from '../constants/types';
import {categoryService} from '../service'
function getCategory(res){ 
    let data = []
    // if(res.status === 200) {
      data = res.data;
    // }
    return {
        category:data,
        type: types.ADD_CATEGORY
    }
}
 
export function createCategory(data) { 
    return async (dispatch) => {
      try {
        // const res = await categoryService().postCategory(data);
        
        console.log('==========================<<');
        dispatch(getCategory({data: [{name: 'fdsfsaf'}]}))
      } catch (e) {
        console.log('==========================<<eeeee', e);
        console.log(e.message)
      }
    }
}