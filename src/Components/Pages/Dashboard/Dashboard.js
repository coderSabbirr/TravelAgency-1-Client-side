import { faColumns, faComment, faFileInvoice, faFolderPlus, faShoppingCart, faSignOutAlt, faTasks, faUser, faUserShield } from '@fortawesome/free-solid-svg-icons';
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

                        <Navbar.Brand className="text-dark me-auto fs-2 fw-bold" href="/home">UNIQUE<span className="text-danger">SHOP</span></Navbar.Brand>
                        <hr className="w-100 bg-white" />

                        <Navbar.Text className="text-dark my-1 fs-4 text-start me-auto">
                            <FontAwesomeIcon className="text-dark" icon={faColumns} />    Dashboard
                        </Navbar.Text>

                        <Navbar.Toggle className="me-auto text-start" aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse className="me-auto text-start" id="responsive-navbar-nav">
                            <Nav className="d-flex flex-column fs-6">
                                {/* {!admin && <>  */}
                                <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/myorders"><FontAwesomeIcon icon={faShoppingCart} /> My Orders</Nav.Link> <br />

                                <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/addreview"> <FontAwesomeIcon icon={faComment} /> Add Review</Nav.Link><br />


                                <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/payment"><FontAwesomeIcon icon={faFileInvoice} /> Payment</Nav.Link><br />
                                {/* </>} */}
                                {admin && <div>
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/manageorders"> <i className="fas fa-shopping-bag"></i> Manage  Orders</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/manageallproducts"> <FontAwesomeIcon icon={faTasks} /> Manage Products</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/addnewproduct"><FontAwesomeIcon icon={faFolderPlus} /> Add A Product</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/reviews"> <FontAwesomeIcon icon={faComment} /> Review</Nav.Link><br />
                                    <Nav.Link className='text-dark fw-bold' as={Link} to="/dashboard/makeadmin"><FontAwesomeIcon icon={faUserShield} /> Make Admin</Nav.Link><br />
                                </div>}
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