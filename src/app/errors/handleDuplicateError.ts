const handleDuplicateError = (err: any) => {
  const match = err.message.match(/:\s*["']([^"']+)["']/);

  const extractedMessage = match ? match[1] : null;

  const errorSources = [
    {
      path: '',
      message: `${extractedMessage} is already exists`,
    },
  ];

  const statusCode = 500;

  return {
    statusCode,
    message: `This Filed is already exists`,
    errorSources,
  };
};

export default handleDuplicateError;
