/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from "react";
import { Button, Row, Col, Form, Label, FormGroup, Input } from "reactstrap";
import "./LoginStyle.scss";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { isEmpty } from "lodash";
import { toast } from "react-toastify";
import { useNavigate, Link } from "react-router-dom";
import cookieServices from "../../Services/Cookies";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../redux/actions/auth.actions";

function Login() {
  const dispatch = useDispatch();
  const [loginObj, setLoginObj] = useState({});
  const navigate = useNavigate();
  const loginCallback = (data) => {
    cookieServices().setAppToken(data);
    navigate("/app");
  };
  const handleLogin = () => {
    if (isEmpty(email.toString())) {
      toast.error("Email cannot be empty");
    } else if (isEmpty(password.toString())) {
      toast.error("Password cannot be empty");
    } else {
      dispatch(requestLogin({ email, password }, loginCallback));
    }
  };
  const { email = "", password = "" } = loginObj;
  const handleChange = (e) => {
    let updateObj = { ...loginObj };
    updateObj = Object.assign({}, updateObj, {
      [e.target.name]: e.target.value,
    });
    setLoginObj(updateObj);
  };
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordVisiblity = useCallback(
    (e) => {
      e.stopPropagation();
      setPasswordShow(!passwordShow);
    },
    [setPasswordShow, passwordShow]
  );
  const getPassword = () => {
    passwordShow ? <AiFillEyeInvisible /> : <AiFillEye />;
  };

  return (
    <>
      <div className="mainbg-img">
        <Row className="main-style">
          <div>
            <h1 className="title">Login</h1>
            <hr />
          </div>

          <Col>
            <div className="login-box">
              <Form>
                <FormGroup row>
                  <Label for="email" sm={3} className="label-size">
                    Email:
                  </Label>
                  <Col sm={9}>
                    <Input
                      onChange={handleChange}
                      placeholder="Email"
                      type="email"
                      name={"email"}
                      value={email}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Label for="password" sm={3} className="label-size">
                    Password:
                  </Label>
                  <Col sm={9}>
                    <Input
                      onChange={handleChange}
                      name={"password"}
                      value={password}
                      placeholder="Password"
                      type={passwordShow ? "text" : "password"}
                    />
                    <span onClick={(e) => togglePasswordVisiblity(e)}>
                      <i className={getPassword()} />
                    </span>
                  </Col>
                </FormGroup>
                <div className="forgot-pwd">Forgot password?</div>
                <Button
                  onClick={handleLogin}
                  color="secondary"
                  size="sm"
                  type="submit"
                  block
                >
                  Submit
                </Button>
              </Form>
            </div>
          </Col>
          <Col className="side-img">
            <div></div>
          </Col>
          <div>
            <h6 className="link-reg">
              {" Don't have an account yet? Sign up"}
              <Link to="/auth/register" className="signup-link">
                {"Sign Up"}
              </Link>
            </h6>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Login;
