import React from 'react';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import { FcGoogle } from 'react-icons/fc';
import { BsGithub, BsFacebook, BsTwitter, BsWhatsapp, BsInbox } from 'react-icons/bs';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../../Assets/carousel1.jpg';
import img2 from '../../../Assets/carousel2.jpg';


const RightSideNav = () => {
    return (
        <div>
            <ButtonGroup vertical>
                <Button variant="outline-primary"><FcGoogle /> Log In with Google</Button>
                <Button variant="outline-dark"><BsGithub /> Log In with Github</Button>
            </ButtonGroup>
            <div className='mt-4'>
                <h5>Find Us On</h5>
                <ListGroup>
                    <ListGroup.Item><BsFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item><BsTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item><BsGithub /> Github</ListGroup.Item>
                    <ListGroup.Item><BsWhatsapp /> Whats App</ListGroup.Item>
                    <ListGroup.Item><BsInbox /> Email</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='mt-4'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </div>
    );
};

export default RightSideNav;