import React from 'react'
import {Container, Card, Row, Col, CardBody} from 'react-bootstrap'

const Inicial = () => {
  return (
    <Container className='py-4'>
        {/*Carousel do banner*/ }
        <Card className='mb-4 shadow-sm'>
            <Card.Body>
                <p>
                    A Faculdade UNIESP é uma instituição comprometida em fornecer educação de qualidade, com foco no desenvolvimento profissional e pessoal...
                </p>
                <p>
                    Contamos com uma equipe de professores qualificados, uma infraestrutura moderna e uma metodologia de ensino que valoriza o aprendizado prático...
                </p>
                <p>
                    A seguir, conheça mais sobre as áreas e as oportunidades que a Faculdade UNIESP oferece para você.
            </p>
            </Card.Body>
        </Card>

        <Row className='g-4'>
            <Col md={4}>
                {/*Card 1 */}
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img
                        variant='top'
                        src=' https://images.unsplash.com/photo-1556761175-4b46a572b786'
                        alt='Campus Life'
                        style={{height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Vida no Campus
                        </Card.Title>
                        <Card.Text>
                            Um ambiente vibrante e acolhedor, vai corinthians!!!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                {/*Card 2 */}
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img
                        variant='top'
                        src='   https://images.unsplash.com/photo-1571260899304-425eee4c7efc'
                        alt='library'
                        style={{height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Biblioteca
                        </Card.Title>
                        <Card.Text>
                            Um ambiente vibrante e acolhedor, vai corinthians!!!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            <Col md={4}>
                {/*Card 3 */}
                <Card className='text-center h-100 shadow-sm'>
                    <Card.Img
                        variant='top'
                        src='  https://images.unsplash.com/photo-1652974731232-efc86a9bd985'
                        alt='Campus Life'
                        style={{height: '200px', objectFit: 'cover'}}
                    />
                    <Card.Body>
                        <Card.Title>
                            Predio Principal
                        </Card.Title>
                        <Card.Text>
                            Um ambiente vibrante e acolhedor, vai corinthians!!!
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        {/**segunda linha com 2 colunas(para os cards ficarem lado a lado) */}
        <Row className='g-4 mt-4'>
            {/**card 1 */}
            <Col md={6}>
                <Card className='h-100 shadow-sm'>
                    <Card.Body className='text-center'>
                        <Card.Title>Parcerias com Empresas</Card.Title>
                        <Card.Text>
                            ...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
            {/**card 2 */}
            <Col md={6}>
                <Card className='h-100 shadow-sm'>
                    <Card.Body className='text-center'>
                        <Card.Title>Compromisso com a Educação</Card.Title>
                        <Card.Text>
                            ...
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
  )
}

export default Inicial