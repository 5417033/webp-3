export async function fetchImages() {
  const response = await fetch(
    'https://shibe.online/api/shibes?count=4&urls=true&httpsUrls=true'
  );
  const data = await response.json();
  return data;
}