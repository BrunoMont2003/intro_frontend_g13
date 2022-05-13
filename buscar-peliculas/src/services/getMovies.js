import axios from 'axios'
const APIKEY = import.meta.env.VITE_OMDB_API_KEY

export const getMovies = async (title = 'avengers') => {
  const URI = `http://www.omdbapi.com/?apikey=${APIKEY}&s=${title}`
  const {
    data: { Search }
  } = await axios.get(URI)
  console.log(URI)
  return Search
}
