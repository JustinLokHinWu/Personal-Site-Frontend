import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import React from 'react'
import { Row } from 'antd'
import IconButton from './IconButton';

const Socials = () => {
    return (
        <Row>
            <IconButton
                icon={LinkedinFilled}
                text={'LinkedIn'}
                link={'https://www.linkedin.com/in/justin-wu-7a197a172/'}
                size='large'
            />
            <IconButton
                icon={MailFilled}
                text={'Email'}
                tooltip='Copied to clipboard'
                onClick={() => {
                    navigator.clipboard.writeText('JustinLHWu@gmail.com')
                }}
                size='large'
            />
            <IconButton
                icon={GithubFilled}
                text={'GitHub'}
                link={'https://github.com/JustinLokHinWu'}
                size='large'
            />
        </Row>    
    )
}

export default Socials
