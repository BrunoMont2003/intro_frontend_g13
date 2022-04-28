import './styles/main.scss'
import { getAsteroids } from './api/asteroids.js'
import moment from 'moment'
import Swal from 'sweetalert2'
const dateStart = document.getElementsByName('start')[0]
const dateEnd = document.getElementsByName('end')[0]
const form = document.getElementById('form')
const asteroidsContainer = document.getElementById('asteroids_container')

const chooseHazardous = (isHazardous) => {
  let text = ''
  if (isHazardous) {
    text = `
      <span class="text-red-500 block">
            <i class="fa-solid fa-circle-exclamation"></i>
            Is a hazardous asteroid
          </span>

          `
  } else {
    text = `
      <span class="text-green-500 block">
            <i class="fa-solid fa-shield"></i>
            Is not a hazardous asteroid
          </span>

      `
  }
  return text
}
const chooseSentry = (isSentry) => {
  let text = ''
  if (isSentry) {
    text = `
    <span class="text-neutral-300 block">
    <i class="fa-solid fa-code-commit"></i>
    Is a sentry object
  </span>

          `
  } else {
    text = `
    <span class="text-neutral-300 block">
    <i class="fa-solid fa-code-merge"></i>
    Is not a sentry object
  </span>
      `
  }
  return text
}

const showAsteroids = (asteroids) => {
  asteroidsContainer.innerHTML = ''
  asteroidsContainer.innerHTML = `

  <div class="col-span-full flex flex-col items-center justify-center">

  <h4 class="text-yellow-200 text-2xl">

  ${asteroids.length} asteroids found

  </h4>
  <h6 class="text-white">Between ${formatDateClient(
    dateStart.value
  )} and ${formatDateClient(dateEnd.value)}</h6>
  </div>
  `
  asteroids.forEach(
    ({
      id,
      name,
      absoluteMagnitudeH,
      estimatedDiameter,
      isPotentiallyHazardousAsteroid,
      closeApproachDate,
      relativeVelocity,
      missDistance,
      isSentryObject
    }) => {
      asteroidsContainer.innerHTML += `
      <div class="p-5 rounded text-white border-2 w-80 border-yellow-200">
      <h4 class="text-center font-bold text-lg text-purple-300">
        <i class="fa-solid fa-meteor"></i>
        ${name}
      </h4>
      <h6 class="text-center text-xs my-2 text-amber-400">#${id}</h6>
      <ul class="">
        <li>
          <i class="fa-solid fa-binoculars text-blue-400"></i>
          <span class="text-lime-400"> Absolute Magnitude (h): </span>
          <span class="text-rose-400"> ${absoluteMagnitudeH} </span>
        </li>
        <li>
          <i class="fa-solid fa-circle-notch text-blue-400"></i>
          <span class="text-lime-400"> Estimated Diameter (km): </span>
          <span class="text-rose-400"> ${estimatedDiameter} </span>
        </li>
        <li>
          <i class="fa-solid fa-calendar-day text-blue-400"></i>
          <span class="text-lime-400"> Close Approach Date: </span>
          <span class="text-rose-400"> ${closeApproachDate} </span>
        </li>
        <li>
          <i class="fa-solid fa-bolt text-blue-400"></i>
          <span class="text-lime-400"> Relative Velocity (kps): </span>
          <span class="text-rose-400"> ${relativeVelocity} </span>
        </li>
        <li>
          <i class="fa-solid fa-arrows-to-dot text-blue-400"></i>
          <span class="text-lime-400"> Miss Distance (km): </span>
          <span class="text-rose-400"> ${missDistance} </span>
        </li>
        <li>
          ${chooseHazardous(isPotentiallyHazardousAsteroid)}
        </li>
        <li>
          ${chooseSentry(isSentryObject)}
        </li>
      </ul>
    </div>

        `
    }
  )
}

const formatDate = (date) => {
  const date_ = new Date(date)
  return moment(date_).format('YYYY-MM-DD')
}
const formatDateClient = (date) => {
  const date_ = new Date(date)
  return moment(date_).format('LL')
}

const getDistance = (dateStart, dateEnd) => {
  const start = new Date(dateStart)
  const end = new Date(dateEnd)
  return moment(end).diff(moment(start), 'days')
}

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  const difference = getDistance(dateStart.value, dateEnd.value)
  if (difference > 7) {
    Swal.fire({
      title: 'Error!',
      text: '7 days maximum of difference ',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  } else if (difference < 0) {
    Swal.fire({
      title: 'Error!',
      text: 'Enter a valid range',
      icon: 'error',
      confirmButtonText: 'Cool'
    })
  } else {
    asteroidsContainer.innerHTML =
      "<span class='text-white'>Cargando ...</span>"
    const start = formatDate(dateStart.value)
    const end = formatDate(dateEnd.value)
    const asteroids = await getAsteroids(start, end)
    showAsteroids(asteroids)
  }
})

asteroidsContainer.innerHTML = "<span class='text-white'>Cargando ...</span>"
const asteroids = await getAsteroids(
  formatDate(dateStart.value),
  formatDate(dateEnd.value)
)
showAsteroids(asteroids)
