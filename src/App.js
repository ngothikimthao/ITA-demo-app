import React from 'react';
import './App.css';
import './fonts/index.css';
import ListVideo from './js/component/listVideo';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './js/layout/navbar'
import SlideMenu from './js/layout/slide-menu'
import TopBarWrapper from './js/component/topbarwrapper'
import TabWrapper from './js/component/tapwrapper'
import { Row, Col } from 'reactstrap';



function App() {
  return (
    <>
        <Navbar></Navbar>
        <Row>
          <Col md='0.5'>
            <SlideMenu></SlideMenu>
          </Col>
          <Col md='11'>
            <TopBarWrapper></TopBarWrapper>
            <TabWrapper></TabWrapper>
            <ListVideo></ListVideo>
          </Col>
        </Row>
    </>

  );
}

export default App;
