import { Affix, Anchor, Button } from 'antd'
import { useState, useEffect } from 'react'
import { BarsOutlined } from '@ant-design/icons'
import IconButton from './IconButton'


const { Link } = Anchor

const HomeNavigation = () => {

    return (
        <Affix>
            { window.innerWidth < 576 && <IconButton icon={BarsOutlined} />}
            <Anchor affix={false}>
                <Link href='/#biography' title='Biography' />
                <Link href='/#demos' title='Demos' />
            </Anchor>
        </Affix>
    )
}

export default HomeNavigation
