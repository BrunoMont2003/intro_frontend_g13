import Banner from '../components/Banner'
import Loader from '../components/Loader'

const getBanner = async (name = 'anouk') => {
  const colImagen = document.getElementById('col-imagen')
  try {
    colImagen.innerHTML = Loader()
    const req = await window.fetch(
      `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${name}`
    )
    const res = await req.json()
    const { artists } = res
    colImagen.innerHTML = Banner(artists[0])

    return res
  } catch (error) {
    console.log(error.message)
  }
}

export const setBanner = () => {
  const chooseBanner = document.getElementById('choose-banner')
  chooseBanner.addEventListener(
    'click',
    async ({ target: { tagName, textContent } }) => {
      textContent = textContent.trim()
      if (tagName === 'BUTTON') {
        await getBanner(textContent)
      }
    }
  )
}
export default getBanner
