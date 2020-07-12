import React from 'react'
import {Form, Input} from 'antd';

const FormItem = Form.Item;

const makeField = Component =>({input, label})=>{ 
    return(
        <FormItem
            label={label}
        >
            {/* children={children}  */}
            <Component  {...input} />
        </FormItem>
    )
}
export default makeField(Input)