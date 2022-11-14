import React from 'react'
import { Flex, Link } from 'theme-ui'

export default function() {
    return (
        <Flex
            sx={{
                fontSize: '2.4rem',
                flexDirection: 'column',
                color: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                maxWidth: '40rem',
                width: '100%',
            }}
        >
            <Flex
                sx={{
                    fontSize: '4.8rem',
                    pb: '1.2rem',
                    ':hover': {
                        transform: 'rotate(10deg) scale(1.2)',
                        transition: 'all 500ms',
                    },
                    transition: 'all 500ms',
                    cursor: 'unset',
                    ml: '-2.4rem',
                }}
            >
                👋🏼
            </Flex>
            I'm Catt. I'm a frontend engineer with a passion for product. I
            specialize in React, TypeScript and dad jokes. It's great to meet
            you.
            <Flex sx={{ flexDirection: 'row', gap: '1.2rem' }}>
                <Link
                    href="https://www.linkedin.com/in/catt-garrod/"
                    sx={{
                        textDecoration: 'underline',
                        color: 'white',
                        mt: '2.4rem',
                    }}
                >
                    LinkedIn
                </Link>

                <Link
                    href="https://github.com/kittenflapz"
                    sx={{
                        textDecoration: 'underline',
                        color: 'white',
                        mt: '2.4rem',
                    }}
                >
                    GitHub
                </Link>
            </Flex>
        </Flex>
    )
}
