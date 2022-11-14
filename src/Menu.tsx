import React, { Dispatch, ReactElement, SetStateAction, useState } from 'react'
import { Flex, Text } from 'theme-ui'

export enum Section {
    ABOUT_ME = 'ABOUT_ME',
    HONK_FOR_CORN = 'HONK_FOR_CORN',
}

interface MenuProps {
    selectedSection: Section
    setSelectedSection: Dispatch<SetStateAction<Section>>
}

export default function Menu({
    selectedSection,
    setSelectedSection,
}: MenuProps): ReactElement {
    const [isOpen, setIsOpen] = useState(true)

    return (
        <Flex>
            <Flex
                sx={{
                    left: isOpen ? 0 : '-16rem',
                    width: '16rem',
                    height: '100%',
                    color: 'white',
                    justifyContent: 'center',
                    borderRadius: '0 30px 30px 0',
                    backgroundColor: '#88AF7F',
                    position: 'absolute',
                    transition: 'left .5s ease-in-out',
                }}
            >
                <Flex
                    sx={{
                        flexDirection: 'column',
                    }}
                >
                    {Object.keys(Section).map((section, index) => (
                        <MenuItem
                            key={index}
                            section={section}
                            setSelectedSection={setSelectedSection}
                            isSelected={selectedSection === section}
                        />
                    ))}
                </Flex>
            </Flex>
            <Flex
                sx={{
                    position: 'relative',
                    width: '2rem',
                    height: '2rem',
                    left: isOpen ? '16rem' : 0,
                    mt: '.4rem',
                    ml: '.4rem',
                    transition: 'left .5s ease-in-out',
                    fontSize: '2rem',
                    cursor: 'pointer',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.5)',
                }}
                onClick={() => {
                    setIsOpen(isOpen => !isOpen)
                }}
            />
        </Flex>
    )
}

interface MenuItemProps {
    setSelectedSection: Dispatch<SetStateAction<Section>>
    section: string
    isSelected: boolean
}

function MenuItem({
    setSelectedSection,
    section,
    isSelected,
}: MenuItemProps): ReactElement {
    return (
        <Flex
            onClick={() => {
                setSelectedSection(section as Section)
            }}
            sx={{
                cursor: 'pointer',
                borderRadius: '30px',
                border: '1px solid white',
                p: '0.8rem',
                my: '0.8rem',
                fontSize: '1.2rem',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: isSelected
                    ? 'rgba(255, 255, 255, 0.5)'
                    : 'rgba(255, 255, 255, 0)',
                transition: 'background-color 0.5s',
            }}
        >
            {section.replaceAll('_', ' ')}
        </Flex>
    )
}
