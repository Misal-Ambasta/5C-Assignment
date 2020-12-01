import React from 'react'

export default function UserInfo({data}) {
    const { owner } = data[0]
    const { login, avatar_url, } = owner
    return (
        <div>
            <div>
                <img  src={avatar_url} alt='user img'/>
            </div>
            <div>Name: {login}</div>
            
        </div>
    )
}
