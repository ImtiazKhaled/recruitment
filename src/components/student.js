import React from 'react';


class Student extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.info.phone}</h1>
                <h2>{this.props.info.notes}</h2>
                <h2>{this.props.info.interestLevel}</h2>
            </div>
         );
    }
}
 
export default Student;