import React, { ReactElement, useState } from 'react'
import { Button, Flex } from 'theme-ui'
import Corn from './Corn'

export default function HonkForCorn(): ReactElement {
    const [shouldPlay, setShouldPlay] = useState(false)

    return (
        <Flex>
            <Button
                sx={{
                    backgroundColor: 'rgb(251, 236, 93)',
                    width: '30rem',
                    height: '30rem',
                    fontSize: '1.8rem',
                    borderRadius: '3rem',
                    cursor: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='40' height='48' viewport='0 0 100 100' style='fill:black;font-size:24px;'><text y='50%'>📯</text></svg>")
        16 0, auto;`,
                    color: 'black',
                    boxShadow: '0px 3px 15px rgba(0,0,0,0.2)',
                    fontWeight: 'bold',
                }}
                onMouseDown={e => {
                    setShouldPlay(true)
                    const frequency = (e.clientX + e.clientY) / 16
                    playNote(frequency)
                }}
            >
                HONK FOR CORN
            </Button>
            <Corn shouldPlay={shouldPlay} setShouldPlay={setShouldPlay} />
        </Flex>
    )
}

function playNote(frequency: number): void {
    const audioContext = new AudioContext()
    const mainGainNode = audioContext.createGain()
    mainGainNode.connect(audioContext.destination)
    const osc = audioContext.createOscillator()
    osc.connect(mainGainNode)
    osc.type = 'sawtooth'
    osc.frequency.value = frequency
    osc.start()
    osc.stop(audioContext.currentTime + 1)
}
