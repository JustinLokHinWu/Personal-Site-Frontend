import { Menu } from 'antd'

const HeaderMenu = () => {
    return (
        <Menu
            theme='light'
            mode='horizontal'
        >
            <Menu.Item
                key='home'>
                <a href="/" rel="noopener noreferrer">
                    Home
                </a>
            </Menu.Item>
            <Menu.Item
                key='biography'>
                <a href="/" rel="noopener noreferrer">
                    Biography
                </a>
            </Menu.Item>
            <Menu.Item
                key='demos'>
                <a href="/" rel="noopener noreferrer">
                    Demos
                </a>
            </Menu.Item>
        </Menu>
    )
}

export default HeaderMenu
