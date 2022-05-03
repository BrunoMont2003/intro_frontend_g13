const getArtist = async (id = 112024) => {
  const req = await window.fetch(
    `https://theaudiodb.com/api/v1/json/2/artist.php?i=${id}`
  )
  const res = await req.json()
  return res
}
export default getArtist
