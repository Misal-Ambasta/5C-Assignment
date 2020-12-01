import React from 'react';
import styles from './UserInfo.module.css';
import { useHistory } from 'react-router-dom'

export default function RepoCard({ data }) {
    const { name, description, owner,id } = data;
    const { avatar_url } = owner;
    const history = useHistory()

    const handleRepoDetails = () => {
        history.push(`./details/${id}`)
    }

    return (
        <div className={styles.repoCard}>
            <div className={styles.avatar}>
                {' '}
                <img  src={avatar_url} />{' '}
            </div>
            <div className={styles.details}>
                <div>Repo name: {name}</div>
                <div>Description: {description===null ? 'No description provided' : description}</div>
                <button onClick={()=>handleRepoDetails()}>More details</button>
            </div>
        </div>
    );
}
