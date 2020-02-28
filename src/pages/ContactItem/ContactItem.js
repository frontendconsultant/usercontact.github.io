import React from "react";
import PropTypes from "prop-types";
import "./ContactItem.css";

const ContactItem = ({ name, email, phone, pic, location }) => (
  <div class="card">
  <div class="row">
    <div class="avatar-container">
      <div class="photo">
        <img alt="avatarImg" class="img" src={pic} />
      </div>
    </div>
    <div class="details-container">
      <div class="content">
        <h2>{name}</h2>
        <p>e-mail: {email}</p>
        <p>phone: {phone}</p>
        <p>street: {`${location.street.number}, ${location.street.name}`}</p>
        <p>city: {location.city}</p>
        <p>state: {location.state}</p>
        <p>postcode: {location.postcode}</p>

      </div>
    </div>
  </div>
</div>
);

ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  phone: PropTypes.string
};

export default ContactItem;
