import React, { useState, useEffect } from 'react';
import axios from 'axios' //works similar to JS 'fetch' API, is promise-based

import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom'

const UserPage = () => {
    const navigate = useNavigate();
    const { username } = useParams();

    const [repos, setRepo] = useState([]);
    const [user, setUser] = useState([]);

    useEffect(() => {
        searchRepo()
    }, [username])

    useEffect(() => {
        axios ({
            method: 'GET',
            url: `https://api.github.com/users/${username}/repos`,
        }).then( res => {
            setRepo(res.data);
        });
    }, [username]);

    function searchRepo() {
        axios ({
            method: 'GET',
            url: `https://api.github.com/users/${username}`,
        }).then( res => {
            setUser(res.data);
        });
    }
    function navigateRepo(i){
        navigate(`/user/${username}/${i}`)

    }

    function renderRepo(){
        return repos.map((r,i) => <div className="repo-link" key={i}><Link to={`/user/${username}/${r.name}`}>{r.name}</Link><br/>{r.description?r.description:'No description'}</div>)
    }

    return <div className='user'>
    
    <div className='repository-container'>
    <h1>Repositories</h1>
   <div className='repo-style'>{renderRepo()}</div>
   </div>
    </div>;

}

export default UserPage;

