export const useGetData = async (url: string) => {
  const res = await fetch(`${process.env.API_URL}${url}`, {
    cache: 'no-store',
  });

  return res.json();
};
