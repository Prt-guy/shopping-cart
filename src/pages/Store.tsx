import StoreItems from '../data/items.json';       // Database
import StoreItem from '../components/StoreItem';
import { Row, Col } from 'react-bootstrap';

export default function Store() {
  return (
    <Row md={2} sm={1} lg={3} className='g-3'>
      {/* g-3 : for gap */}
      {StoreItems.map((item) => (
        <Col key={item.id}>
          <StoreItem {...item} />
        </Col>
      ))}
    </Row>
  )
}
