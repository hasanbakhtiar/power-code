import { useState } from 'react';
import { Col, FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';

function ProductForm({sendForm,editdata}) {
    const [title,setTitle] = useState(editdata?editdata.title:"");
    const [img,setImg] = useState(editdata?editdata.img:"");
    const [price,setPrice] = useState(editdata?editdata.price:"");
    const [desc,setDesc] = useState(editdata?editdata.desc:"");
    const [category,setCategory] = useState(editdata?editdata.category:"");

    const formSubmited = (e)=>{
        e.preventDefault();
        if (!img || !title || !desc || !price || !category) {
            swal("please fill input","","warning")
        }else{
            sendForm({
                title,img,price,desc,category
            })
        }
    }


    return (
        <div className="d-flex align-items-center justify-content-center flex-column">
            <Col md={6}>
                <Form onSubmit={formSubmited}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Photo<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={img} onChange={e=>setImg(e.target.value)} type="text" placeholder="Type title"  />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Title<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={title} onChange={e=>setTitle(e.target.value)} type="text" placeholder="Type title"  />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Price<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={price} onChange={e=>setPrice(e.target.value)} type="text" placeholder="Type title"  />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Category<span className='text-danger'>*</span></Form.Label>
                        <Form.Control value={category} onChange={e=>setCategory(e.target.value)} type="text" placeholder="Type title"  />

                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Desc<span className='text-danger'>*</span></Form.Label>
                        <FloatingLabel controlId="floatingTextarea2" label="Type description">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '100px' }}
                                value={desc}
                                onChange={e=>setDesc(e.target.value)}
                            />
                        </FloatingLabel>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form>
            </Col>
        </div>
    );
}

export default ProductForm;