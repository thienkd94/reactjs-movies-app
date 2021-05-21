import React from "react";
import PropTypes from "prop-types";
import InputField from "../../../../components/form-control/InputField";
import { useForm } from "react-hook-form";

MovieForm.propTypes = {
  onSubmit: PropTypes.func,
};

function MovieForm(props) {
  const { onSubmit } = props;
  const form = useForm({
    defaultValues: {
      keyword: "",
    },
  });

  const handleFormSubmit = (value) => {
    if (onSubmit) {
      onSubmit(value);
    }
  };

  return (
    <form onSubmit={form.handleSubmit(handleFormSubmit)}>
      <InputField name="keyword" label="Search for a movie" form={form} />
    </form>
  );
}

export default MovieForm;
