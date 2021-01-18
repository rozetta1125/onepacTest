import React from "react";
import TextInput from "./textInput";
import TextArea from "./textArea";
import PropTypes from "prop-types";

function EditForm(props) {
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="Title"
        onChange={props.onChange}
        name="title"
        value={props.data.title}
        error={props.errors.title}
      />

      <TextArea
        id="description"
        label="Description"
        onChange={props.onChange}
        name="description"
        value={props.data.description}
        error={props.errors.description}
      />

      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

EditForm.propTypes = {
  data: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

export default EditForm;
