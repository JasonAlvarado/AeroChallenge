export const getHeaders = (): Headers => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Authorization", process.env.NEXT_PUBLIC_TOKEN as string);

  return headers;
};
