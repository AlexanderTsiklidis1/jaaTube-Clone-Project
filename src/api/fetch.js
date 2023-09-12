const KEY = import.meta.env.VITE_API_KEY


// export function createVideo(video) {
//     const options = {
//         method: "POST",
//         // body is a JSON version of our show object we got from state
//         body: JSON.stringify(video),
//         // tell the server that this is JSON
//         headers: {"Content-Type": "application/json"}
//       }
//       return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${URL}&q=javascript&type=video&part=snippet&maxResults=8`, options).then(res => res.json())
// }

const _BASE_URL = `https://youtube.googleapis.com/youtube/v3/search?&type=video&part=snippet&key=${KEY}`

export function getAllVideos(videoQuantity) {
    debugger
    return fetch(`${_BASE_URL}&key=${KEY}&maxResults=${videoQuantity}`).then(res => res.json()) 

  
}

export function getOneVideo(id) {
    return fetch(`https://www.googleapis.com/youtube/v3/videos?key=${KEY}&type=video&part=snippet&id=${id}`).then(res => res.json())
  }

export function searchVideos(searchQ) {
    return fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${KEY}&q=${searchQ}&type=video&part=snippet/video/&maxResults=8`).then(res => res.json())
}