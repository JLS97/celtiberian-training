export interface Shop {
    storeID: String,
    storeName: String,
    isActive: Number,
    images: Images
}

export interface Images {
    banner: String,
    logo: String,
    icon: String
}

export interface Games {

}

export interface GetShopsResponse {
    data: Shop[]
}