import { useDispatch } from "react-redux";
import { changeAmount } from "../../redux/cartSlice";
import "./amount.scss";

function Amount({ increment, index }) {
  const dispatch = useDispatch();
  const onClickChangeAmount = (increment, index) => {
    dispatch(changeAmount({ increment, index }));
  };
  return (
    <span
      className="amount-btn"
      onClick={() => onClickChangeAmount(increment, index)}
    >
      {increment === 1 ? "+" : "-"}
    </span>
  );
}

export default Amount;
