import React from 'react';
import {lifecycle, compose as recompose, withHandlers, withState} from 'recompose';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import{Button, Card, Form} from 'antd';
import {Field, reduxForm, formValueSelector} from 'redux-form';
import {InputField} from '../components/fields'; 
import {createCategory} from '../../../actions/category_action';
import categoryReducer from '../../../reducers/category_reducer'
const CategoryForm = props=>{
  
    const { handlesSubmit, categories } = props;  
    console.log(categories,'====>?')
    return(
        <Card> 
            <Form > 
                <div className="row">
                <div className="col-md-4">
                    </div>
                    <div className="col-md-4">
                        <Field 
                            component={InputField}
                            label="category name"
                            name="name"
                        />
                    </div>
                </div>
                <Form.Item className="text-center"> 
                    <Button type="primary"  htmlType="submit" onClick={() => handlesSubmit()} >Lưu</Button>
                </Form.Item>
            </Form>
        </Card>
    )
}
const selector = formValueSelector('CATEGORY_FORM');
function mapDispatchToProps(dispatch){
    return {
        createCategory : data => dispatch(createCategory(data))
    }
}

const mapStateToProps = createStructuredSelector({
    name : (state)=>selector(state,'name'),
    categories: categoryReducer
}) 
const withConnect = connect(mapStateToProps,mapDispatchToProps);
export default recompose(
    withConnect,
    withHandlers({
        handlesSubmit: ({name, createCategory}) => () => {
            createCategory({name: name})
        }
    }),
    reduxForm({
        form: 'CATEGORY_FORM'
    })
)(CategoryForm)
 