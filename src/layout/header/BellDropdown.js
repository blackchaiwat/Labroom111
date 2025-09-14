import { Bell, MessageCircle, ThumbsUp } from "react-feather";
import { All, Notification } from "../../constant";
import useOutsideDropdown from "../../services/useOutsideDropdown";
const BellDropdown = () => {
  const { ref, isComponentVisible, setIsComponentVisible } =
    useOutsideDropdown(false);
  return (
    <>
      <div ref={ref} className={`dropdown notification-menu  ${isComponentVisible && "show"}`}>
        <a
          href="#javascript"
          onClick={() => {
            setIsComponentVisible(!isComponentVisible);
          }}
        >
          <Bell />
          <span className="notification badge rounded-pill badge-danger f-10">
            {"2"}
          </span>
        </a>
        <div className={`p-0 dropdown-menu ${isComponentVisible && "show"} `}>
        <ul className="notification-dropdown">
            <li className="gradient-primary-1">
              <h6>{Notification}</h6>
              <span>{"You have 6 unread messages"}</span>
            </li>
            <li>
              <div className="media">
                <div className="notification-icons bg-success me-3">
                  <ThumbsUp className="mt-0" />
                </div>
                <div className="media-body">
                  <h6>{"Someone Likes Your Posts"}</h6>
                  <p className="mb-0"> {"2 Hours Ago"}</p>
                </div>
              </div>
            </li>
            <li className="pt-0">
              <div className="media">
                <div className="notification-icons bg-info me-3">
                  <MessageCircle className="mt-0" />
                </div>
                <div className="media-body">
                  <h6>{"3 New Comments"}</h6>
                  <p className="mb-0"> {"1 Hours Ago"}</p>
                </div>
              </div>
            </li>
            <li className="bg-light txt-dark">
              <a href="/#">{All} </a> {Notification}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BellDropdown;
