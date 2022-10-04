import {
  Avatar,
  Flex,
  HStack,
  Icon,
  IconButton,
  Text,
  useBreakpointValue
} from '@chakra-ui/react';
import { useSidebarContext } from '../contexts/sidebarContext';
import { FiMenu } from 'react-icons/fi';

export function Header() {
  const { onOpen } = useSidebarContext();

  const isMobile = useBreakpointValue({
    base: true,
    lg: false,
  });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1120}
      h="20"
      mx="auto"
      px="2"
      py="2"
      align="center"
      boxShadow="0 1px 0 #ccc"
      color="gray.500"
      fontWeight="bold"
    >
      {isMobile && (
        <IconButton
          aria-label='Modal'
          icon={<Icon as={FiMenu} />}
          onClick={onOpen}
          variant="unstyled"
          fontSize="20"
          mr="2"
        ></IconButton>
      )}
      <Text>LOGO</Text>
      <Flex ml="auto">
        <HStack>
          <Text>Lucas Borges</Text>
          <Avatar size="md" name='Lucas borges' />
        </HStack>
      </Flex>
    </Flex>
  )
}