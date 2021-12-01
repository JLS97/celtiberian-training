import { store } from '@risingstack/react-easy-state'
import { getShops, getShopDetail } from './api'

interface StoreInterface {
    data: []
    detail: []
    getShopsData: () => Promise<void>
    getShopDetail: (id: String | undefined) => Promise<void>
    clear: () => void
}

const Store = store<StoreInterface>({
    data: [],
    detail: [],
    getShopsData: async () => {
        Store.data = []
        const shops  = await getShops()
        Store.data = [...Store.data, ...shops]
    },
    getShopDetail: async (id) => {
        Store.detail = []
        const games = await getShopDetail(id)
        Store.detail = [...Store.detail, ...games]
    },
    clear: () => {
        Store.data = []
    },
})

export default Store
