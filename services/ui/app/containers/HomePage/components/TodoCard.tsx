import React from 'react';
import { Todo } from 'containers/App/types';
import Accordion from 'react-bootstrap/Accordion';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import moment from 'moment';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';

export interface Props {
  onHandleDelete(id: String | undefined): void;
  todo: Todo;
  index: number;
}

const toDate = (ts: number): string => {
  return moment.unix(ts).format('DD/MM/YYYY');
};

function TodoCard(props: Props) {
  console.log('TodoCard', props);

  const handleDelete = () => {
    props.onHandleDelete(props.todo.id);
  };

  const index: string = `${props.index}`;
  const expirationDate: string = toDate(props.todo.expiration);
  const creationDate: string = toDate(props.todo.created);
  const expired: boolean = moment.now() / 1000 > props.todo.expiration;
  const variant= expired ? "danger" : "secondary";
  return (
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Card.Header} variant="link" eventKey={index}>
          <Row>
            <Col>
              {' '}
              <Badge variant={variant}>></Badge> {expirationDate}
            </Col>
            <Col>{props.todo.title}</Col>
            <Col className="text-right">
              <Button variant="danger" onClick={handleDelete}>
                Del
              </Button>
            </Col>
          </Row>
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey={index}>
        <Card.Body>
          <Row>
            <Col>
              <Badge variant="secondary">ID:</Badge> {props.todo.id}
            </Col>
            <Col></Col>
            <Col>
              <Badge variant="secondary">Created:</Badge> {creationDate}
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col>
              <hr></hr>
            </Col>
          </Row>
          <Row>
            <Col>
              <div
                dangerouslySetInnerHTML={{ __html: props.todo.content }}
              ></div>
            </Col>
          </Row>
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default TodoCard;
