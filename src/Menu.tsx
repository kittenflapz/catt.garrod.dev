import React, { Dispatch, ReactElement, SetStateAction } from 'react'
import { Flex } from 'theme-ui'

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
    return (
        <Flex
            sx={{
                width: '16rem',
                left: 0,
                height: '100%',
                color: 'white',
                justifyContent: 'center',
                borderRadius: '0 30px 30px 0',
                backgroundColor: '#88AF7F',
            }}
        >
            <Flex sx={{ flexDirection: 'column' }}>
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
