import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY_DETAILS } from "../../apollo/queries";
import { CountryInfoContainer, CountryListContainer } from "../../components";

import "./index.scss";

const ContinentPage = () => {
  const [getCountryDetails, { loading, error, data }] =
    useLazyQuery(GET_COUNTRY_DETAILS);

  const onCountryClick = (code: string) => {
    getCountryDetails({ variables: { code } });
  };

  return (
    <div className="continent-page">
      <CountryListContainer onCountryClick={onCountryClick} />
      <CountryInfoContainer loading={loading} error={error} data={data} />
    </div>
  );
};

export default ContinentPage;
