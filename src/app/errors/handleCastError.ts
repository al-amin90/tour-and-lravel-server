import mongoose from 'mongoose';

const handleCastError = (err: mongoose.Error.CastError) => {
  const errorSources = [
    {
      path: err?.path,
      message: err?.message,
    },
  ];

  const statusCode = 404;

  return {
    statusCode,
    message: 'Invalid Id',
    errorSources,
  };
};

export default handleCastError;
