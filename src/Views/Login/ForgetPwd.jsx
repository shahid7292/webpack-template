import React from "react";
import { Button, Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import "./ForgetStyle.scss";
import { Link } from "react-router-dom";

function ForgetPwd() {
  return (
    <>
      <div className="mainbg-img">
        <Row className="main-style">
          <div>
            <h3 className="title">Forgot Password</h3>
            <hr />
            <div>
              <p className="para">
                Enter your email address to retrieve your password
              </p>
            </div>
          </div>

          <Col>
            <div className="forgotpwd-box">
              <Form inline>
                <FormGroup className="mb-2 me-sm-2 mb-sm-0">
                  <Label className="me-sm-2" for="Email">
                    Email:
                  </Label>
                  <Input
                    id="Email"
                    name="email"
                    placeholder="something@gmail.com"
                    type="email"
                  />
                </FormGroup>

                <div>
                  <h6 className="link-backToLogin">
                    Back to <Link to="/auth/login">Login</Link> page
                  </h6>
                </div>
                <Button
                  color="secondary"
                  size="sm"
                  type="submit"
                  block
                  className="btn-pwd"
                >
                  Retrieve Password
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

export default ForgetPwd;
