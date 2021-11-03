import Logo from "../logo/logo";
import NextLink from 'next/link'
import { Box } from "@chakra-ui/layout";
import { useColorModeValue } from "@chakra-ui/color-mode";

const LinkItem = ({href, path, children}) => {
    const active = href === path 
    const inactiveColor = useColorModeValue('gray.200', 'whiteAlpha.900')

    return (
        <NextLink href={href}>
            <Link 
                p='2'
                bg={active ? 'glassTeal' : undefined}
                color={active ? '#202023' : inactiveColor}>
                    {children}
            </Link>
        </NextLink>
    )
}

const Navbar = props => {
    const { path } = props

    return (
        <Box 
            position='fixed'
            as='nav'
            w='100%'
            bg={useColorModeValue('#ffffff40', '#20202380')}
            style={{backdropFilter: 'blur(10px)'}}
            zIndex='1'
            {...props}
        >
            Navbar
        </Box>
    )
}

export default Navbar;