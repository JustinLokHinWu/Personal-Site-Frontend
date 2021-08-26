import { Menu } from 'antd'

const HeaderMenu = () => {
    return (
        <Menu
            theme='dark'
            mode='horizontal'
        >
            <Menu.Item>
                <a href="/" rel="noopener noreferrer">
                    Home
                </a>
            </Menu.Item>
        </Menu>
    )
}

export default HeaderMenu
