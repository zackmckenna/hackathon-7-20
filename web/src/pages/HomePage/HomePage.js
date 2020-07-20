import { useEffect } from 'react'
import Parallax from 'parallax-js'

const HomePage = () => {
  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)
  }, [])

  const createLayer = (depth, contents) => {
    return (
      <li className="layer" data-depth={`${depth}`}>
        {contents()}
      </li>
    )
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <ul
        className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10"
        id="scene"
        data-friction-x="0.1"
        data-friction-y="0.1"
        data-scalar-x="25"
        data-scalar-y="15"
      >
        {createLayer('2.0', () => (
          <div>test2</div>
        ))}
        <li className="layer" data-depth="2.0">
          <div>test 4</div>
        </li>
        {createLayer('4.0', () => (
          <div>test3</div>
        ))}
      </ul>
    </div>
  )
}

export default HomePage
