import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styles from './home.module.css';
import { searchFollowersRepos } from '../Redux/actions';
import { useHistory } from 'react-router-dom';
import BackButton from './BackButton';

export default function Followers() {
    const followers = useSelector((state) => state.followers);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleGetRepo = (item) => {
        dispatch(searchFollowersRepos(item));
        history.push(`followers/repo/${item}`);
        //   alert(item)
    };
    return (
        <div>
            <BackButton />
            <div className={styles.followers}>
                {followers.length > 0 &&
                    followers.map((item) => (
                        <div onClick={() => handleGetRepo(item.login)}>
                            <div>
                                <img src={item.avatar_url} alt="profile_img" />
                            </div>
                            <div className={styles.details}>
                                <div>{item.login}</div>
                                <div>{item.type}</div>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
}
