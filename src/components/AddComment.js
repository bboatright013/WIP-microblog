
import React, {useState} from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import {useDispatch} from 'react-redux';
import { addComments } from '../actions/actionCreators';
import { v4 as uuid } from 'uuid';

const AddComment = ({postId}) => {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        comment: ""
    })

    const handleChange = evt =>{
        const {name, value} = evt.target;
        setFormData( fData => ({
            ...fData,
            [name] : value
        }));
    }

    const handleAddComment = evt => {
        evt.preventDefault();
        dispatch(addComments( postId, formData.comment ));

    }
    return (
        <div className="AddComment">
            <Form>
                <h3>New Post</h3>
                <FormGroup>
                    <Label for="comment">Comment: </Label>

                    <Input type="textarea" name="comment" id="comment" placeholder="comment here..." onChange={handleChange} />
                </FormGroup>
          

                <Button onClick={handleAddComment} color="primary">Submit</Button>
            </Form>
        </div>
    )
}
export default AddComment;






