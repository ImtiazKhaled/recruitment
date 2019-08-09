import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import { Tag, Button, Typography } from 'antd';


class Entry extends Component {
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.info.count === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount = () => {
    if (this.props.info.count === 0) {
      return <span className={this.getBadgeClasses()}>{this.props.info.count}</span>;
    } else return this.props.info.count;
  };
  incrementEntry = e => {
    this.props.incrementEntry(this.props.info);
  };
  deleteEntry = e => {
    this.props.deleteEntry(this.props.info);
  };

  render() {
    const count = this.props.info.count
    return (
      <div>
        <Typography style={{ fontSize: '2em' }}>{this.props.info.note}</Typography>
        {
          this.props.info.count === 0 ?
            <Tag style={{ fontSize: '1.5em' }} color='gold'> {count} </Tag> :
            <Tag style={{ fontSize: '1.5em' }} color='green'> {count} </Tag>
        }
        <Button className='ml-2' onClick={this.incrementEntry}> Increment </Button>
        <Button type='danger' className='ml-2' onClick={this.deleteEntry}> Delete </Button>
      </div>
    );
  }
}

export default Entry;

