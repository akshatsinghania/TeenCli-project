import React from "react";
import { Button, InputGroup, FormControl, Alert } from "react-bootstrap";
import { useState, useContext } from "react";
import { FormWrapper } from "./CreateDiscussion.style";

const CreateDiscussion = () => {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  return (
    <FormWrapper>
      <h1 className="title">Create Discussion</h1>
      <form className="form">
        <InputGroup className="mb-4 input">
          <FormControl
            placeholder="Title"
            type="text"
            value={title}
            onChange={(e) => {
              setTitle(e.target.value);
            }}
          />
        </InputGroup>
        <InputGroup className="mb-4 input">
          <FormControl
            placeholder="Description"
            type="text"
            value={description}
            onChange={(e) => {
              setdescription(e.target.value);
            }}
          />
        </InputGroup>

        <Button type="submit" variant="primary">
          Create Discussion
        </Button>
      </form>
    </FormWrapper>
  );
};

export default CreateDiscussion;
