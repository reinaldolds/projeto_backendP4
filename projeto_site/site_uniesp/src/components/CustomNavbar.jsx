import React, { useState } from 'react'
import { Container, Nav, Navbar} from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CustomNavbar = () => {
    const [show, setShow] = useState(false)
    const handleClose = () => setShow(false)
    const handleShow = () => setShow(true)
  return (
    <>
        <Navbar expand='md' style={{background: '#002f6c'}} variant='dark' className='px-3 shadow-sm'>
            <Container fluid>
                <Navbar.Brand as={Link} to='/' className='d-flex align-items-center'>
                    <img src='/uniesp.jpg' alt='Uniesp' width={60} height={60} className='me-2 rounded' />
                    {/*<span style={{fontSize: '1.25rem'}}>SITE FICTICIO - dISCIPLINA FRONT-END React</span>}*/}
                </Navbar.Brand>
                {/**butão hamburger visivel apenas em telas pequenas */}
                <Navbar.Toggle onClick={handleShow} />
                    <Navbar.Collapse className='justity-content-end d-none d-md-flex'>
                        <Nav>
                            <Nav.Link as={Link} to='/a-faculdade' className='px-3'>A Faculdade</Nav.Link>
                            <Nav.Link as={Link} to='/dpo-lgpd' className='px-3'>DPO LGPD</Nav.Link>
                            <Nav.Link as={Link} to='/noticias' className='px-3'>Notícias</Nav.Link>
                            <Nav.Link as={Link} to='/admin-noticias' className='px-3'>Admin</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default CustomNavbar