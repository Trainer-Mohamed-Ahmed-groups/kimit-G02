import { useEffect, useState } from "react";
import axios from "axios";
import { Container, Row } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner';
import ViewProduct from "../components/ViewProduct";
export default function Contact() {

    const [username, setUsername] = useState("");
    const [products, setProducts] = useState([])

    let handleUsername = (ev) => {
        setUsername(ev.target.value)
    }

    useEffect(() => {
        console.log("Rendered");

        axios.get("https://api.escuelajs.co/api/v1/products").then((response) => {
            setProducts(response.data);
        });
    }, [])

    useEffect(() => {
        if (username === "") return;
        console.log("Updated")
    }, [username])

    useEffect(() => {
        return () => {
            console.log("Removed")
        }
    }, [])

    return (
        <div>
            <h2>Contact</h2>

            <input type="text" value={username} onChange={handleUsername} />
            {username}
            <Container>
                {
                    products.length === 0
                        ?
                        <Spinner className="m-5" animation="border" role="status" />
                        :
                        <Row>
                            {
                                products.map(product =>
                                    <ViewProduct product={product} key={product.id} />
                                )
                            }
                        </Row>
                }
            </Container>
        </div>
    )
}
