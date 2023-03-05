import { Link } from "react-router-dom";
import { ContinentType } from "../../types";
import { Button } from "../../ui";

const ContinentCard = ({ name, code }: ContinentType) => {
  return (
    <Link to={`/${code}`}>
      <Button size='l'>{name}</Button>
    </Link>
  );
};

export default ContinentCard;
