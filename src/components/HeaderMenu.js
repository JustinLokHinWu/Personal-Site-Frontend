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
        },
        {
            text: 'Contacts',
            key: 'contacts',
            to: '#contacts'
        }
    ]

    return (
        <Menu
            theme='dark'
            mode='horizontal'
        >
            <Menu.Item
                key='home'>
                <Link
                    smooth
                    to='/#'><HomeOutlined /></Link>
            </Menu.Item>
            {
                entries.map(entry => 
                    <Menu.Item
                        key={entry.key}>
                        <Link
                            smooth
                            to={entry.to}>{entry.text}</Link>
                    </Menu.Item>
                )
            }
        </Menu>
    )
}

export default HeaderMenu
