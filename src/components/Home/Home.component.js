import {useEffect} from "react";
import CardComp from "../CardComp/CardComp.component";
import styles from './styles.module.css'
import useFetch from "../../services/useFetch";

export default function Home (){

    const [state, fetchShops] = useFetch();

    useEffect(
        function () {
            fetchShops({
                url : "https://www.cheapshark.com/api/1.0/stores",
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
    if(state.success) {
        return (
            <div className={`container d-flex flex-wrap align-items-center ${styles.home}`}>
            {state.data.map((shop,i) =>{
                return (
                    <CardComp key={shop.storeName + i} shopId={shop.storeID} photo={shop.images.logo}></CardComp>
                )
            })}
        </div>
        )
    }
    return null;
}