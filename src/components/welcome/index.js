import React, { useState } from 'react';
import { Input, Button } from "antd";

import './welcome.css';

import User from '../../models/user';

const Welcome = (props) => {
    const [name, setName] = useState('');
    
    const clickHost = (e) => User.save(name) && props.history.push('/play');
    const clickJoin = (e) => User.save(name) && props.history.push('/join');

    return (
        <div id="container">
            <div id="content">
                <h1> Hellooo.. <span role="img" aria-label="hi">👋</span></h1>
                <div>
                <Input onChange={ e => setName(e.target.value) } value={name} placeholder="Name" id="name-input"/>
                </div>
                <div id="action-btns">
                    <Button onClick={clickHost}>Host</Button>
                    <Button onClick={clickJoin}>Join</Button>
                </div>
            </div>
        </div>
    );
}


export default Welcome;