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
}
