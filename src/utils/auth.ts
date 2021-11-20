export const authHeaders = (access_token: string) => {
  return {
    headers: { Authorization: `Bearer ${access_token}` },
  };
};
