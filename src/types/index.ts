import { ApolloError } from "@apollo/client";

export type ContinentType = {
  name: string;
  code: string;
};

export type CountryDetailsData = {
  country: {
    name: string;
    native: string;
    phone: string;
    currency: string;
    emoji: string;
    emojiU: string;
    capital: string;
    __typename: string;
  };
}

export type GetCountryDetailsResult = {
  loading: boolean;
  error?: ApolloError;
  data?: CountryDetailsData;
}
