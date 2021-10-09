import { GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import React from 'react'
import IconButton from './IconButton';

const Socials = () => {
    return (
        <div style={{'display': 'flex', 'justifyContent': 'center'}}>
            <IconButton
                icon={GithubFilled}
                text={''}
                link={''}
            />
            <IconButton
                icon={LinkedinFilled}
                text={''}
                link={''}
            />
            <IconButton
                icon={MailFilled}
                text={''}
                link={''}
            />
        </div>
    )
}

export default Socials
