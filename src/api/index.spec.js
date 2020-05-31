import { handler } from '.';

describe('handler', () => {
  it('should return 200 with a welcome message', () => {
    const response = handler();

    expect(response.statusCode).toEqual(200);
  });
});
