import "./css/common.css";

import menuCardTmpl from "./templates/picture-card.hbs";
// import cards from './menu.json';

import ImgApiService from "./js/components/img-service.js";
import debounce from "lodash.debounce";

const refs = {
  searhForm: document.querySelector(".js-search-form"),
  galleryContainer: document.querySelector(".gallery"),
  searchBtn: document.querySelector(".btn"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

console.log(refs.searchBtn);

const ImageApiService = new ImgApiService();

// const loadMoreBtn = new LoadMoreBtn({
//   selector: '[data-action="load-more"]',
//   hidden: true,
// });

refs.searhForm.addEventListener("submit", onSearch);

// refs.searhForm.addEventListener("input", debounce(onSearch, 500));
refs.loadMoreBtn.addEventListener("click", onLoadMore);

function onSearch(e) {
  e.preventDefault();

  ImageApiService.query = e.currentTarget.elements.query.value;
  // ImageApiService.resetPage();

  ImageApiService.fetchImg().then(appendImageMarkup);
}

function onLoadMore() {
  //   ImageApiService.query = e.currentTarget.elements.query.value;
  ImageApiService.fetchImg().then(appendImageMarkup);
}

function appendImageMarkup(hits) {
  refs.galleryContainer.insertAdjacentHTML("beforeend", menuCardTmpl(hits));
}

//  cat
