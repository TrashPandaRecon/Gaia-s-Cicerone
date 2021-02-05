import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex justifyContent="center" alignItems="center" height="4vw">
    <Heading fontSize="6v">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'with-chakra-ui-typescript',
}