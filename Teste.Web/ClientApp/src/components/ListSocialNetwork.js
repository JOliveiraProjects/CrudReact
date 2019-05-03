import React, { Component } from 'react';

export class ListSocialNetwork extends Component {

    constructor(props) {
        super(props);

        //props.onFieldChange = onFieldChange;

        this.state = {
            name: null,
            socialnetworks: ['socialnetworks']
        };
    }

    //state = {
    //    socialnetworks: ['socialnetworks']
    //}

    handleText = i => e => {
        let socialnetworks = [...this.state.socialnetworks];
        socialnetworks[i] = e.target.value;
        this.setState({ socialnetworks });
    }

    handleDelete = i => e => {
        e.preventDefault();
        let socialnetworks = [
            ...this.state.socialnetworks.slice(0, i),
            ...this.state.socialnetworks.slice(i + 1)
        ];
        this.setState({ socialnetworks });
    }

    addSocialNetwork = e => {
        e.preventDefault();
        let socialnetworks = this.state.socialnetworks.concat(['']);
        this.setState({ socialnetworks });
        console.log(socialnetworks);
    }

    render() {
        return (
            <div>
                {this.state.socialnetworks.map((socialnetworks, index) => (
                    <fieldset key={index} className="box-form">
                        <legend>Rede Social {index}
                            <button
                                className="btn btn-default float-right"
                                onClick={this.handleDelete(index)}>X</button>
                        </legend>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="socialName">Nome</label>
                            <div className="col-md-4">
                                <input
                                    id="socialName"
                                    type="text"
                                    placeholder="Nome da rede social"
                                    className="form-control input-md"
                                    onChange={this.props.onFieldChange('socialName').bind(this)}
                                    required
                                />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="url">Url</label>
                            <div className="col-md-4">
                                <input
                                    id="url"
                                    type="text"
                                    placeholder="Url"
                                    className="form-control input-md"
                                    onChange={this.props.onFieldChange('url').bind(this)}
                                    required
                                />
                            </div>
                        </div>

                    </fieldset>
                ))}
                <button
                    className="btn btn-default"
                    onClick={this.addSocialNetwork}>Nova rede social</button>
            </div>
        );
    }
}