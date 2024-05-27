import { Button } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { LinkContainer } from 'react-router-bootstrap';
import {  deleteProductToDatabase } from '../../tools/actions/shopAction';
import slugify from 'slugify';

function Dashboard() {
  const data = useSelector(p => p);
  const dispatch = useDispatch();
  return (
    <>
      <h1 className='text-center my-5'>Dashboard</h1>
      <LinkContainer to="/dashboard/add"><Button variant='dark mb-3'>Add</Button></LinkContainer>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Photo</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Description</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        
{[...data].reverse().map((item,c) => (
          <tr key={item.id}>
            <td>{c+1}</td>
            <td><img width={100} src={item.img} alt={item.title} /></td>
            <td>{item.title}</td>
            <td>${item.price}</td>
            <td>{item.category}</td>
            <td>{item.desc}</td>
            <td><LinkContainer to={`/dashboard/edit/${slugify(item.title)}`}><Button variant='warning'>Edit</Button></LinkContainer></td>
            <td><Button onClick={()=>{dispatch(deleteProductToDatabase(item.id))}} variant='danger'>Del</Button></td>
          </tr>
        ))}

      </tbody>
    </Table>
    </>
  );
}

export default Dashboard;