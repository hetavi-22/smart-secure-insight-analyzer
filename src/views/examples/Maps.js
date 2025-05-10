/*!

=========================================================
* Argon Dashboard React - v1.2.4
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2024 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import {
  Badge,
  Card,
  CardHeader,
  CardFooter,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  DropdownToggle,
  Media,
  Pagination,
  PaginationItem,
  PaginationLink,
  Progress,
  Table,
  Container,
  Row,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import Header from "components/Headers/Header.js";



const Maps = () => {
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">CVSS score table</h3>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                    <th scope="col">CWE ID</th>
                    <th scope="col">CVSS score</th>
                    <th scope="col">Severity</th>
                    <th scope="col">Description</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            CWE - 281
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>7.4</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">High</span>
                        <div>
                          <Progress
                            max="100"
                            value="74"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>OX app suite throught 7.10.2 has Insecure Permissions</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">
                            CWE - 693
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>5.6</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Medium</span>
                        <div>
                          <Progress
                            max="100"
                            value="56"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td> A vulnerability in secure socket layer (SSL)/ transpoer layer security(TLS) protocol.
                    </td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center"> 
                        <Media>
                          <span className="mb-0 text-sm">
                            CWE- 190
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>3.9</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Low</span>
                        <div>
                          <Progress
                            max="100"
                            value="39"
                            barClassName="bg-success"
                          />
                        </div>
                      </div>
                    </td>
                    <td>Multiple integer overflows in libwebp aloows attackers to have unspecified impact via unknown vectors</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center">
                        <Media>
                          <span className="mb-0 text-sm">CWE- 1021</span>
                        </Media>
                      </Media>
                    </th>
                    <td>4.8</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">Medium</span>
                        <div>
                          <Progress
                            max="100"
                            value="72"
                            barClassName="bg-info"
                          />
                        </div>
                      </div>
                    </td>
                    <td>ismartgate PRO 1.5.9 is vulnerable to clickjacking</td>
                  </tr>
                  <tr>
                    <th scope="row">
                      <Media className="align-items-center"> 
                        <Media>
                          <span className="mb-0 text-sm">
                            CWE- 823
                          </span>
                        </Media>
                      </Media>
                    </th>
                    <td>6.1</td>
                    <td>
                      <div className="d-flex align-items-center">
                        <span className="mr-2">High</span>
                        <div>
                          <Progress
                            max="100"
                            value="61"
                            barClassName="bg-danger"
                          />
                        </div>
                      </div>
                    </td>
                    <td>A vulnerability has been identified in Capital VSTAR</td>
                  </tr>
                </tbody>
              </Table>
              <CardFooter className="py-4">
                <nav aria-label="...">
                  <Pagination
                    className="pagination justify-content-end mb-0"
                    listClassName="justify-content-end mb-0"
                  >
                    <PaginationItem className="disabled">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                        tabIndex="-1"
                      >
                        <i className="fas fa-angle-left" />
                        <span className="sr-only">Previous</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem className="active">
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        1
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        2 <span className="sr-only">(current)</span>
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        3
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink
                        href="#pablo"
                        onClick={(e) => e.preventDefault()}
                      >
                        <i className="fas fa-angle-right" />
                        <span className="sr-only">Next</span>
                      </PaginationLink>
                    </PaginationItem>
                  </Pagination>
                </nav>
              </CardFooter>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Maps;
