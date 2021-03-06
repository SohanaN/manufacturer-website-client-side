import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import User from './User';

const Users = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://still-temple-50521.herokuapp.com/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-danger fw-bold">All Users: {users.length}</h2>
            <div>
                <table className="table">
                    <thead className="thead-dark">
                        <tr>
                            <th></th>
                            <th>Email</th>
                            <th>Account Type</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <User
                                key={user._id}
                                user={user}
                                index={index}
                                refetch={refetch}
                            ></User>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;