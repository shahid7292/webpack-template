import React from "react";
import {
  Card,
  CardTitle,
  CardText,
  CardGroup,
  CardBody,
  Navbar,
  NavbarBrand,
} from "reactstrap";
import "./homePageStyle.scss";
import { useNavigate } from "react-router-dom";
import cookieService from "../../Services/Cookies";
import { toast } from "react-toastify";

function HomePage() {
  const navigate = useNavigate();
  return (
    <>
      <div className="header">
        <Navbar color="light" light expand="md">
          <NavbarBrand>Welcome!</NavbarBrand>
          <button
            onClick={() => {
              cookieService().clearToken();
              navigate("/login");
              toast.success("Logged Out");
            }}
          >
            Logout
          </button>
        </Navbar>
      </div>
      <div className="card-data">
        <CardGroup>
          <Card>
            <CardBody>
              <CardTitle>~William Osler~</CardTitle>
              <CardText>
                The good physician treats the disease; the great physician
                treats the patient who has the disease.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>~Benjamin Franklin~</CardTitle>
              <CardText>
                It takes many good deeds to build a good reputation, and only
                one bad one to lose it.
              </CardText>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <CardTitle>~Prince~</CardTitle>
              <CardText>
                Every day I feel is a blessing from God. And I consider it a new
                beginning. Yeah, everything is beautiful.
              </CardText>
            </CardBody>
          </Card>
        </CardGroup>
      </div>
    </>
  );
}

export default HomePage;
