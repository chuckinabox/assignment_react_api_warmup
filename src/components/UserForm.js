import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import Alert from "./elements/Alert";

const UserForm = ({
  onSubmit,
  error,
  editAbleUser,
  onSaveEditUser,
  onChange,
  first_name,
  last_name,
  id,
  avatar
}) => {
  if (editAbleUser) {
    return (
      <form className="container" onSubmit={onSaveEditUser}>
        <h1>Edit this User</h1>
        <input type="hidden" name="id" value={id} />
        <Alert type="danger" error={error}>
          Oops, there was a problem...
        </Alert>
        <InputGroup name="first_name" labelText="First Name">
          <Input name="first_name" value={first_name} onChange={onChange} />
        </InputGroup>
        <InputGroup name="last_name" labelText="Last Name">
          <Input name="last_name" value={last_name} onChange={onChange} />
        </InputGroup>
        <InputGroup name="avatar" labelText="Photo Link">
          <Input name="avatar" value={avatar} onChange={onChange} />
        </InputGroup>
        <Button type="submit" color="primary">
          Save User
        </Button>
      </form>
    );
  } else {
    return (
      <form className="container" onSubmit={onSubmit}>
        <h1>Add New User</h1>
        <Alert type="danger" error={error}>
          Oops, there was a problem...
        </Alert>
        <InputGroup name="first_name" labelText="First Name">
          <Input name="first_name" value={first_name} onChange={onChange} />
        </InputGroup>
        <InputGroup name="last_name" labelText="Last Name">
          <Input name="last_name" value={last_name} onChange={onChange} />
        </InputGroup>
        <InputGroup name="avatar" labelText="Photo Link">
          <Input name="avatar" value={avatar} onChange={onChange} />
        </InputGroup>
        <Button type="submit" color="primary">
          Save User
        </Button>
      </form>
    );
  }
};

export default UserForm;
