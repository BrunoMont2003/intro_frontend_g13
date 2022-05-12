export const getCountry = async (name = 'peru') => {
  const URI = `https://restcountries.com/v3.1/name/${name}`

  const req = await window.fetch(URI)
  const res = await req.json()
  return res[0]
}
