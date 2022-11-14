import React, { useState } from 'react'
import { Flex } from 'theme-ui'
import AboutMe from './AboutMe'
import HonkForCorn from './HonkForCorn/HonkForCorn'
import Menu, { Section } from './Menu'

// 344138
// 97836C
// C7B18B
// F3E4B0
// CB4E34

function App() {
    const [selectedSection, setSelectedSection] = useState<Section>(
        Section.ABOUT_ME
    )
    return (
        <Flex
            sx={{
                width: '100%',
                height: '100vh',
            }}
        >
            <Menu
                setSelectedSection={setSelectedSection}
                selectedSection={selectedSection}
            />
            <Flex
                sx={{
                    width: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
            >
                {selectedSection === Section.ABOUT_ME && <AboutMe />}
                {selectedSection === Section.HONK_FOR_CORN && <HonkForCorn />}
            </Flex>
        </Flex>
    )
}

export default App
