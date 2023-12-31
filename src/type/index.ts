export type StuffCategory = {
  id: number
  rank: number
  name: string
  icon: string
  propertyLimitedNumber: number
  propertyRegistrationNumber: number
  wantRegistrationNumber: number
  wantTotalAmount: number
}

export type StuffProperty = {
  id: number
  name: string
  thumbnail: string
  score: number
  price: number
  address: string
  purchaseDate: string
  purchasePlace: string
}

export type StuffWant = {
  id: number
  name: string
  thumbnail: string
  score: number
  price: number
  brand: string
  url: string
  conditions: {
    id: number
    asset: string
    period: string
    property: number
  }
}

export type Memo = {
  id: number
  fiveW: string[]
  image: string
  memo: string
}

export type AssetCategory = {
  id: number
  name: string
  price: number
  registrationNumber: number
  categoryId: number
}
