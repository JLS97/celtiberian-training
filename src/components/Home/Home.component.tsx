import React, {useEffect} from "react";
import CardComp from "../CardComp/CardComp.component";
import styles from './styles.module.css'
import Store from "../../Store";
import { view } from "@risingstack/react-easy-state";

const Home: React.FC = () => {
  
  useEffect(() => {
    Store.getShopsData()
  }, [])

  return (
    <div className={`container d-flex flex-wrap align-items-center ${styles.home}`}>
        {Store.data.map((shop,i) => (
        <CardComp key={shop.storeName + i.toString()} shopId={shop.storeID} photo={shop.images.logo}></CardComp>
    ))}
    </div>
  )

}

export default view(Home)
