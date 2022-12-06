import React from "react";
import { Container, Row, Col, Pagination } from "react-bootstrap";

const Pagecontainer = ({
  perPage,
  totalpage,
  paginate,
  next,
  prev,
  currentPage,
}) => {
  let pageNumber = [];
  for (let i = 1; i <= Math.ceil(totalpage / perPage); i++) {
    pageNumber.push(i);
  }

  return (
    <Container>
      <h2>hello</h2>
      <Row>
        <Col>
          <Pagination>
            <Pagination.Prev onClick={prev} />
            {pageNumber.map((item) => (
              <Pagination.Item
                className={currentPage == item ? "active" : ""}
                onClick={() => paginate(item)}
              >
                {item}
              </Pagination.Item>
            ))}
            <Pagination.Next onClick={next} />
          </Pagination>
        </Col>
      </Row>
    </Container>
  );
};

export default Pagecontainer;
