import { GetShopsResponse } from "../interfaces"
import axios from "axios"
import config from "../config"

const SHOPS_ENDPOINT =  `${config.BACKEND_URL}/api/1.0/stores`

export const getShops = async (): Promise<[]> => {
    const {data} =  await axios.get<[]>(SHOPS_ENDPOINT, {})
    return data
}
