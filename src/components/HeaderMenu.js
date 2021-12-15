import { Menu } from 'antd'

import { HashLink as Link } from 'react-router-hash-link'
import { HomeOutlined } from '@ant-design/icons'

const HeaderMenu = () => {
    const entries = [
        {
            text: 'Biography',
            key: 'biography',
            to: '/#biography'
        },
        {
            text: 'Demos',
            key: 'demos',
            to: '/#demos'
        },
        {
            text: 'Experience',
            key: 'experience',
            to: '/#experience'
        }
    ]

    return (
        <Menu
            theme='light'
            mode='horizontal'
        >
            <Menu.Item
                key='home'>
                <Link
                    scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                    to='/'><HomeOutlined /></Link>
            </Menu.Item>
            {
                entries.map(entry => 
                    <Menu.Item
                        key={entry.key}>
                        <Link
                            scroll={(el) => el.scrollIntoView({ behavior: 'smooth' })}
                            to={entry.to}>{entry.text}</Link>
                    </Menu.Item>
                )
            }
        </Menu>
    )
}

export default HeaderMenu
