export type CountryDataType = {
    date: string,
    newConfirmed: number,
    totalConfirmed: number,
    newRecovered: number,
    totalRecovered: number,
}
  
export type AllCountriesDataType = {
    Country: string,
    NewConfirmed: number,
    TotalConfirmed: number,
}[]

type CountriesJsonType = {
    Country: string,
    Slug: string,
}[]

export type TopPageType = {
    countriesJson: CountriesJsonType,
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countryData: CountryDataType,
    loading: boolean,
}

export type SelectorType = {
    setCountry: React.Dispatch<React.SetStateAction<string>>,
    countriesJson: CountriesJsonType,
}

export type ResultsType = {
    countryData: CountryDataType,
    loading: boolean,
}


export type WorldPageType = {
    allCountriesData: AllCountriesDataType,
}

export type CardType = {
    allCountriesData: AllCountriesDataType,
  }