import React from "react";
import Header from "../Pages/Shared/Header/Header";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Banner from "../Pages/Shared/Banner/Banner";
import ChefLeftNav from "../Pages/ChefDetails/ChefLeftNav";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Container className="mt-5">
        <Row>
          <Col lg={9} >
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <ChefLeftNav></ChefLeftNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
