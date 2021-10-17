import { Menu } from 'antd'

import { HashLink } from 'react-router-hash-link'

const HeaderMenu = () => {
    return (
        <Menu
            theme='light'
            mode='horizontal'
        >
            <Menu.Item
                key='biography'>
                <HashLink
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to='#biography'>Biography</HashLink>
            </Menu.Item>
            <Menu.Item
                key='demos'>
                <HashLink
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to='#demos'>Demos</HashLink>
            </Menu.Item>
        </Menu>
    )
}

export default HeaderMenu
