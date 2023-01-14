import { Box, Text } from '@chakra-ui/react'
import { Flex, Spacer, ButtonGroup, Button, Heading, Icon } from '@chakra-ui/react'
import { BsBasket3 } from "react-icons/bs"
import { AiOutlineShoppingCart } from "react-icons/ai"

export const Navbar = () => {

    return (



        <Flex minWidth='max-content' alignItems='center' gap='2' backgroundColor={"#ECE8DD"}>
            <Box>
                <Heading size='sm'>TeeRex Store</Heading>
            </Box>
            <Spacer />

            <Box display={"flex"} gap='20'>
                <Text>Products</Text>
                <Icon as={AiOutlineShoppingCart} boxSize="35px" mx={"center"} paddingLeft={"20px"} />
            </Box>
        </Flex>

    )




}