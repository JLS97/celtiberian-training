import axios from "axios";
import React from "react";
import CardComp from "../CardComp/CardComp.component";
import styles from './styles.module.css'

export default class Home extends React.Component{
    state = {
        shops: [] as any,
    }
    
    componentDidMount = () =>axios.get('https://www.cheapshark.com/api/1.0/stores').then(res => { this.setState({ shops : res.data })})
    
    render() {
        return (
             <div className={`container d-flex flex-wrap align-items-center ${styles.home}`}>
                {this.state.shops.map((shop:any,i:number) =>{
                    return (
                        <CardComp key={shop.storeName + i} shopId={shop.storeID} photo={shop.images.logo}></CardComp>
                    )
                })}
            </div>
        );
    }
}