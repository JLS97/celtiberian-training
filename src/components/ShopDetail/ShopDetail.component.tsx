import React from "react";
import axios from "axios";
import { useParams } from "react-router";

function ShopDetail() {
    const {id} = useParams();
    var games: any[] = [];
    
    const componentDidMount = () =>{axios.get('https://www.cheapshark.com/api/1.0/deals?storeID='+id).then(res =>{games = res.data})}

    return (
        <div>HOLA
        {games.map((shop:any,i:number) =>{
            return (
                <p key={shop.title + i}>{shop.title}</p>
            )
        })}
    </div>
    )
}

export default ShopDetail;