
const apiToken = 'BQDbsQDoObAUzsep30F1VnmGvcKx4E6v8dGzsNSRkvRyHUuR4gZ4swquwBT7ivsF73AYdtZMII-wtrcGhiXdnlUEWICG2s01MF--NKXscO1V7j-A0fn-eWNyb6jOXDRgRRbX48iuHZ7R3RKG2hyOGCWiW6f9-ZjTVQ6apkBV4bKba3G359aSZOK9gU7g3WyZSGNzRfftMncdnvWdc0j7tVOlVKkI3v208pPh_uyV2QnrhQHaxPQ0flL6KZ2us65vYU4XtIdZ2jtICCaAL91K-TuwTfBycgQAO2Jbyol5aTQlBRx8rbKarbiWljycwKJ0BNHqITalz1lMLtWeU7fq0ppXocVfz2GEeoBJJLnEmWW-Lpg
';

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