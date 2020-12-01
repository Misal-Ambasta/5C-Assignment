import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchRepos, getFollowers } from '../Redux/actions';
import { useHistory } from "react-router-dom"
import UserInfo from './UserInfo';
import RepoCard from './RepoCard';
import styles from './home.module.css'

export default function Home() {
    const [ search, setSearch ] = useState('');
    const dispatch = useDispatch();
    const history = useHistory()
    const data = useSelector((state) => state.data);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(searchRepos(search));
    };

    // useEffect(()=> {
    //     if(data.length > 0){

    //     }
    // })

    const handleFollowers = () => {
      console.log(data[0].owner.login);
        dispatch(getFollowers(data[0].owner.login))
        history.push('/followers')
        
    }
    console.log(data);
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} />
                <button>Search</button>
            </form>

            {data.length > 0 && (
                <div >
                    {' '}
                    <UserInfo data={data} />
                    <button onClick={handleFollowers}>Followers</button>

                    <div className={styles.cardContainer}>{data.map((item) => <RepoCard data={item} />)}</div>
                </div>
            )}
        </div>
    );
}
