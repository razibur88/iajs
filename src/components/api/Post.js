import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Post = ({ post }) => (
  <Container>
    <Row>
      {post.map((item) => (
        <Col key={item.id} lg={4}>
          <h2>{item.id}</h2>
          <h5>{item.title}</h5>
          <p>{item.body}</p>
        </Col>
      ))}
    </Row>
  </Container>
);

export default Post;
