const API_KEY = "19196344-39ec0398b9669a2b5bdda7f21";

export default class ImgApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }
  fetchImg() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=${API_KEY}`;

    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        // console.log(data);
        // console.log(data.hits.length);
        this.page += 1;
        return data.hits;
      });
  }
  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
