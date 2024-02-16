import { useEffect, useState } from 'react'

export default <T>(endpoint: string) => {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    setIsLoading(true)
    setError(null)

    fetch(`profile/${endpoint}.json`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => {
        setData(res)
        setIsLoading(false)
      })
      .catch((error: string) => {
        setError(new Error(error))
        setIsLoading(false)
      })
  }, [endpoint])

  return { data, isLoading, error }
}
