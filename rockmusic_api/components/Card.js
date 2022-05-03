const Card = ({ strArtistWideThumb, strArtist, strCountry }) => {
  return `<div class="col-12 mb-sm-3 col-sm-6 col-lg-3">
    <article class="card text-light shadow">
      <div class="card-body text-center">
        <img src="${strArtistWideThumb}" alt="${strArtist}" class="img-fluid" />
        <h6 class="card-subtitle">${strArtist}</h6>
        <p class="card-text">${strCountry}</p>
      </div>
    </article>
  </div>`
}
export default Card
