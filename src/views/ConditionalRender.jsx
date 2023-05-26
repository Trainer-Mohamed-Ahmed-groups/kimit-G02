import React from 'react'
import Welcome from '../components/Welcome';
import Login from '../components/Login';

export default function ConditionalRender() {
    var isLogin = true;
    return (
        <div>
            {isLogin ? <Welcome />: <Login />}
        </div>
    )
}
