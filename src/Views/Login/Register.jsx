import React from "react";
import { Button, Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import "./RegisterStyle.scss";

function Register() {
  return (
    <>
      <div className="mainbg-img">
        <Row className="main-style">
          <div>
            <h3 className="title">Create New Account</h3>
            <hr />
            <div>
              <p className="para">
                Enter your email and create a password to get started!
              </p>
            </div>
          </div>

          <Col>
            <div className="reg-box">
              <Form>
                <FormGroup row>
                  <Label for="email2" sm={3} className="label-size">
                    Email:
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="Email"
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3} className="label-size">
                    Password:
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="password"
                      name="email"
                      id="password"
                      placeholder="Password"
                    />
                  </Col>
                </FormGroup>
                <div>
                  <h6 className="link-reg">Already a member? Log In</h6>
                </div>
                <Button color="secondary" size="sm" type="submit" block>
                  Create Account
                </Button>
              </Form>
            </div>
          </Col>
          <Col className="side-img">
            <div></div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Register;
