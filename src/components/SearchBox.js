import React from "react";
import Form from "react-bootstrap/Form";

export const SearchBox = ({ search }) => {
  return (
    <div>
      <Form>
        <h4 className="text-center p-2">Not sure what you crave?</h4>
        <Form.Group>
          <Form.Control
            type="text"
            name="name"
            onChange={search}
            placeholder="Foodie me"
          />
        </Form.Group>
      </Form>
    </div>
  );
};

export default SearchBox;
