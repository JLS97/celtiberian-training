import axios from "axios";
import React from "react";

export default class Home extends React.Component{
    state = {
        shops: [] as any,
    }
    
    componentDidMount = () =>axios.get('https://www.cheapshark.com/api/1.0/stores').then(res => { this.setState({ shops : res.data })})

    render() {
        return (
            <div>
                {this.state.shops.map((shop:any,i:number) =>{
                    return (
                        <p key={shop.storeName + i}>{shop.storeName}</p>
                    )
                })}
            </div>
        );
    }
}