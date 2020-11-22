// import './css/common.css';

import menuCardTmpl from "./templates/picture-card.hbs";
// import cards from './menu.json';

import ImgApiService from "./templates/picture-card.hbs";

const refs = {
  searhForm: document.querySelector("#search-form"),
  galleryContainer: document.querySelector(".gallery"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

console.log(refs.galleryContainer);

const ImageApiService = new ImgApiService();

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

refs.searhForm.addEventListener("input", onSearch);
// refs.searhForm.addEventListener("input", debounce(onSearch, 500));
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(e) {
  //   e.preventdefault();

  ImageApiService.query = e.currentTarget.elements.query.value;

  ImageApiService.fetchImg().then(appendImageMarkup);
}

function onLoadMore() {
  //   ImageApiService.query = e.currentTarget.elements.query.value;
  ImageApiService.fetchImg().then(appendImageMarkup);
}

function appendImageMarkup(images) {
  refs.galleryContainer.insertAdjacentHTML("beforeend", menuCardTmpl(images));
}

// cat
