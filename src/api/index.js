// event, context, callback
export const handler = () => {
  return {
    statusCode: 200,
    body: { message: 'Welcome' },
    headers: {
      'Content-Type': 'application/json',
    },
  };
};
