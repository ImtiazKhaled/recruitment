import React from 'react';


class Student extends React.Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <h1>{this.props.info.email}</h1>
                <h2>{this.props.info.gender}</h2>
            </div>
         );
    }
}
 
export default Student;