import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";

import { GET_COUNTRIES } from "../../apollo/queries";
import { ContinentType } from "../../types";
import { Button } from "../../ui";
import Error from "../Error";
import Loading from "../Loading";

import "./index.scss";

const CountryListContainer = ({
  onCountryClick,
}: {
  onCountryClick: (code: string) => void;
}) => {
  const { code } = useParams();
  const { loading, error, data } = useQuery(GET_COUNTRIES, {
    variables: {
      code,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <ol className="country-list-container">
      {data.continent.countries.map(({ name, code }: ContinentType) => {
        return (
          <li key={code}>
            <Button onClick={() => onCountryClick(code)}>{name}</Button>
          </li>
        );
      })}
    </ol>
  );
};

export default CountryListContainer;
