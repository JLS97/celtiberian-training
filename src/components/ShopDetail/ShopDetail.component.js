import { useParams } from "react-router"
import useFetch from "../../services/useFetch";
import { useEffect } from "react";

import loading from "../../loading.gif"

export default function ShopDetail() {

    const { id } = useParams();

    const [state, fetchShops] = useFetch();

    useEffect(
        function () {
            fetchShops({
                url : "https://www.cheapshark.com/api/1.0/deals?storeID="+id,
                method : "GET"
            });
        },
        [fetchShops]
    )

    if(state.loading) {
        return (<img src="../../loading.gif"></img>)
    }
    if(state.error) {
        return (<h2>La llamada ha fallado</h2>)
    }
    if(!state.data || state.data.length <= 0) {
        return (
            <div>
                <h2>No data availeable</h2>
                <p>It seems that this store has no games offers right now.</p>
                <p>Please stay tunned and come back at any another time.</p>
                <p>You can also visit any other <a href="/shops">shop.</a></p>
            </div>
        )
    }
    if(state.success && state.data.length > 0) {
        return (
            <div>
                {state.data.map((shop,i) =>{
                    return (
                        <p key={shop.title + i}>{shop.title}</p>
                    )
                })}
            </div>
        )
    }
    return null;
}