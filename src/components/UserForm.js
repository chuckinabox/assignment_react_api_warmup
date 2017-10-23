import React from "react";
import Input from "./elements/Input";
import InputGroup from "./elements/InputGroup";
import Button from "./elements/Button";
import Alert from "./elements/Alert";

const UserForm = ({ onSubmit, error }) => (
  <form className="container" onSubmit={onSubmit}>
    <h1>Add New User</h1>
    <Alert type="danger" error={error}>
      Oops, there was a problem...
    </Alert>
    <InputGroup name="first_name" labelText="First Name">
      <Input name="first_name" />
    </InputGroup>
    <InputGroup name="last_name" labelText="Last Name">
      <Input name="last_name" />
    </InputGroup>
    <InputGroup name="avatar" labelText="Photo Link">
      <Input name="avatar" />
    </InputGroup>
    <Button type="submit" color="primary">
      Save User
    </Button>
  </form>
);

export default UserForm;
