import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'
import WordCloud from './wordcloud'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const skillsArray = 'Skills'.split('')

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={skillsArray}
              idx={15}
            />
            <br />
          </h1>
          <p>
            I love to keep a variety of tools in my tech stack. I also make sure
            to be pro at using one tool before moving on to the next. I keep
            myself up to date with the latest technologies around.
          </p>
          <p>
            My skills include wireframing, I have a passion for creating visually appealing and user-friendly digital experiences. With expertise in both design principles and coding languages, I bring a unique blend of skills to the table.</p>
            <p>On the frontend development side, I possess strong proficiency in HTML, CSS, and JavaScript, and I stay up to date with the latest web development trends and best practices. I am skilled in responsive web design, ensuring that websites and applications are accessible and optimized for various devices and screen sizes. I have a solid understanding of web accessibility standards, SEO principles, and cross-browser compatibility.</p>
        </div>

        <div className="tagcloud-wrap">
          <WordCloud />
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Skills
