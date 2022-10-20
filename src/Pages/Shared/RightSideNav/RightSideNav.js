import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub } from 'react-icons/bs';
const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FcGoogle /> Log In with Google</Button>
                <Button variant="outline-dark"><BsGithub /> Log In with Github</Button>
            </ButtonGroup>
            <div>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item>Facebook</ListGroup.Item>
                    <ListGroup.Item>Twiteer</ListGroup.Item>
                    <ListGroup.Item>Github</ListGroup.Item>
                    <ListGroup.Item>Whats App</ListGroup.Item>
                    <ListGroup.Item>Email</ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    );
};

export default RightSideNav;