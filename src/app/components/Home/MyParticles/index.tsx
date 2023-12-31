import React, { useCallback } from 'react';

import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import type { Engine } from 'tsparticles-engine';

import styles from './styles.module.scss';

const MyParticles = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine as any);
  }, []);

  return (
    <Particles
      className={styles.particles}
      init={particlesInit}
      options={{
        autoPlay: true,
        background: {},
        fpsLimit: 60,
        fullScreen: false,
        interactivity: {
          detectsOn: 'canvas',
          events: {
            onClick: {
              enable: true,
              mode: 'push'
            },
            onHover: {
              enable: true,
              mode: 'grab'
            }
          },
          modes: {
            grab: {
              distance: 200
            },
            push: {
              quantity: 1
            }
          }
        },
        particles: {
          color: {
            value: '#2034fa'
          },
          links: {
            color: '#2034fa',
            distance: 200,
            enable: true,
            width: 2
          },
          move: {
            direction: 'top',
            enable: true,
            random: true,
            speed: 2,
            trail: {
              enable: false
            },
            vibrate: false
          },
          number: {
            limit: 30,
            value: 30
          },
          shape: {
            type: 'circle'
          },
          size: {
            animation: {
              enable: true,
              speed: 5
            },
            value: {
              max: 5,
              min: 1
            }
          }
        },
        pauseOnBlur: true,
        pauseOnOutsideViewport: true
      }}
    />
  );
};

export default MyParticles;
