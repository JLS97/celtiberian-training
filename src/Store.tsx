import { store } from '@risingstack/react-easy-state'
import { Shop } from './interfaces'
import { getShops } from './api'

interface StoreInterface {
    data: Shop[],
    getShops: () => Promise<void>
    clear: () => void
}

const Store = store<StoreInterface>({
    data: [],
    getShops: async () => {
        const { data } = await getShops()
        Store.data = [...Store.data, ...data]
    },
    clear: () => {
        Store.data = []
    },
})

export default Store
