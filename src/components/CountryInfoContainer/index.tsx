import { GetCountryDetailsResult } from "../../types";
import Error from "../Error";
import Loading from "../Loading";

import "./index.scss";

type CountryElementType = [string, string];

type CountryDetailType = CountryElementType[] | [];

const CountryInfoContainer = ({
  loading,
  error,
  data,
}: GetCountryDetailsResult) => {
  let details: CountryDetailType = [];
  
  if (data) {
    details = Object.entries(data.country);
    details = details.filter((el) => {
      return el[0] !== "__typename";
    });
  }

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="country-info-container">
      <ul>
        {details.map((detail, index) => {
          return (
            <li key={index}>
              <span>{detail[0]} :</span>
              <span> {detail[1]}</span>
            </li>
          );
        })}
        {!details.length && <span> Please choose some country </span>}
      </ul>
    </div>
  );
};

export default CountryInfoContainer;
