
const apiToken = 'BQDocmBtSyBBpCttDgnICExuBxzXl7qiJrczCYWwuky9Z_CvW-SpqHNAguOFlSDsXQdfTQCAbHWkFTAcafZGM-vN5XnWlGvv0SwzktPjOT0XxmWUr9jSFCCtbrlry9DbQWBb6I58zpEEEndmKfMabcWfYfldqlnxcL5j1ImrbwGVd7SyZj9m6yaSduP26v4rOaNC3peaiqEcuUMMqi7ANK1oWbjiX8yUDgtiDVDDRjnqDt_vT3N3G-eu3bKKjsL49P3WG-HXR7yPyO-nr94Dvnmt9AQnjnSxK9PNXUh4ba020vpmWEf_3dzRQnXPtNLTpuiIwhAeWdTCMMtAS1nQFojTYFQRhHHdxob3Fnak1pf6GoI';

export const fetchTracks = async () => {
  const response = await fetch('https://api.spotify.com/v1/me/tracks', {
    method: 'GET',
    headers: {
      Authorization: 'Bearer ' + apiToken,
    },
  });
  if (!response.ok) {
     throw new Error(`Fetching tracks failed with status ${response.status}`)
   }
  const data = await response.json() as { items: unknown[] };

  return data.items;
};