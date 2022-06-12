import React from "react";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddFormData() {
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Control
                        type="text" name="Product Name" required="required" placeholder="Product name">

                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="number" name="Product Price" required="required" placeholder="Product price">

                    </Form.Control>
                </Form.Group>

                <Form.Group>
                    <Form.Control
                        type="number" name="Product Quantity" required="required" placeholder="Product quantity">

                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" block >
                    Add Product
                </Button>

            </Form>

        </div>

    );
}
export default AddFormData;