import React, {Component} from 'react';
import {Container, Row, Col, CardGroup, Card, CardBody, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap';


class Login extends Component {
  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="8">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <h1>Login</h1>
                    <p className="text-muted">Sign In to your account</p>

                      <InputGroup className="mb-3">
                          <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                          <Input type="text" placeholder="Company"/>
                      </InputGroup>
                    <InputGroup className="mb-3">
                      <InputGroupAddon><i className="icon-user"></i></InputGroupAddon>
                      <Input type="text" placeholder="Username"/>
                    </InputGroup>
                    <InputGroup className="mb-4">
                      <InputGroupAddon><i className="icon-lock"></i></InputGroupAddon>
                      <Input type="password" placeholder="Password"/>
                    </InputGroup>
                    <Row>
                      <Col xs="6">
                        <Button color="primary" className="px-4">Login</Button>
                      </Col>

                    </Row>
                  </CardBody>
                </Card>
                <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: 44 + '%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>BGMEA</h2>
                      <p>Biometric Identity And Worker Information Management.</p>
                    </div>
                  </CardBody>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
