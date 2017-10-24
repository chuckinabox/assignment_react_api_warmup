import React from "react";

import JumbotronFluid from "./elements/JumbotronFluid";
import UserList from "./elements/UserList";
import UserForm from "./UserForm";

const App = ({
  onAddUser,
  onDeleteUser,
  onEditUser,
  onSaveEditUser,
  onChange,
  users,
  isFetching,
  error,
  editAbleUser,
  first_name,
  last_name,
  avatar,
  id
}) => (
  <div className="App">
    <JumbotronFluid
      heading="User CRUD"
      lead="Using an API for User CRUD operations"
    />
    <UserList
      users={users}
      onDeleteUser={onDeleteUser}
      onEditUser={onEditUser}
      isFetching={isFetching}
    />
    <br />
    <UserForm
      onSubmit={onAddUser}
      error={error}
      editAbleUser={editAbleUser}
      onSaveEditUser={onSaveEditUser}
      onChange={onChange}
      first_name={first_name}
      last_name={last_name}
      avatar={avatar}
      id={id}
    />
  </div>
);

export default App;
