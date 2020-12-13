import "./css/common.css";

import menuCardTmpl from "./templates/picture-card.hbs";
// import cards from './menu.json';

import ImgApiService from "./js/components/img-service.js";
import debounce from "lodash.debounce";
import LoadMoreBtn from "./js/components/load-more-btn";

const refs = {
  searhForm: document.querySelector(".js-search-form"),
  galleryContainer: document.querySelector(".gallery"),
  searchBtn: document.querySelector(".btn"),
  loadMoreBtn: document.querySelector('[data-action="load-more"]'),
};

console.log(refs.searchBtn);

const ImageApiService = new ImgApiService();

const loadMoreBtn = new LoadMoreBtn({
  selector: '[data-action="load-more"]',
  hidden: true,
});

refs.searhForm.addEventListener("submit", onSearch);
refs.searhForm.addEventListener("submit", scrollTo);
// refs.searhForm.addEventListener("input", debounce(onSearch, 500));
loadMoreBtn.refs.button.addEventListener("click", onLoadMore);
loadMoreBtn.refs.button.addEventListener("click", scrollTo);

// переписываю функцию он серч
function onSearch(e) {
  e.preventDefault();
  // clearImageContainer();

  ImageApiService.query = e.currentTarget.elements.query.value;
  console.log(ImgApiService.query);

  loadMoreBtn.show();
  ImageApiService.resetPage();
  clearImageContainer();
  // loadMoreBtn.disable();

  onLoadMore();
}

let numberPage = 0;

function onLoadMore() {
  loadMoreBtn.disable();
  ImageApiService.fetchImg().then((hits) => {
    appendImageMarkup(hits);
    loadMoreBtn.enable();
    // console.log(ImageApiService.page);
    // numberPage = ImageApiService.page - 2;
    // console.log(numberPage);
    // window.scrollTo({
    //   left: numberPage * 70,
    //   top: 0,
    //   behavior: "smooth",
    // });
  });
}

function appendImageMarkup(hits) {
  refs.galleryContainer.insertAdjacentHTML("beforeend", menuCardTmpl(hits));
  if (hits.length < 12) {
    loadMoreBtn.hide();
  }
}

function clearImageContainer() {
  refs.galleryContainer.innerHTML = "";
}

function scrollTo() {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
}

//  cat
