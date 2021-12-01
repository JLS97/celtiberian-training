export interface Shop {
    storeID: String
    storeName: String
    isActive: Number
    images: Images
}

export interface Images {
    banner: String
    logo: String
    icon: String
}

export interface Game {
    title: String
    metacriticLink: String
    dealID: String
    storeID: String
    gameID: String
    salePrice: String
    normalPrice: String
    isOnSale: String
    savings: String
    metacriticScore: String
    steamRatingText: String
    steamRatingPercent: String
    dealRating: String
    thumb: String
}

export interface GetShopsResponse {
    data: Shop[]
}