import React, {useEffect} from 'react';
import {useParams} from "react-router-dom"
import {  useSelector } from 'react-redux';
import RepoCard from './RepoCard';
import styles from "./home.module.css";
import BackButton from './BackButton'


export default function FollowersRepo() {
    const params = useParams()
    const followersRepo = useSelector((state) => state.followersRepo);


    return (
        <div>
            <BackButton />
        <div className={styles.cardContainer}>
            {followersRepo.length > 0 && followersRepo.map(item => <RepoCard data={item} /> ) }
        </div>
        </div>
    )
}
