import mongoose from 'mongoose';

const handleValidationError = (err: mongoose.Error.ValidationError) => {
  const errorSources = Object.values(err?.errors)?.map(
    (v: mongoose.Error.ValidatorError | mongoose.Error.CastError) => {
      return {
        path: v?.path,
        message: v?.message,
      };
    },
  );

  const statusCode = 400;

  return {
    statusCode,
    message: 'Validation Error',
    errorSources,
  };
};

export default handleValidationError;
