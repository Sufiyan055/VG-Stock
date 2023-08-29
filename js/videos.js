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

let enterInput = document.querySelector(".mainGallery");

enterInput.addEventListener("keypress", (es) => {
  if (es.key === "Enter") {
    es.preventDefault();
  }
});

//OOP is using here
class VideoGallery {
  constructor() {
    this.API_kEY = "563492ad6f917000010000015ed71115f45a4a52b2f75bbda53e9ae9";
    this.galleryDiv = document.querySelector(".gallery");
    this.searchForm = document.querySelector(".searchForm");
    this.searchFormto = document.querySelector(".searchformto");
    this.loadMore = document.querySelector(".load-more");
    this.logo = document.querySelector(".headh1");
    //btn for direct search
    this.natureBtn = document.querySelector(".natureBtn");
    this.carBtn = document.querySelector(".carBtn");
    this.animalBtn = document.querySelector(".animalBtn");
    this.peopleBtn = document.querySelector(".peopleBtn");
    this.foodBtn = document.querySelector(".foodBtn");
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
      this.getVid(1);
    });
    this.searchForm.addEventListener("submit", (e) => {
      this.pageIndex = 1;
      this.getSearchedVideos(e);
    });
    this.searchFormto.addEventListener("submit", (e) => {
      this.pageIndex = 1;
      this.getSearchedVideosto(e);
    });
    this.loadMore.addEventListener("click", (e) => {
      this.loadMoreVidss(e);
    });
    //btn for direct search
    //Nature
    this.natureBtn.addEventListener("click", (e) => {
      this.getNatureVids(e);
    });
    //Animal
    this.animalBtn.addEventListener("click", (e) => {
      this.getAnimalVids(e);
    });
    //People
    this.peopleBtn.addEventListener("click", (e) => {
      this.getPeopleVids(e);
    });
    //Food
    this.foodBtn.addEventListener("click", (e) => {
      this.getFoodvids(e);
    });
    // Car
    this.carBtn.addEventListener("click", (e) => {
      this.getCarVids(e);
    });
    // House
    this.houseBtn.addEventListener("click", (e) => {
      this.getHouseVids(e);
    });
    // Travel
    this.travelBtn.addEventListener("click", (e) => {
      this.getTravelVids(e);
    });
    //
    this.logo.addEventListener("click", () => {
      this.pageIndex = 1;
      this.galleryDiv.innerHTML = "";
      this.getVid(this.pageIndex);
    });
  }
  //videos which is present already for user when enter
  async getVid(index) {
    this.loadMore.setAttribute("data-vid", "popular");
    const baseURL = `https://api.pexels.com/videos/popular?page=${index}&per_page=10`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
    //console.log(data);
  }
  //fetch function is created here
  async fetchVideos(baseURL) {
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
  GenerateHTML(videos) {
    videos.forEach((video) => {
      const item = document.createElement("div");
      item.classList.add("item");
      item.innerHTML = `
        <div class="VideoMain">
            <video src="${video.video_files[1].link}" controls muted width="300"></video>
            <a class="viewIt" href="${video.url}" target="_blank">
            <span class="material-symbols-outlined">open_in_new</span>
            </a>
        </div>
        `;
      this.galleryDiv.appendChild(item);
    });
  }
  //btn for direct search
  //Nature
  async getNatureVids(e) {
    this.loadMore.setAttribute("data-vid", "nature");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=nature&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMoreNatureVideos(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=nature&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  //Animal
  async getAnimalVids(e) {
    this.loadMore.setAttribute("data-vid", "animal");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=animal&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMoreAnimalVids(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=animal&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  //People
  async getPeopleVids(e) {
    this.loadMore.setAttribute("data-vid", "people");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=people&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMorePeopleVids(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=people&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  //Food
  async getFoodvids(e) {
    this.loadMore.setAttribute("data-vid", "food");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=food&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMoreFoodVids(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=food&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  // car
  async getCarVids(e) {
    this.loadMore.setAttribute("data-vid", "car");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=car&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMoreCarVideos(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=car&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  // Travel
  async getHouseVids(e) {
    this.loadMore.setAttribute("data-vid", "house");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=house&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMoreHouseVideos(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=house&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  // Travel
  async getTravelVids(e) {
    this.loadMore.setAttribute("data-vid", "travel");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const baseURL = `https://api.pexels.com/videos/search?query=travel&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  async getMoreTravelVideos(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=travel&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  //
  // videos searching on searchbar.....
  async getSearchedVideos(e) {
    this.loadMore.setAttribute("data-vid", "search");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const searchValue = e.target.querySelector("input").value;
    this.searchValueGlobal = searchValue;
    const baseURL = `https://api.pexels.com/videos/search?query=${searchValue}&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
    e.target.reset();
  }
  async getMoreSearchedVideos(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=${this.searchValueGlobal}&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  // photos searching on searchbar22222.....
  async getSearchedVideosto(e) {
    this.loadMore.setAttribute("data-vid", "searchto");
    e.preventDefault();
    this.galleryDiv.innerHTML = "";
    const searchValue = e.target.querySelector("input").value;
    this.searchValueGlobalto = searchValue;
    const baseURL = `https://api.pexels.com/videos/search?query=${searchValue}&page=1&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
    e.target.reset();
  }
  async getMoreSearchedVideosto(index) {
    const baseURL = `https://api.pexels.com/videos/search?query=${this.searchValueGlobalto}&page=${index}&per_page=12`;
    const data = await this.fetchVideos(baseURL);
    this.GenerateHTML(data.videos);
  }
  // Load button For search and popular(present when enter)
  loadMoreVidss(e) {
    let index = ++this.pageIndex;
    const loadMoredata = e.target.getAttribute("data-vid");
    // Load pages for selected content if it is search or button or already present content
    if (loadMoredata === "popular") {
      this.getVid(index);
    } else if (loadMoredata === "search") {
      this.getMoreSearchedVideos(index);
    } else if (loadMoredata === "nature") {
      this.getMoreNatureVideos(index);
    } else if (loadMoredata === "car") {
      this.getMoreCarVideos(index);
    } else if (loadMoredata === "searchto") {
      this.getMoreSearchedVideosto(index);
    } else if (loadMoredata === "animal") {
      this.getMoreAnimalVids(index);
    } else if (loadMoredata === "people") {
      this.getMorePeopleVids(index);
    } else if (loadMoredata === "food") {
      this.getMoreFoodVids(index);
    } else if (loadMoredata === "house") {
      this.getMoreHouseVideos(index);
    } else if (loadMoredata === "travel") {
      this.getMoreTravelVideos(index);
    }
  }
}

const gallery = new VideoGallery();
