import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';

function SingleCard({alldata}) {
  return (
  <Col sm={12} md={4}>
        <Card >
      <Card.Img variant="top" src={alldata.img} />
      <Card.Body>
        <Card.Title>{alldata.title}</Card.Title>
        <Card.Subtitle>${alldata.price}</Card.Subtitle>
        <Card.Text>
          {alldata.desc}
        </Card.Text>
      <LinkContainer to="/"><Button variant="dark">Read more</Button></LinkContainer>
      </Card.Body>
    </Card>
    </Col>
  );
}

export default SingleCard;