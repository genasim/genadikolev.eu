import useSetImageUrlContext from "../hooks/useSetImageUrlContext"

const HomePage = () => {
  useSetImageUrlContext('home.jpeg')

  return (
    <>
      <h1>Home page</h1>
    </>
  )
}

export default HomePage
