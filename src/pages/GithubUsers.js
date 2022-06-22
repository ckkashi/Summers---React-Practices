import React, { useEffect, useState } from 'react';

const GithubUsers = () => {

    const [users, setUsers] = useState([]);
    const getUserData = async () => {
        const res = await fetch('https://api.github.com/users');
        const data = await res.json();
        // console.log({res,data})
        setUsers(data);
        // console.log({users});
    }
    useEffect(() => {
        getUserData();
    }, []);

    return (
        <>
            <h1 className='text-center my-3'>List of github users</h1>
            <div className='container'>
                <div className='row'>

                    {
                        users.map((elem) => {
                            return (
                                <div key={elem.id} className='card col-8 col-md-4 bg-light ms-auto me-auto mb-2' style={{ width: '22rem', }}>
                                    <div className='row g-0'>
                                        <div className='col-md-4 p-2 d-flex justify-content-center'>
                                            <img src={elem.avatar_url} className="img-fluid rounded" alt="..." />
                                        </div>
                                        <div className='col-md-8 p-2'>
                                        <p>{elem.login}</p>
                                        <a href={elem.url} className='btn btn-sm btn-primary'>View User</a>
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                    }



                </div>
            </div>
        </>
    )
}

export default GithubUsers
