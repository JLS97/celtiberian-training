import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardComp = (props) => {
    const { shopId, photo } = props;
    return(
        <Card className={`bg-dark text-white`}>
            <Card.Img variant="top" src={"https://www.cheapshark.com"+photo}/>
            <Card.Body>
                <Link to={`/shop/${shopId}`}>
                    <Button variant="primary">See offers</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default CardComp;