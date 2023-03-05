import { gql } from "@apollo/client";

export const GET_CONTINENTS = gql`
  query getContinentName {
    continents {
      code
      name
    }
  }
`;

export const GET_COUNTRIES = gql`
query getCountries ($code: ID!) {
  continent(code: $code) {
    name
    countries {
      code
      name
    }
  }
}`;

export const GET_COUNTRY_DETAILS = gql`
query getCountryDetails($code: ID!) {
  country(code: $code) {
    name
    native
    phone
    currency
    emoji
    emojiU
    capital
  }
}`;


