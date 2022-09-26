export interface VerifiedPartnerResponse {
  data: VerifiedPartner[]
}

export interface VerifiedPartner {
  id: number
  date_created: Date
  date_updated: Date
  name: string
  description: string
  logo: string
  team_size: TeamSize
  services: Service[]
  region: Region
  country: string
  languages: string[]
  payment_methods: PaymentMethod[]
  website: null | string
  youtube: null | string
  email: null | string
  twitter: null | string
  instagram: null | string
  linkedin: null | string
  discord: null | string
  opensea: null | string
  sketchfab: null | string
  parcel: null | string
  marketplace: null
  status: Status
  user: string
}

export enum PaymentMethod {
  CreditCard = 'Credit Card',
  Crypto = 'Crypto',
  PayPal = 'PayPal',
  WireTransfer = 'Wire Transfer'
}

export enum Region {
  Asia = 'Asia',
  CentralAmerica = 'Central America',
  Europe = 'Europe',
  LatinAmerica = 'Latin America',
  NorthAmerica = 'North America',
  Oceania = 'Oceania',
  Russia = 'Russia',
  SouthAmerica = 'South America'
}

export enum Service {
  Architecture = 'Architecture',
  Consulting = 'Consulting',
  EventProduction = 'Event Production',
  LandRental = 'Land Rental',
  WearableDesign = 'Wearable Design'
}

export enum Status {
  Published = 'published'
}

export enum TeamSize {
  Individual = 'Individual',
  LargeStudio = 'Large Studio',
  LargeTeam = 'Large Team',
  MediumStudio = 'Medium Studio',
  SmallStudio = 'Small Studio',
  SmallTeam = 'Small Team'
}
