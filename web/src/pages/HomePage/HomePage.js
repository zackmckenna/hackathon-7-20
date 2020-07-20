import { useEffect } from 'react'
import Parallax from 'parallax-js'

const HomePage = () => {
  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)
  }, [])

  const createLayer = (depth, contents) => {
    return <li data-depth={`${depth}`}>{contents}</li>
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-center mx-auto">HomePage</h1>
      <ul
        id="scene"
        data-friction-x="0.1"
        data-friction-y="0.1"
        data-scalar-x="25"
        data-scalar-y="15"
        className="mx-auto"
      >
        <li data-depth="0.0">
          <div>background</div>
        </li>
        <li data-depth="0.10">Test1 </li>
        <li data-depth="0.10">test 2</li>
        <li data-depth="0.10">test 3</li>
        {createLayer('0.4', 'test-4')}
      </ul>
    </div>
  )
}

export default HomePage
