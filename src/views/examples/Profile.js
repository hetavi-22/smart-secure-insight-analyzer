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

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
            <Card className="card-profile shadow">
              {/* <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        alt="..."
                        className="rounded-circle"
                        src={require("../../assets/img/theme/team-4-800x800.jpg")}
                      />
                    </a>
                  </div>
                </Col>
              </Row> */}
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0">
                <div className="d-flex justify-content-between">
                  <span className="heading">Name: Exposure of Sensitive Information to an Unauthorized Actor</span>
                </div>
              </CardHeader>
              <CardBody className="pt-0">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-between">
                      <div>
                        <span className="heading">200</span>
                        <span className="description">cwe-id</span>
                      </div>
                      <div>
                        <span className="heading">Class</span>
                        <span className="description">Weakness</span>
                      </div>
                      <div>
                        <span className="heading">Draft</span>
                        <span className="description">Status</span>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-between">
                    <span className="h5 mt-4">Modes Of Introduction</span>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    ::PHASE:Architecture and Design::PHASE:Implementation::
                  </div>
                  <div className="text-between">
                    <span className="h5 mt-4">Description</span>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    The product exposes sensitive information to an actor that is not explicitly authorized to have access to that information.
                  </div>
                  <div className="text-between">
                    <span className="h5 mt-4">Detection Methods</span>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    ::METHOD:Automated Static Analysis - Binary or Bytecode:DESCRIPTION:According to SOAR, the following detection techniques may be useful: Cost effective for partial coverage: Bytecode Weakness Analysis - including disassembler + source code weakness analysis Inter-application Flow Analysis:EFFECTIVENESS:SOAR Partial::METHOD:Dynamic Analysis with Automated Results Interpretation:DESCRIPTION:According to SOAR, the following detection techniques may be useful: Highly cost effective: Web Application Scanner Web Services Scanner Database Scanners:EFFECTIVENESS:High::METHOD:Dynamic Analysis with Manual Results Interpretation:DESCRIPTION:According to SOAR, the following detection techniques may be useful: Cost effective for partial coverage: Fuzz Tester Framework-based Fuzzer Automated Monitored Execution Monitored Virtual Environment - run potentially malicious code in sandbox / wrapper / virtual machine, see if it does anything suspicious:EFFECTIVENESS:SOAR Partial::METHOD:Manual Static Analysis - Source Code:DESCRIPTION:According to SOAR, the following detection techniques may be useful: Highly cost effective: Manual Source Code Review (not inspections):EFFECTIVENESS:High::METHOD:Automated Static Analysis - Source Code:DESCRIPTION:According to SOAR, the following detection techniques may be useful: Highly cost effective: Context-configured Source Code Weakness Analyzer Cost effective for partial coverage: Source code Weakness Analyzer:EFFECTIVENESS:High::METHOD:Architecture or Design Review:DESCRIPTION:According to SOAR, the following detection techniques may be useful: Highly cost effective: Formal Methods / Correct-By-Construction Cost effective for partial coverage: Attack Modeling Inspection (IEEE 1028 standard) (can apply to requirements, design, source code, etc.):EFFECTIVENESS:High::
                  </div>
                  </div>
                  <div className="text-between">
                    <span className="h5 mt-4">Potential mitigation</span>
                  <div className="h5 font-weight-300">
                    <i className="ni location_pin mr-2" />
                    ::PHASE:Architecture and Design:STRATEGY:Separation of Privilege:DESCRIPTION:Compartmentalize the system to have safe areas where trust boundaries can be unambiguously drawn. Do not allow sensitive data to go outside of the trust boundary and always be careful when interfacing with a compartment outside of the safe area. Ensure that appropriate compartmentalization is built into the system design, and the compartmentalization allows for and reinforces privilege separation functionality. Architects and designers should rely on the principle of least privilege to decide the appropriate time to use privileges and the time to drop privileges.::
                    </div>
                  </div>
                  </div>
                  <hr className="my-4" />
                  <a href="#pablo" onClick={(e) => e.preventDefault()}>
                    Show more
                  </a>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col className="order-xl-1" xl="12">
            <Card className="bg-secondary shadow">
              <CardHeader className="bg-white border-0">
                <Row className="align-items-center">
                  <Col xs="8">
                    <h3 className="mb-0">Report</h3>
                  </Col>
                  <Col className="text-right" xs="4">
                    <Button
                      color="primary"
                      href="#pablo"
                      onClick={(e) => e.preventDefault()}
                      size="sm"
                    >
                      see more
                    </Button>
                  </Col>
                </Row>
              </CardHeader>
              <CardBody>

              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Profile;
