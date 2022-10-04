import { useDisclosure } from '@chakra-ui/react';
import { createContext, ReactNode, useContext } from 'react';

interface IProvider {
  children: ReactNode;
}

interface SideBarProps {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
  isControlled: boolean;
  getButtonProps: (props?: any) => any;
  getDisclosureProps: (props?: any) => any
}

const SidebarContext = createContext({} as SideBarProps);

export function SidebarProvider({children}: IProvider) {
  const disclosure = useDisclosure();

  return (
    <SidebarContext.Provider value={disclosure}>
      {children}
    </SidebarContext.Provider>
  )
}

export const useSidebarContext = () => useContext(SidebarContext);