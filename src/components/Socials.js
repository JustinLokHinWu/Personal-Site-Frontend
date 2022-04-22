import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import React from 'react'
import IconButton from './IconButton';

const Socials = () => {
    return (
        <div style={{'display': 'flex', 'justifyContent': 'center'}}>
            <IconButton
                icon={GithubFilled}
                text={''}
                link={'https://github.com/JustinLokHinWu'}
                size='large'
            />
            <IconButton
                icon={LinkedinFilled}
                text={''}
                link={'https://www.linkedin.com/in/justin-wu-7a197a172/'}
                size='large'
            />
            <IconButton
                icon={MailFilled}
                text={''}
                tooltip='Copied to clipboard'
                onClick={() => {
                    navigator.clipboard.writeText('JustinLHWu@gmail.com')
                }}
                size='large'
            />
        </div>
    )
}

export default Socials
