import React, { Component } from 'react';
import {Button, Card,  CardBody, CardHeader, CardText, CardTitle } from 'mdbreact';

class Person extends Component {
  render() {
    return (
        <Card style={{width: '22rem', marginTop: '1rem'}}>
        <CardHeader color="light-blue lighten-1">+221775053182</CardHeader>
        <CardBody>
          <CardTitle>Special title treatment</CardTitle>
          <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
          <Button color="deep-orange">go somewhere</Button>
        </CardBody>
        </Card>
    );
  }
}

export default Person;
