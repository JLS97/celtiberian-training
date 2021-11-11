import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from './styles.module.css'

const CardComp = (props: any) => {
    const {shopId} = props;
    const {photo} = props;
    return(
        <Card className={`bg-dark text-white ${styles.cardContainer}`}>
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