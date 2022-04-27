const API_KEY = 'XEBPgDPAePP97QjDkGIgDWRZIcKf1rBjnDKVihXj'

export const getAsteroids = async (startDate, endDate) => {
  const URI = `https://api.nasa.gov/neo/rest/v1/feed?startDate=${startDate}&endDate=${endDate}&api_key=${API_KEY}`
  const asteroids = []
  const response = await fetch(URI)
  const { near_earth_objects: nearEarthObjects } = await response.json()
  for (const date in nearEarthObjects) {
    const day = nearEarthObjects[date]
    day.forEach(
      ({
        id,
        name,
        absolute_magnitude_h: absoluteMagnitudeH,
        estimated_diameter: estimatedDiameter,
        is_potentially_hazardous_asteroid: isPotentiallyHazardousAsteroid,
        close_approach_data: closeApproachData,
        is_sentry_object: isSentryObject
      }) => {
        const diameter =
          (estimatedDiameter.kilometers.estimatedDiameter_min +
            estimatedDiameter.kilometers.estimatedDiameter_min) /
          2
        const data = closeApproachData[0]
        const {
          close_approach_date: closeApproachDate,
          relative_velocity: relativeVelocity,
          miss_distance: missDistance
        } = data
        const asteroid = {
          id,
          name,
          absoluteMagnitudeH,
          estimatedDiameter: diameter.toFixed(2),
          isPotentiallyHazardousAsteroid,
          closeApproachDate,
          relativeVelocity: parseFloat(
            relativeVelocity.kilometers_per_second
          ).toFixed(3),
          missDistance: parseFloat(missDistance.kilometers).toFixed(2),
          isSentryObject
        }

        asteroids.push(asteroid)
      }
    )
  }
  return asteroids
}
