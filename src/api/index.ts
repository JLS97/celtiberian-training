import axios from "axios"
import config from "../config"

const SHOPS_ENDPOINT =  `${config.BACKEND_URL}/stores`
const SHOPSDETAIL_ENDPOINT = `${config.BACKEND_URL}/deals`

export const getShops = async (): Promise<[]> => {
    const {data} =  await axios.get<[]>(SHOPS_ENDPOINT, {})
    return data
}

export const getShopDetail = async (id: String | undefined): Promise<[]> => {
    const {data} = await axios.get<[]>(SHOPSDETAIL_ENDPOINT, { params: { storeID: id }})
    return data
}
