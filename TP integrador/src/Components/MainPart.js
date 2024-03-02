
import CozyLogo from "./IMG/CozyLogo.png"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card'
import Angel from './IMG/Angel.jpg'
import CardGroup from 'react-bootstrap/CardGroup'
import Eminem from './IMG/Eminem.jpg'
import instawhite from './IMG/inta_white.png'
import instagram from './IMG/Instagram-Icon.png'
import Slider from "react-slick";

function MainPart() {
    




    return(
        <>
            <Container>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <img alt='COzy' src={CozyLogo}></img>
                    </Col>
                </Row>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <Card>
                            <Card.Body>
                                <Card.Title className="mx-auto" style={{fontSize:"30px"}}> ¡Hola! y Bienvenido </Card.Title>
                                <Card.Text style={{fontSize:"24px"}}> Nosotros somos CozyStar, un emprendimiento de Buzos oversize que abrimos en 2023. </Card.Text>
                            </Card.Body>
                            <Card.Footer>Hacemos envios a todo el país, ¿Querés saber más? Ingresa a nuestro foro haciendo click <a href="/">aqui</a></Card.Footer>
                        </Card>
                    </Col>
                </Row><div style={{height:"300px"}}></div>
                <Row className="justify-content-md-center">
                    <Col md="auto">
                        <h1 className="mx-auto">¡Echá un vistazo a nuestros buzos!</h1>
                        <CardGroup>
                            <Card style={{width:"400px", margin:"20px"}}>
                                <Card.Img variant="top" src={Angel} ></Card.Img>
                                <Card.Body>
                                    <Card.Title>BUZO "PARANOIA"</Card.Title>
                                    <Card.Text>Precio $14500</Card.Text>
                                </Card.Body>
                            </Card>
                            <Card style={{width:"400px", margin:"20px"}}>
                                <Card.Img variant="top" src={Eminem}></Card.Img>
                                <Card.Body>
                                <Card.Title>BUZO "EMINEM"</Card.Title>
                                <Card.Text>Precio $14500</Card.Text>
                                </Card.Body>
                            </Card>
                        
                        </CardGroup>
                    </Col>
                </Row>
                <div style={{height:"300px"}}></div>
                <div>
                </div>
            </Container>
            <footer style={{backgroundColor:"black", color: 'rgb(255, 240, 171)', marginBottom:"0px", paddingBottom:"30px"}}>
            <h1 style={{paddingTop:"40px", }}>Podes contactarnos y ver más fotos de nuestros buzos en nuestro <a href='https://instagram.com/cozystar.co?igshid=MmU2YjMzNjRlOQ=='>instagram</a></h1>
            <a href="https://instagram.com/cozystar.co?igshid=MmU2YjMzNjRlOQ==" target="_blank" rel="noopener noreferrer">
                <img src={instawhite} alt="instagram" onMouseOver={e => (e.currentTarget.src = instagram)} onMouseOut={e => (e.currentTarget.src = instawhite)} style={{height:"100px"}}></img>
                </a>
            </footer>
        </>
    )
}

export default MainPart;