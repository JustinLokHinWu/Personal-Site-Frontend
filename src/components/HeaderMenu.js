import { Menu } from 'antd'
import { motion } from 'framer-motion/dist/framer-motion'

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

    const headerVariant = {
        'hidden': {
            y: -30,
            opacity: 0
        },
        'visible': {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
            }
        }
    }

    return (
        <motion.div
            variants={headerVariant}
            >
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
                                scroll={(el) => {
                                    window.scroll({
                                        top: el.offsetTop,
                                        left: 0,
                                        behavior: 'smooth'
                                    })
                                }}
                                to={entry.to}>
                                {entry.text}
                            </Link>
                        </Menu.Item>
                    )
                }
            </Menu>
        </motion.div>
    )
}

export default HeaderMenu
