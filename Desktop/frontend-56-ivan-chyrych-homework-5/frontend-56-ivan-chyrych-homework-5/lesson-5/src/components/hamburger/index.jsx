import './index.scss';
import { IoIosCloseCircleOutline } from "react-icons/io";
import { IoIosMenu } from "react-icons/io";
export function Hamburger(props) {
  const icon = props.variant == 'Active' ? <IoIosCloseCircleOutline /> : <IoIosMenu />;
  return <div className="hamburger">{icon}</div>;
}
