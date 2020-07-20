import { useEffect, useState } from 'react'
import Parallax from 'parallax-js'

const HomePage = () => {
  const [pressedLetter, setPressedLetter] = useState(null)

  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', logKey)

    function logKey(e) {
      console.log(e.code.slice(3))
      setPressedLetter(e.code.slice(3))
    }
  }, [])

  const createLayer = (depth, contents) => {
    return (
      <li className="layer" data-depth={`${depth}`}>
        {contents()}
      </li>
    )
  }

  return (
    <div>
      <input></input>
      <div className="flex items-center justify-center h-screen">
        <ul
          className="items-center justify-center font-bold text-6xl rounded-lg p-10"
          id="scene"
          data-friction-x="0.1"
          data-friction-y="0.1"
          data-scalar-x="50"
          data-scalar-y="50"
        >
          <li className="layer" data-depth="0.0">
            <div></div>
          </li>
          <li className="layer" data-depth="1.0">
            <div>M</div>
          </li>
          <li className="layer" data-depth="3.0">
            <div>E</div>
          </li>
          <li className="layer" data-depth="4.0">
            <div>G</div>
          </li>
          <li className="layer" data-depth="5.0">
            <div>A</div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HomePage
