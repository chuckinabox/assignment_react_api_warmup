import React from "react";

const UserCard = ({ user, onDeleteUser, onEditUser }) => {
  const { first_name, last_name, avatar, id } = user;

  // Set the CSS max-width attribute directly in the
  // element. `style` accepts a JS object and the
  // attributes use camelcase. See docs for more info.
  // Also using new card class for Bootstrap 4.
  return (
    <div className="UserCard card" style={{ maxWidth: "128px" }}>
      <button onClick={onDeleteUser} value={id}>
        DELETE
      </button>
      <img className="card-img-top img-fluid" src={avatar} alt="user avatar" />
      <div className="card-block">
        <h4>
          {first_name} {last_name}
        </h4>
        <button onClick={onEditUser} value={id}>
          EDIT
        </button>
      </div>
    </div>
  );
};

export default UserCard;
