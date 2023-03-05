import "./index.scss";

type ButtonType = {
  children: String;
  color?: "black" | "red" | "green";
  type?: "button" | "submit" | "reset";
  size?: "s" | "m" | "l";
  onClick?: () => void;
};

const Button = ({
  children,
  onClick,
  type = "button",
  color = "black",
  size = "s",
}: ButtonType) => {
  return (
    <button className={`button ${size} ${color}`} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
