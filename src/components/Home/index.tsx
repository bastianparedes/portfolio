import React from 'react'
import Particles from 'react-tsparticles'

import styles from './styles.module.css'
import { BiDownArrowAlt } from 'react-icons/bi'
import Typewriter from 'typewriter-effect'

const Home = (): JSX.Element => {
  return (
    <section id="home" className={styles.home}>
      <Particles
        className={styles.particles}
        options={{
          autoPlay: true,
          fullScreen: false,
          background: {},
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onHover: {
                enable: true,
                mode: 'grab'
              },
              onClick: {
                enable: true,
                mode: 'push'
              }
            },
            modes: {
              push: {
                quantity: 1
              },
              grab: {
                distance: 200
              }
            }
          },
          particles: {
            color: {
              value: 'rgb(35, 52, 250)'
            },
            number: {
              value: 30,
              limit: 30
            },
            move: {
              enable: true,
              direction: 'top',
              random: true,
              speed: 2,
              trail: {
                enable: false
              },
              vibrate: false
            },
            size: {
              value: {
                min: 1,
                max: 5
              },
              animation: {
                enable: true,
                speed: 5
              }
            },
            shape: {
              type: 'circle'
            },
            links: {
              color: 'rgb(35, 52, 250)',
              distance: 200,
              enable: true,
              width: 2
            }
          },
          pauseOnBlur: true,
          pauseOnOutsideViewport: true
        }}
      />
      <div className={styles.cuadro}>
        <h1 className={styles.myName}>Bastián Paredes</h1>
        <div className={styles.typewriterContainer}>
          <Typewriter
            onInit={(typewriter) => {
              typewriter.typeString('Full Stack Developer').start()
            }}
          />
        </div>
      </div>
      <a className={styles.btnDown} href="#about">
        <BiDownArrowAlt />
      </a>
    </section>
  )
}

export default Home
