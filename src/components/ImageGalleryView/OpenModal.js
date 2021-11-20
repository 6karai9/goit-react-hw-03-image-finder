export function imgOpen(id, arr) {
  const soughtIndex = arr.findIndex(item => item.id === Number.parseInt(id));
  const largeImageURL = arr[soughtIndex].largeImageURL;
  const imgId = arr[soughtIndex].id;
  return { largeImageURL, imgId };
}
