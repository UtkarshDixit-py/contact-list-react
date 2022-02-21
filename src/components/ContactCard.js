import { useContactsCrud } from "../context/ContactsCrudContext";
import { Link } from "react-router-dom";

const ContactCard = (props) => {
  const { id, name, email } = props.contact; //destructering
  const { deleteContactHandler } = useContactsCrud();

  const deleteContact = (id) => {
    deleteContactHandler(id);
  };

  return (
    <div className="card">
      <div className="content">
        <div className="center aligned header">{name}</div>
        <div className="center aligned">{email}</div>
      </div>
      <div class="extra content">
        <div class="ui two buttons">
          <div class="ui basic blue button">
            <Link to={`/edit`} state={{ contact: props.contact }}>
              <i
                className="edit alternate outline icon"
                style={{ color: "blue" }}
              ></i>
            </Link>
          </div>
          <div class="ui basic red button">
            <i
              className="trash alternate outline icon"
              style={{ color: "red" }}
              onClick={() => deleteContact(id)}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ContactCard;
