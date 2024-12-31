import { AppShell, Burger, Center, Box, Text } from "@mantine/core"
import { useDisclosure } from "@mantine/hooks";

interface IHeader {
    headerHeight: number
}

export default function Header({ headerHeight }: IHeader) {
    const [opened, { toggle }] = useDisclosure();
    return (
        <AppShell.Header>
            <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
            />
            <Center h={headerHeight}>
                <Box><Text size="lg">ОДО "Белукрпром"</Text></Box>
            </Center>
        </AppShell.Header>
    )
}