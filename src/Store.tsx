import { store } from '@risingstack/react-easy-state'
import { Shop } from './interfaces'
import { getShops } from './api'

interface StoreInterface {
    data: Shop[],
    getShopsData: () => Promise<void>
    clear: () => void
}

const Store = store<StoreInterface>({
    data: [],
    getShopsData: async () => {
        const shops  = await getShops()
        Store.data = [...Store.data, ...shops]
    },
    clear: () => {
        Store.data = []
    },
})

export default Store
