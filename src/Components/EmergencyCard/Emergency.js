import React from 'react';
import { Button, Card, CardBody,  } from 'mdbreact';


const EMCard = (props) => {
    return(
        <Card style={{width: 300, height: 140, marginHorizontal: 20, marginVertical: 40, backgroundColor: "#F2F3F4", justifyContent: "center", alignContent: "center", alignItems: "center"}}>
        <CardBody>
            <h1 style={{fontSize: 15, textAlign: "center"}}>NOM: {props.data.nom}</h1>
            <h1 style={{fontSize: 15, textAlign: "center"}}>TEL: {props.data.numero}</h1>
            <h1 style={{fontSize: 15, textAlign: "center"}}>15 minutes ago</h1>
            <div style={{flexDirection: "row",  }}>
               <Button color="primary" size="sm">Dispactcher</Button>
               <Button color="secondary" size="sm">Terminer</Button>
            </div>
            
        </CardBody>
        </Card>

    );
}

class EmergencyCard extends React.Component {

    constructor(props) {
        super(props);
  this.state={
    one: {nom: "Djibril Sall", numero: "+15134490428"},
    two: {nom: "Ahmadou Bamba Yakhine Diop", numero: "+16465353881"}
  }
}
  render() {
    return (
        <div>
            <img src="http://duosolodanse.com/wp-content/uploads/2016/04/logo-suma-assistance.jpg" width="280" height="50"/>
            <div

             style={{
                 flexDirection: "column",
                 justifyContent: "center",
                 alignContent: "center",
                 alignItems: "center"
                }}
            >
                <EMCard data={this.state.one} />
                <EMCard data={this.state.two} />
            </div>
            
        </div>
     
    )
  }
}

export default EmergencyCard;