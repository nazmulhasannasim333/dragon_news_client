import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Header from '../pages/Shared/Header/Header';
import HeaderHighlights from '../pages/Shared/HeaderHighlights/HeaderHighlights';
import LeftNav from '../pages/Shared/LeftNav/LeftNav';
import NavigationBar from '../pages/Shared/NavigationBar/NavigationBar';
import RightNav from '../pages/Shared/RightNav/RightNav';

const Main = () => {
    
    return (
        <div>
           <Header />
           <HeaderHighlights />
           <NavigationBar />
           <Container>
                <Row className='mt-4'>
                    <Col lg={3}>
                        <LeftNav />
                    </Col>
                    <Col className='mt-2' lg={6}>
                        <Outlet />
                    </Col>
                    <Col lg={3}>
                        <RightNav />
                    </Col>
                </Row>
            </Container>
           <Footer />
        </div>
    );
};

export default Main;