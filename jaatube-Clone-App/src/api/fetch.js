const URL = import.meta.env.VITE_BASE_API_URL

// Index/Get all
export function getAllVideos() {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}&q=javascript&type=video&part=snippet&maxResults=8`).then(res => res.json())
}
export function getOneVideo(id) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}`).then(res => res.json())
  }