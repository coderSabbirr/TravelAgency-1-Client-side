import { faColumns, faSignOutAlt, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Breadcrumb, Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../Hook/useAuth';
import './Dashboard.css';

const Dashboard = () => {
    const { logOut, admin, user } = useAuth()
    return (
        <Row className="me-0 px-0">
            <Col md={3} className="px-0" >
                <Navbar collapseOnSelect expand="md"  >
                    <Container className="d-flex flex-column dashboard-route">

                        <Navbar.Brand className="text-dark me-auto fs-2 fw-bold" href="/home">Travel Agency</Navbar.Brand>
                        <hr className="w-100 bg-white" />

                        <Navbar.Text className="text-dark fs-4 text-start me-auto">
                            <FontAwesomeIcon className="text-dark" icon={faColumns} />    Dashboard
                        </Navbar.Text>
                        <Navbar.Toggle className="me-auto text-start" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="me-auto text-start" id="responsive-navbar-nav">
                            <Nav className="d-flex flex-column" >
                                {admin ?
                                   <>
                                   <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/manageBlogs"> <i className="fas fa-shopping-bag"></i> Manange Blogs</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/blogsstatus"> <i className="fas fa-shopping-bag"></i>Status update</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/blogsaddAdmin"> <FontAwesomeIcon icon={faTasks} />Add Blogs(Admin)</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/makeadmin"><FontAwesomeIcon icon={faUserShield} /> Make Admin</Nav.Link><br />
                                   </>:
                                   <>
                                     <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/useraddblogs"> <FontAwesomeIcon icon={faTasks} /> Add Blogs</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/myblogs"> <FontAwesomeIcon icon={faTasks} />My blogs</Nav.Link><br />
                                    
                                   </>

                                  
                              }
                                <hr className="w-100 mx-auto text-dark" />
                                <h6 className="text-dark ">{admin ? <FontAwesomeIcon icon={faUserShield} /> : <FontAwesomeIcon icon={faUser} />}   {user.displayName}</h6>
                                <Link to="/"><Button variant="dark" onClick={logOut}><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button></Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </Col>
            <Col md={9} className="px-0">
                <Breadcrumb className="my-4  ms-3 home-Breadcrumb">
                    <Breadcrumb.Item href="/home" className="fs-4 ">Home</Breadcrumb.Item>
                    <Breadcrumb.Item className="fs-4"> Dashboard</Breadcrumb.Item>
                </Breadcrumb>
                <hr />
                <Outlet></Outlet>
            </Col>
        </Row>
    );
};

export default Dashboard;