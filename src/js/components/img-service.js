export default class ImgApiService {
  constructor() {
    this.searchQuery = "";
    this.page = 1;
  }
  fetchImg() {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${this.searchQuery}&page=${this.page}&per_page=12&key=19196344-39ec0398b9669a2b5bdda7f21`;

    return fetch(url)
      .then((r) => r.json())
      .then((data) => {
        console.log(data);
        this.page += 1;
        return data.hits;
      });
  }
  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
