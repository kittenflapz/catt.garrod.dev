import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { keyframes } from '@emotion/react'
import { Flex } from 'theme-ui'

export default function Corn({
    shouldPlay,
    setShouldPlay,
}: {
    shouldPlay: boolean
    setShouldPlay: Dispatch<SetStateAction<boolean>>
}): ReactElement {
    const cornimation = (rotationDegree: number): string => {
        return keyframes`
    from {
      transform: rotate(-30deg) scale(0);
    }
    to {
        transform: rotate(${rotationDegree}deg) scale(150);
    }
    `
    }

    const xPosition = Math.random() * 100
    const yPosition = Math.random() * 100
    // could be negative
    const rotationDegree = (Math.random() - 0.5) * 180

    return (
        <Flex
            sx={{
                position: 'fixed',
                animation: `${cornimation(rotationDegree)} 1s forwards`,
                display: shouldPlay ? 'flex' : 'none',
                top: `${xPosition}%`,
                right: `${yPosition}%`,
            }}
            onAnimationEnd={() => setShouldPlay(false)}
        >
            🌽
        </Flex>
    )
}
