import Card from '../components/Card'

const getArtist = async (id = 112024) => {
  try {
    const req = await window.fetch(
      `https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`
    )
    const res = await req.json()
    const { artists } = res
    const cardsConteiner = document.getElementById('cards-container')
    cardsConteiner.innerHTML += Card(artists[0])
    return res
  } catch (error) {
    console.log(error.message)
  }
}
export default getArtist
