import getArtist from './getArtist'
const createData = async () => {
  try {
    const limit = []
    for (let index = 112024; index < 112036; index++) {
      if (index === 112032) {
        continue
      }
      limit.push(`${index}`)
    }
    const arrayArtits = []
    for (let index = 0; index < limit.length; index++) {
      arrayArtits.push(await getArtist(limit[index]))
    }
    console.log(arrayArtits)
    return arrayArtits
  } catch (error) {
    console.log(error.message)
  }
}
export default createData
