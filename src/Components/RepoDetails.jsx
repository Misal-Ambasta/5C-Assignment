import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styles from './UserInfo.module.css';

export default function RepoDetails() {
    const params = useParams();
    const data = useSelector((state) => state.data);
    const item = data.find((item) => item.id == params.id);
    const { owner, name, homepage, description, size, language, forks_count, clone_url, watchers_count, stargazers_count, created_at, updated_at, svn_url } = item;
    const { avatar_url } = owner;

    return (
        <div className={styles.repoDetails}>
            <div>
                {' '}
                <div>

                <img src={avatar_url} alt="img" />{' '}
                </div>
                <a href={svn_url} target="_blank">
                    View repo
                </a>
            </div>
            <div>
                <div>{name}</div>
                <div> {description === null ? 'No description provided' : description}</div>
                <div>Fork count: {forks_count}</div>
                <div>Watcher count: {watchers_count}</div>
                <div>Star count: {stargazers_count}</div>
                <div>Created at: {created_at}</div>
                <div>Updated at: {updated_at}</div>
            </div>
        </div>
    );
}
