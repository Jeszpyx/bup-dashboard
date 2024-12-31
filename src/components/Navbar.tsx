import { AppShell, Button, Text } from "@mantine/core";
import { NavLink } from "react-router";
import { useState } from "react";

type TMenuItem = {
    title: string
    link: string
}

const menu: TMenuItem[] = [
    {
        title: 'Главная',
        link: '',
    },
    {
        title: 'Доски',
        link: '/boards',
    },    
    {
        title: 'Задачи',
        link: '/tasks',
    },
    {
        title: 'Контрагенты',
        link: '/agents',
    },
]

export default function Navbar() {
    const [activeTab, setActiveTab] = useState<string>(menu[0].title)

    return (
        <AppShell.Navbar p="md" >
            {menu.map(el => (
                <Button
                    variant={activeTab === el.title ? "filled" : "outline"}
                    component={NavLink}
                    to={el.link}
                    color='lime'
                    fullWidth
                    mb={15}
                    onClick={() => { setActiveTab(el.title) }}
                >
                    <Text>{el.title}</Text>
                </Button>
            ))}
        </AppShell.Navbar>
    )
}