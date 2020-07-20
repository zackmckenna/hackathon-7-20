import { useEffect, useState } from 'react'
import Parallax from 'parallax-js'

const HomePage = () => {
  const [pressedLetter, setPressedLetter] = useState(null)
  const [word, setWord] = useState('MEGA')

  const letters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ]

  useEffect(() => {
    const scene = document.getElementById('scene')
    const parallaxInstance = new Parallax(scene)
  }, [])

  useEffect(() => {
    document.addEventListener('keydown', handleKeypress)
    // const logKey = (e) => {
    //   e.preventDefault()
    //   console.log(e.code.slice(3))
    //   setPressedLetter(e.code.slice(3))
    // }
  }, [])

  const handleKeypress = (e) => {
    e.preventDefault()
    console.log(e.code)
  }

  const createLayer = (depth, contents) => {
    return (
      <li className="layer" data-depth={`${depth}`}>
        {contents()}
      </li>
    )
  }

  const getRandomElement = (array) => {
    return array[Math.floor(Math.random() * array.length)]
  }

  const createWord = (word) => {
    return word.split('').map((letter, index) => {
      console.log(index, letter)
      return (
        <li
          key={index}
          id={letter}
          className="layer"
          data-depth={`${index + 1}.0`}
        >
          {getRandomElement(letters)}
          {getRandomElement(letters)}
          {getRandomElement(letters)}
          {getRandomElement(letters)}
          {letter}
          {getRandomElement(letters)}
          {getRandomElement(letters)}
        </li>
      )
    })
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
          data-scalar-x="70"
          data-scalar-y="70"
        >
          <li className="layer" data-depth="0.0">
            <div></div>
          </li>
          {createWord(word)}
          {/* <li className="layer" data-depth="0.0">
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
          </li> */}
        </ul>
      </div>
    </div>
  )
}

export default HomePage
