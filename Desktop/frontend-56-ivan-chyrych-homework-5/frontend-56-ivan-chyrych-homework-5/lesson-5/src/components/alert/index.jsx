import './index.scss';
import {IoIosCloseCircleOutline} from 'react-icons/io';
import {GoAlert} from 'react-icons/go';
import {GoInfo} from 'react-icons/go';
import {GiConfirmed} from 'react-icons/gi';
import {IoMdNotificationsOutline} from 'react-icons/io';
import {FiSlash} from 'react-icons/fi';
export function Alert({children, variant}) {
  const icons = {
    alert: [<GoAlert />, 'alert'],
    error: [<FiSlash />, 'error'],
    confirm: [<GiConfirmed />, 'confirm'],
    warning: [<GoInfo />, 'warning'],
    notice: [<IoMdNotificationsOutline />, 'notice'],
  };
  const choice = variant ? icons[variant] : icons[error];
  return (
    <div className={`alertContainer ${choice[1]}`}>
      <div className="icon">{choice[0]}</div>
      {children}
      <div className="closeIcon">
        <IoIosCloseCircleOutline />
      </div>
    </div>
  );
}