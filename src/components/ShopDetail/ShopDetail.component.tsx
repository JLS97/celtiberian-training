import React from "react";
import { useParams } from "react-router";

function ShopDetail() {
    const {id} = useParams();

    return <p>{id}</p>
}

export default ShopDetail;