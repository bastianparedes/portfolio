import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';
import styles from './styles.module.scss';

const MyParticles = (): JSX.Element => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      className={styles.particles}
      init={particlesInit}
      options={{
        autoPlay: true,
        fullScreen: false,
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
        background: {},
        particles: {
          color: {
            value: '#2034fa'
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
            color: '#2034fa',
            distance: 200,
            enable: true,
            width: 2
          }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true
      }}
    />
  );
};

export default MyParticles;
