import React,{Component} from 'react'; 
import CategoryList from './listCategories';
import CategoryForm from './FormCategory';
import {Link} from 'react-router-dom';
class Category extends Component {
 
    render(){
        return(
            <div> 
                <Link className="btn btn-primary" to="/admin/category/add">&ensp;Thêm mới</Link>
                <CategoryList/>  
            </div>
        )
    }
}
export default Category