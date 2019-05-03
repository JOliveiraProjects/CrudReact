import React, { Component } from 'react'

export default class IconIf extends Component {

    constructor(props) {
        super(props);
        this.state = { iconStatus: null }
    }

    render() {
        let statusIcon = '';

        switch(this.props.iconStatus) {
            case false: statusIcon = 'fa-ban'; break;
            case true: statusIcon = 'fa-check-circle'; break;
            case null: statusIcon = 'fa-clock'; break;
            default: statusIcon = ''; break;
        }

        return (
            <i className={`fa ${ statusIcon }`}></i>
        )
    }
}

