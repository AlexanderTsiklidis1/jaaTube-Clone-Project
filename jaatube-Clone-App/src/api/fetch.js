const URL = import.meta.env.VITE_BASE_API_KEY 

// Index/Get all
export function getAllVideos() {
    return fetch(`${URL}/home`).then(res => res.json());
}

export function getOneVideo(id) {
    return fetch(`${URL}/home/${id}`).then(res => res.json())
  }