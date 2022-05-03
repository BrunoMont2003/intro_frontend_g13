const Banner = ({ strArtistWideThumb, strArtist }) => {
  return `
  <div class="d-flex align-items-center h-100">
    <img src="${strArtistWideThumb}" alt="${strArtist}" class="img-fluid" />
    </div>
  `
}

export default Banner
