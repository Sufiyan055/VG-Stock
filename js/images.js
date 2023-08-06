const searchFormId = document.getElementById("searchFormId");
/* SearchBar display when scroll */
window.onscroll = () => {
  scrollForm();
};

const scrollForm = () => {
  if (
    document.body.scrollTop > 225 ||
    document.documentElement.scrollTop > 225
  ) {
    searchFormId.style.display = "block";
  } else {
    searchFormId.style.display = "none";
  }
};
/*  */

//OOP is using here
class PhotoGallery {
  constructor() {
    this.API_kEY = "563492ad6f917000010000015ed71115f45a4a52b2f75bbda53e9ae9";
    this.galleryDiv = document.querySelector(".gallery");
    this.searchForm = document.querySelector(".searchForm");
    this.searchFormto = document.querySelector(".searchformto");
    this.loadMore = document.querySelector(".load-more");
    this.headh1 = document.querySelector(".headh1");
    //btn for direct search
    this.natureBtn = document.querySelector(".natureBtn");
    this.animalBtn = document.querySelector(".animalBtn");
    this.peopleBtn = document.querySelector(".peopleBtn");
    this.foodBtn = document.querySelector(".foodBtn");
    this.carBtn = document.querySelector(".carBtn");
    this.houseBtn = document.querySelector(".houseBtn");
    this.travelBtn = document.querySelector(".travelBtn");
    //
    this.pageIndex = 1;
    this.searchValueGlobal = "";
    this.searchValueGlobalto = "";
    this.eventHandle();
  }
  //All event handle here DomContentreload - page refresh, searchbar,loadmore btn, on logo click.
  eventHandle() {
    document.addEventListener("DOMContentLoaded", () => {
      this.getPhoto(1);
    });
    this.searchForm.addEventListener("submit", (e) => {
      this.pageIndex = 1;
      this.getSearchedImages(e);
    });
    this.searchFormto.addEventListener("submit", (e) => {
      this.pageIndex = 1;
      this.getSearchedImagesto(e);
    });
    this.loadMore.addEventListener("click", (e) => {
      this.loadMorePhotss(e);
    });
    //btn for direct search
    //Nature
    this.natureBtn.addEventListener("click", (e) => {
      this.getNaturePhots(e);
    });
    //Animal
    this.animalBtn.addEventListener("click", (e) => {
      this.getAnimalPhots(e);
    });
    //People
    this.peopleBtn.addEventListener("click", (e) => {
      this.getPeoplePhots(e);
    });
    //Food
    this.foodBtn.addEventListener("click", (e) => {
      this.getFoodPhots(e);
    });
    // Car
    this.carBtn.addEventListener("click", (e) => {
      this.getCarPhots(e);
    });
    // House
    this.houseBtn.addEventListener("click", (e) => {
      this.getHousePhots(e);
    });
    // Travel
    this.travelBtn.addEventListener("click", (e) => {
      this.getTravelPhots(e);
    });
    //
    this.headh1.addEventListener("click", () => {
      this.pageIndex = 1;
      this.galleryDiv.innerHTML = "";
      this.getPhoto(this.pageIndex);
    });
  }
  //photos which is present already for user when enter
  async getPhoto(index) {
    this.loadMore.setAttribute("data-photoimg", "curated");
    const baseURL = `https://api.pexels.com/v1/search?query=images&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
    console.log(data);
  }
  //fetch function is created here
  async fetchImages(baseURL) {
    const response = await fetch(baseURL, {
      method: "GET",
      headers: {
        Accept: "application/json",
        Authorization: this.API_kEY,
      },
    });
    const data = await response.json();
    //console.log(data);
    return data;
  }
  GenerateHTML(photos) {
    photos.forEach((photo) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
          <a href="#" target="_blank">
          <img src="${photo.src.medium}" alt="Image">
          </a>
          `;
      this.galleryDiv.appendChild(item);
    });
  }
  //btn for direct search
  //Nature
  async getNaturePhots(e) {
    this.loadMore.setAttribute("data-photoimg", "nature");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=nature&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMoreNaturePhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=nature&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  //Animal
  async getAnimalPhots(e) {
    this.loadMore.setAttribute("data-photoimg", "animal");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=animal&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMoreAnimalPhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=animal&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  //people
  async getPeoplePhots(e) {
    this.loadMore.setAttribute("data-photoimg", "people");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=people&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMorePeoplePhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=people&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  //Food
  async getFoodPhots(e) {
    this.loadMore.setAttribute("data-photoimg", "food");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=food&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMoreFoodPhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=food&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  // car
  async getCarPhots(e) {
    this.loadMore.setAttribute("data-photoimg", "car");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=car&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMoreCarPhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=car&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  // House
  async getHousePhots(e) {
    this.loadMore.setAttribute("data-photoimg", "house");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=house&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMoreHousePhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=house&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  // Travel
  async getTravelPhots(e) {
    this.loadMore.setAttribute("data-photoimg", "travel");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/v1/search?query=travel&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  async getMoreTravelPhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=travel&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  //
  // photos searching on searchbar.....
  async getSearchedImages(e) {
    this.loadMore.setAttribute("data-photoimg", "search");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const searchValue = e.target.querySelector("input").value;
    this.searchValueGlobal = searchValue;
    const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
    e.target.reset();
  }
  async getMoreSearchedPhots(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  // photos searching on searchbar22222.....
  async getSearchedImagesto(e) {
    this.loadMore.setAttribute("data-photoimg", "searchto");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const searchValue = e.target.querySelector("input").value;
    this.searchValueGlobalto = searchValue;
    const baseURL = `https://api.pexels.com/v1/search?query=${searchValue}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
    e.target.reset();
  }
  async getMoreSearchedPhotsto(index) {
    const baseURL = `https://api.pexels.com/v1/search?query=${this.searchValueGlobalto}&page=${index}&per_page=12`;
    const data = await this.fetchImages(baseURL);
    this.GenerateHTML(data.photos);
  }
  // Load button For search and popular(present when enter)
  loadMorePhotss(e) {
    let index = ++this.pageIndex;
    const loadMoredata = e.target.getAttribute("data-photoimg");
    // Load pages for selected content if it is search or button or already present content
    if (loadMoredata === "curated") {
      this.getPhoto(index);
    } else if (loadMoredata === "search") {
      this.getMoreSearchedPhots(index);
    } else if (loadMoredata === "nature") {
      this.getMoreNaturePhots(index);
    } else if (loadMoredata === "car") {
      this.getMoreCarPhots(index);
    } else if (loadMoredata === "searchto") {
      this.getMoreSearchedPhotsto(index);
    } else if (loadMoredata === "animal") {
      this.getMoreAnimalPhots(index);
    } else if (loadMoredata === "people") {
      this.getMorePeoplePhots(index);
    } else if (loadMoredata === "food") {
      this.getMoreFoodPhots(index);
    } else if (loadMoredata === "house") {
      this.getMoreHousePhots(index);
    } else if (loadMoredata === "travel") {
      this.getMoreTravelPhots(index);
    }
  }
}

const gallery = new PhotoGallery();
