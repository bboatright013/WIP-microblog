import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



const PostForm = (props) => {

    return (
        <div className="PostForm">
            <Form>
                <h3>New Post</h3>
            <FormGroup>
                <Label for="title">Title</Label>

                <Input type="text" name="title" id="title" placeholder="Title" onChange={props.handleChange} value={props.formData.title} />
            </FormGroup>
            <FormGroup>
                <Label for="description">Description</Label>
                <Input type="text" name="description" id="description" placeholder="description" onChange={props.handleChange} value={props.formData.description} />
            </FormGroup>


            <FormGroup>
                <Label for="body">Body</Label>
                <Input type="textarea" name="body" id="body" onChange={props.handleChange} value={props.formData.body}/>
            </FormGroup>

            <Button onClick={props.action} color="primary">Submit</Button>
            <Button color="danger">Cancel</Button>
            </Form>
        </div>
    )
}

export default PostForm;