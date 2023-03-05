import { useQuery } from "@apollo/client";
import { GET_CONTINENTS } from "../../apollo/queries";
import { ContinentCard, Error, Loading } from "../../components";
import { ContinentType } from "../../types";

import './index.scss';

const Home = () => {
  const { loading, error, data } = useQuery(GET_CONTINENTS);

  if (loading) return <Loading />;
  if (error) return <Error />;

  return (
    <div className="home">
      <div className="wrapper">
        {data.continents.map(({ name, code }: ContinentType) => {
          return <ContinentCard key={name} name={name} code={code} />;
        })}
      </div>
    </div>
  );
};

export default Home;
