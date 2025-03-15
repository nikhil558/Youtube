
const GOOGLE_API_KEY = "AIzaSyCu31qYjdKT3R5IWhisYAzS26vpAuBuSQE";

export const LIVE_CHAT_COUNT = 25;

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const SEARCH_YOUTUBE_VIDEOS_API = (query) => {
  return "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q="+ query +"&key="+ GOOGLE_API_KEY
}

export const SEARCH_YOUTUBE_VIDEOS_NEXT_PAGE_API = (query, page) => {
  return `https://youtube.googleapis.com/youtube/v3/search?part=snippet&pageToken=${page}&maxResults=25&q=${query}&key=${GOOGLE_API_KEY}`;
}
export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// Live Chat >>>> Infinite Scroll >>>>>> Pagination

export const PROFILE_ICON_URLS = () => {
  const urls = [
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033685/ICONS/profile-user_f4l979.png",
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033684/ICONS/profile-user_1_uqlxxe.png",
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033683/ICONS/profile-user_2_lvpze7.png",
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033682/ICONS/profile-user_3_wcaq1u.png",
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033681/ICONS/profile-user_4_l90vjd.png",
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033680/ICONS/profile-user_5_psfga4.png",
    "https://res.cloudinary.com/dsqwm3c9a/image/upload/v1742033679/ICONS/profile-user_6_fngxl9.png"
  ]

  const random = Math.floor(Math.random() * urls.length);

  return urls[random]

}

