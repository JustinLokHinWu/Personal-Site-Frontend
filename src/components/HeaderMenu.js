import { Menu } from 'antd'

import { HashLink as Link } from 'react-router-hash-link'

const HeaderMenu = () => {
    return (
        <Menu
            theme='light'
            mode='horizontal'
        >
            <Menu.Item
                key='biography'>
                <Link
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to='/#biography'>Biography</Link>
            </Menu.Item>
            <Menu.Item
                key='demos'>
                <Link
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to='/#demos'>Demos</Link>
            </Menu.Item>
        </Menu>
    )
}

export default HeaderMenu
