import React, { useState } from "react";
import { Button, Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import "./RegisterStyle.scss";
import { useNavigate, Link } from "react-router-dom";
import cookieServices from "../../Services/Cookies";
import { useDispatch } from "react-redux";
import { requestRegister } from "../../redux/actions/auth.actions";

function Register() {
  const dispatch = useDispatch();
  const [loginObj, setLoginObj] = useState({});
  const navigate = useNavigate();
  const loginCallback = (data) => {
    cookieServices().setAppToken(data);
    navigate("/app");
  };
  const handleRegister = () => {
    dispatch(requestRegister({ email, password }, loginCallback));
  };
  const { email = "", password = "" } = loginObj;
  const handleChange = (e) => {
    let updateObj = { ...loginObj };
    updateObj = Object.assign({}, updateObj, {
      [e.target.name]: e.target.value,
    });
    setLoginObj(updateObj);
  };

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
                  <Label for="email" sm={3} className="label-size">
                    Email:
                  </Label>
                  <Col sm={9}>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="something@xyz.com"
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3} className="label-size">
                    Password:
                  </Label>
                  <Col sm={9}>
                    <input
                      type="text"
                      name="password"
                      ref={Register({ required: true, minLength: 8 })}
                      placeholder="Password"
                      required
                      onChange={handleChange}
                    />
                  </Col>
                </FormGroup>
                <div>
                  <h6 className="link-reg">
                    Already a member?
                    <Link to="/auth/login">{"Log In"}</Link>
                  </h6>
                </div>
                <Button
                  onClick={handleRegister}
                  color="secondary"
                  size="sm"
                  type="submit"
                  block
                >
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
