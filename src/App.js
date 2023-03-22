import logo from './logo.svg';
import './App.css';
import { MyCard } from './card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Container>
      <Row>
      <Col xs={6} md={4}>
          <MyCard/>
        </Col>
        <Col xs={6} md={4}>
        <MyCard/>
        </Col>
        <Col xs={6} md={4}>
        <MyCard/>
        </Col>
      </Row>

    </Container>
  );
}

export default App;
