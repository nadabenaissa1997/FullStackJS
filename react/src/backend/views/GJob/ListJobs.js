import React, {useEffect} from "react";

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
  FormGroup,
  Form,
  InputGroupAddon,
  InputGroupText,
  Input,
  InputGroup,
  Button
} from "reactstrap";
import {Link} from 'react-router-dom' ;
// core components
import UserHeader from "backend/components/Headers/UserHeader";
import {getJobsHR} from '../../../actions/job';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../../../frontOffice/Layouts/Spinner';
import JobItem from "./JobItem";

const ListJobs = ({getJobsHR, job: {jobs, loading}}) => {
  useEffect(() => {
    getJobsHR();
  }, [getJobsHR]);
  return loading ? <Spinner/>  :(
    <>
      <UserHeader />
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
          <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
            <FormGroup className="mb-0">
              <InputGroup className="input-group-alternative">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fas fa-search" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Search" type="text" />
              </InputGroup>
            </FormGroup>
          </Form>
          <br/>
            <Card className="shadow">
              <CardHeader className="border-0">
                <h3 className="mb-0">List Jobs</h3>
                <div>
                <Link to="/admin/activatedJobs">Activated Jobs</Link>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                <Link to="/admin/deactivatedJobs">Dactivated Jobs (Expired)</Link>
                
                <div className="col text-right">
                  <Button color="success" size="sm">
                    <Link
                      to="/admin/PostJob"
                      style={{ color: "white" }}
                    >
                      Add Job
                    </Link>
                  </Button>
                  </div>
              
                </div>
              </CardHeader>
              <Table className="align-items-center table-flush" responsive>
                <thead className="thead-light">
                  <tr>
                  <th scope="col">Title</th>
                    <th scope="col">Salary</th>
                    <th scope="col">Contract Type</th>
                    <th scope="col">Location</th>
                    <th scope="col">Status</th>
                    <th scope="col" />
                  </tr>
                </thead>
                <tbody>
                  {jobs.map(job => (
                        <JobItem key={job._id} job={job} />
                      ))}                  
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
ListJobs.propTypes ={
  getJobsHR: PropTypes.func.isRequired,
  job: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
  job: state.job
});
export default connect(mapStateToProps, {getJobsHR})(ListJobs);
// import React from "react";

// // reactstrap components
// import {
//   Badge,
//   Card,
//   CardHeader,
//   CardFooter,
//   DropdownMenu,
//   DropdownItem,
//   UncontrolledDropdown,
//   DropdownToggle,
//   Media,
//   Pagination,
//   PaginationItem,
//   PaginationLink,
//   Progress,
//   Table,
//   Container,
//   Row,
//   FormGroup,
//   Form,
//   InputGroupAddon,
//   InputGroupText,
//   Input,
//   InputGroup,

//   UncontrolledTooltip,
// } from "reactstrap";
// import {Link} from 'react-router-dom' ;
// // core components
// import UserHeader from "backend/components/Headers/UserHeader";

// const ListJobs = () => {
//   return (
//     <>
//       <UserHeader />
//       {/* Page content */}
//       <Container className="mt--7" fluid>
//         {/* Table */}
//         <Row>
//           <div className="col">
//           <Form className="navbar-search navbar-search-dark form-inline mr-3 d-none d-md-flex ml-lg-auto">
//             <FormGroup className="mb-0">
//               <InputGroup className="input-group-alternative">
//                 <InputGroupAddon addonType="prepend">
//                   <InputGroupText>
//                     <i className="fas fa-search" />
//                   </InputGroupText>
//                 </InputGroupAddon>
//                 <Input placeholder="Search" type="text" />
//               </InputGroup>
//             </FormGroup>
//           </Form>
//           <br/>
//             <Card className="shadow">
//               <CardHeader className="border-0">
//                 <h3 className="mb-0">List Jobs</h3>
//                 <Link to="/admin/activatedJobs">Activated Jobs</Link>
//                 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
//                 <Link to="/admin/unactivatedJobs">Unactivated Jobs (Expired)</Link>
//               </CardHeader>
//               <Table className="align-items-center table-flush" responsive>
//                 <thead className="thead-light">
//                   <tr>
//                   <th scope="col">Title</th>
//                     <th scope="col">Salary</th>
//                     <th scope="col">Contract Type</th>
//                     <th scope="col">Location</th>
//                     <th scope="col">Status</th>
//                     <th scope="col" />
//                   </tr>
//                 </thead>
//                 <tbody>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
                       
//                         <Media>
//                           <span className="mb-0 text-sm">
//                           Medior .Net Software Engineer
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>2500 dt</td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-warning" />
//                         Full-Time
//                       </Badge>
//                     </td>      
//                     <td>
//                     sousse, Sousse, 4000, Tunisia.
//                     </td>
//                     <td>
//                     ✔
//                     </td>
//                  <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                           >
//                             <Link to="/admin/JobDetail">Details</Link>

//                           </DropdownItem>
//                           <DropdownItem>
//                             <Link to="/"> Delete</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/Ranking"> Ranking </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/activatedJobs">Activated Jobs</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs">Unactivated Jobs (Expired)</Link>
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
                       
//                         <Media>
//                           <span className="mb-0 text-sm">
//                           Software Development Team Manager
//                                                     </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>1800 dt</td>
//                     <td>
//                       <Badge color="" className="badge-dot">
//                         <i className="bg-success" />
//                           CDI
//                       </Badge>
//                     </td>
//                     <td>
//                     sousse, Sousse, 4000, Tunisia.
//                     </td>
//                     <td>
//                     ✔
//                     </td>
                  
              
//                     <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                           >
//                             <Link to="/admin/JobDetails"> Details</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                             <Link to="/"> Delete</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/Ranking"> Ranking </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/activatedJobs"> Activate </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs"> Unactivate </Link>
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">    
//                         <Media>
//                           <span className="mb-0 text-sm">Software Development Team Manager</span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>3150 dt</td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-danger" />
//                         Full-Time
//                       </Badge>
//                     </td>
//                      <td>
//                     sousse, Sousse, 4000, Tunisia.
//                     </td>
//                     <td>
//                     ✔
//                     </td>
            
//                     <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                           >
//                             <Link to="/admin/JobDetails"> Details</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                             <Link to="/"> Delete</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/Ranking"> Ranking </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/activatedJobs"> Activate </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs"> Unactivate </Link>
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
                      
//                         <Media>
//                           <span className="mb-0 text-sm">
//                           Experienced Java Engineer                          </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>4400 dt</td>
//                     <td>
//                       <Badge color="" className="badge-dot">
//                         <i className="bg-info" />
//                         CDI
//                       </Badge>
//                     </td>
//                     <td>
//                     sousse, Sousse, 4000, Tunisia.
//                     </td>
//                     <td>
//                       x
//                     </td>
//                     <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                           >
//                             <Link to="/admin/JobDetails"> Details</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                             <Link to="/"> Delete</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/Ranking"> Ranking </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs"> Activate </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs"> Unactivate </Link>
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                   <tr>
//                     <th scope="row">
//                       <Media className="align-items-center">
                       
//                         <Media>
//                           <span className="mb-0 text-sm">
//                           Experienced Java Engineer
//                           </span>
//                         </Media>
//                       </Media>
//                     </th>
//                     <td>2200 dt</td>
//                     <td>
//                       <Badge color="" className="badge-dot mr-4">
//                         <i className="bg-success" />
//                         CDI
//                       </Badge>
//                     </td>
//                     <td>
//                     sousse, Sousse, 4000, Tunisia.
//                     </td>
//                     <td>
//                       x
//                     </td>
//                     <td className="text-right">
//                       <UncontrolledDropdown>
//                         <DropdownToggle
//                           className="btn-icon-only text-light"
//                           href="#pablo"
//                           role="button"
//                           size="sm"
//                           color=""
//                           onClick={(e) => e.preventDefault()}
//                         >
//                           <i className="fas fa-ellipsis-v" />
//                         </DropdownToggle>
//                         <DropdownMenu className="dropdown-menu-arrow" right>
//                           <DropdownItem
//                           >
//                             <Link to="/admin/JobDetails"> Details</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                             <Link to="/"> Delete</Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/Ranking"> Ranking </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs"> Activate </Link>
//                           </DropdownItem>
//                           <DropdownItem>
//                           <Link to="/admin/unactivatedJobs"> Unactivate </Link>
//                           </DropdownItem>
//                         </DropdownMenu>
//                       </UncontrolledDropdown>
//                     </td>
//                   </tr>
//                 </tbody>
//             </Table>
//               <CardFooter className="py-4">
//                 <nav aria-label="...">
//                   <Pagination
//                     className="pagination justify-content-end mb-0"
//                     listClassName="justify-content-end mb-0"
//                   >
//                     <PaginationItem className="disabled">
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                         tabIndex="-1"
//                       >
//                         <i className="fas fa-angle-left" />
//                         <span className="sr-only">Previous</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem className="active">
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         1
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         2 <span className="sr-only">(current)</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         3
//                       </PaginationLink>
//                     </PaginationItem>
//                     <PaginationItem>
//                       <PaginationLink
//                         href="#pablo"
//                         onClick={(e) => e.preventDefault()}
//                       >
//                         <i className="fas fa-angle-right" />
//                         <span className="sr-only">Next</span>
//                       </PaginationLink>
//                     </PaginationItem>
//                   </Pagination>
//                 </nav>
//               </CardFooter>
//             </Card>
//           </div>
//         </Row>
//         {/* Dark table */}
       
//       </Container>
   
//    </>
//   );
// };

// export default ListJobs;
