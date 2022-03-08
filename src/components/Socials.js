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
            />
            <IconButton
                icon={LinkedinFilled}
                text={''}
                link={''}
            />
            <IconButton
                icon={MailFilled}
                text={''}
                tooltip='Copied to clipboard'
                onClick={() => {
                    navigator.clipboard.writeText('JustinLHWu@gmail.com')
                }}
            />
        </div>
    )
}

export default Socials
