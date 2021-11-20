import axios from 'axios';
export default function FetchImages(name, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const KEY = '24365362-b874a4d3192f8b0f7cae992e9';
  return axios
    .get(
      `${BASE_URL}?q=${name}&page=${page}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`,
    )
    .catch(err => console.log(err));
}
