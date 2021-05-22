import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField";
import { useForm } from "react-hook-form";

MovieForm.propTypes = {
  onSubmit: PropTypes.func,
};

function MovieForm(props) {
  const { onChange } = props;
  const form = useForm({
    mode: "onChange",
    defaultValues: {
      keyword: "",
    },
  });

  const handleFormChange = (value) => {
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <form onChange={form.handleSubmit(handleFormChange)}>
      <InputField name="keyword" label="Search for a movie" form={form} />
    </form>
  );
}

export default MovieForm;
