import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { LogoBox } from './logo_styles'

const Logo = () => {
    const footPrintImg = `/images/footprint${useColorModeValue('', '-dark')}.png`

    return (
        <Link href='/'>
            <LogoBox>
                <Image src={footPrintImg} width='20' height='20' alt='logo' />
                <Text
                    color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                    fontFamily='Roboto'
                    fontWeight='bold'
                    ml='3'>
                        Harsha Datla
                </Text>
            </LogoBox>
        </Link>
    )
}

export default Logo