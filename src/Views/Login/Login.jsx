/* eslint-disable react/no-unescaped-entities */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { useState, useCallback } from "react";
import { Button, Row, Col, Label, FormGroup, Input } from "reactstrap";
import "./LoginStyle.scss";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import cookieServices from "../../Services/Cookies";
import { useDispatch } from "react-redux";
import { requestLogin } from "../../redux/actions/auth.actions";
//import { strings } from "../strings";

function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleLogin = () => {
    const successCallback = () => {
      cookieServices().setAppToken({ access: "abcde" });
      navigate("/app");
      toast.success("Logged in Successfully");
    };

    const errorCallback = () => {
      toast.error("Invalid credentials");
    };
    dispatch(requestLogin({ email, password }, successCallback, errorCallback));
  };
  const [passwordShow, setPasswordShow] = useState(false);
  const togglePasswordVisiblity = useCallback(
    (e) => {
      e.stopPropagation();
      setPasswordShow(!passwordShow);
    },
    [setPasswordShow, passwordShow]
  );

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
              <FormGroup row>
                <Label for="email" sm={3} className="label-size">
                  Email:
                </Label>
                <Col sm={9}>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
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
                    onChange={(e) => setPassword(e.target.value)}
                    name={"password"}
                    value={password}
                    placeholder="Password"
                    type={passwordShow ? "text" : "password"}
                  />

                  <span
                    onClick={(e) => togglePasswordVisiblity(e)}
                    className="eye-icon"
                  >
                    {passwordShow ? <FaEye /> : <FaEyeSlash />}
                  </span>
                </Col>
              </FormGroup>
              <div className="forgot-pwd">
                <Link to="/forgetPassword">Forgot password?</Link>
              </div>
              <Button onClick={handleLogin} color="secondary" size="sm" block>
                Submit
              </Button>
            </div>
          </Col>
          <Col className="side-img">
            <div></div>
          </Col>
          <div>
            <h6 className="link-reg">
              {" Don't have an account yet?"}
              <Link to="/register">{"Sign Up"}</Link>
            </h6>
          </div>
        </Row>
      </div>
    </>
  );
}

export default Login;
