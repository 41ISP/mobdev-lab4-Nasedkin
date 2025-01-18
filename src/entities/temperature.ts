export interface ITemperature {
  LocalObservationDateTime: string
  EpochTime: number
  WeatherText: string
  WeatherIcon: number
  HasPrecipitation: boolean
  PrecipitationType: any
  IsDayTime: boolean
  Temperature: Temperature
  RealFeelTemperature: RealFeelTemperature
  RealFeelTemperatureShade: RealFeelTemperatureShade
  RelativeHumidity: number
  IndoorRelativeHumidity: number
  DewPoint: DewPoint
  Wind: Wind
  WindGust: WindGust
  UVIndex: number
  UVIndexText: string
  Visibility: Visibility
  ObstructionsToVisibility: string
  CloudCover: number
  Ceiling: Ceiling
  Pressure: Pressure
  PressureTendency: PressureTendency
  Past24HourTemperatureDeparture: Past24HourTemperatureDeparture
  ApparentTemperature: ApparentTemperature
  WindChillTemperature: WindChillTemperature
  WetBulbTemperature: WetBulbTemperature
  WetBulbGlobeTemperature: WetBulbGlobeTemperature
  Precip1hr: Precip1hr
  PrecipitationSummary: PrecipitationSummary
  TemperatureSummary: TemperatureSummary
  MobileLink: string
  Link: string
}

export interface Temperature {
  Metric: Metric
  Imperial: Imperial
}

export interface Metric {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial {
  Value: number
  Unit: string
  UnitType: number
}

export interface RealFeelTemperature {
  Metric: Metric2
  Imperial: Imperial2
}

export interface Metric2 {
  Value: number
  Unit: string
  UnitType: number
  Phrase: string
}

export interface Imperial2 {
  Value: number
  Unit: string
  UnitType: number
  Phrase: string
}

export interface RealFeelTemperatureShade {
  Metric: Metric3
  Imperial: Imperial3
}

export interface Metric3 {
  Value: number
  Unit: string
  UnitType: number
  Phrase: string
}

export interface Imperial3 {
  Value: number
  Unit: string
  UnitType: number
  Phrase: string
}

export interface DewPoint {
  Metric: Metric4
  Imperial: Imperial4
}

export interface Metric4 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial4 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Wind {
  Direction: Direction
  Speed: Speed
}

export interface Direction {
  Degrees: number
  Localized: string
  English: string
}

export interface Speed {
  Metric: Metric5
  Imperial: Imperial5
}

export interface Metric5 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial5 {
  Value: number
  Unit: string
  UnitType: number
}

export interface WindGust {
  Speed: Speed2
}

export interface Speed2 {
  Metric: Metric6
  Imperial: Imperial6
}

export interface Metric6 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial6 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Visibility {
  Metric: Metric7
  Imperial: Imperial7
}

export interface Metric7 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial7 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Ceiling {
  Metric: Metric8
  Imperial: Imperial8
}

export interface Metric8 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial8 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Pressure {
  Metric: Metric9
  Imperial: Imperial9
}

export interface Metric9 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial9 {
  Value: number
  Unit: string
  UnitType: number
}

export interface PressureTendency {
  LocalizedText: string
  Code: string
}

export interface Past24HourTemperatureDeparture {
  Metric: Metric10
  Imperial: Imperial10
}

export interface Metric10 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial10 {
  Value: number
  Unit: string
  UnitType: number
}

export interface ApparentTemperature {
  Metric: Metric11
  Imperial: Imperial11
}

export interface Metric11 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial11 {
  Value: number
  Unit: string
  UnitType: number
}

export interface WindChillTemperature {
  Metric: Metric12
  Imperial: Imperial12
}

export interface Metric12 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial12 {
  Value: number
  Unit: string
  UnitType: number
}

export interface WetBulbTemperature {
  Metric: Metric13
  Imperial: Imperial13
}

export interface Metric13 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial13 {
  Value: number
  Unit: string
  UnitType: number
}

export interface WetBulbGlobeTemperature {
  Metric: Metric14
  Imperial: Imperial14
}

export interface Metric14 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial14 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Precip1hr {
  Metric: Metric15
  Imperial: Imperial15
}

export interface Metric15 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial15 {
  Value: number
  Unit: string
  UnitType: number
}

export interface PrecipitationSummary {
  Precipitation: Precipitation
  PastHour: PastHour
  Past3Hours: Past3Hours
  Past6Hours: Past6Hours
  Past9Hours: Past9Hours
  Past12Hours: Past12Hours
  Past18Hours: Past18Hours
  Past24Hours: Past24Hours
}

export interface Precipitation {
  Metric: Metric16
  Imperial: Imperial16
}

export interface Metric16 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial16 {
  Value: number
  Unit: string
  UnitType: number
}

export interface PastHour {
  Metric: Metric17
  Imperial: Imperial17
}

export interface Metric17 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial17 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past3Hours {
  Metric: Metric18
  Imperial: Imperial18
}

export interface Metric18 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial18 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past6Hours {
  Metric: Metric19
  Imperial: Imperial19
}

export interface Metric19 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial19 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past9Hours {
  Metric: Metric20
  Imperial: Imperial20
}

export interface Metric20 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial20 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past12Hours {
  Metric: Metric21
  Imperial: Imperial21
}

export interface Metric21 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial21 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past18Hours {
  Metric: Metric22
  Imperial: Imperial22
}

export interface Metric22 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial22 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past24Hours {
  Metric: Metric23
  Imperial: Imperial23
}

export interface Metric23 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial23 {
  Value: number
  Unit: string
  UnitType: number
}

export interface TemperatureSummary {
  Past6HourRange: Past6HourRange
  Past12HourRange: Past12HourRange
  Past24HourRange: Past24HourRange
}

export interface Past6HourRange {
  Minimum: Minimum
  Maximum: Maximum
}

export interface Minimum {
  Metric: Metric24
  Imperial: Imperial24
}

export interface Metric24 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial24 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Maximum {
  Metric: Metric25
  Imperial: Imperial25
}

export interface Metric25 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial25 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past12HourRange {
  Minimum: Minimum2
  Maximum: Maximum2
}

export interface Minimum2 {
  Metric: Metric26
  Imperial: Imperial26
}

export interface Metric26 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial26 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Maximum2 {
  Metric: Metric27
  Imperial: Imperial27
}

export interface Metric27 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial27 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Past24HourRange {
  Minimum: Minimum3
  Maximum: Maximum3
}

export interface Minimum3 {
  Metric: Metric28
  Imperial: Imperial28
}

export interface Metric28 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial28 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Maximum3 {
  Metric: Metric29
  Imperial: Imperial29
}

export interface Metric29 {
  Value: number
  Unit: string
  UnitType: number
}

export interface Imperial29 {
  Value: number
  Unit: string
  UnitType: number
}