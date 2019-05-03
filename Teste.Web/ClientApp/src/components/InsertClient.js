import React, { Component } from 'react';
import { ListAddress } from './ListAddress';
import { ListTelephone } from './ListTelephone';
import { ListSocialNetwork } from './ListSocialNetwork';

export class InsertClient extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            cpf: null,
            rg: null,
            birthDate: null,
            telephones: [],
            address: [],
            socialNetwork: []
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    onFieldChange(fieldName) {
        return function (event) {
            this.setState({ [fieldName]: event.target.value });
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        alert('A name was submitted: ' + this.state.name);
        console.log(this.state);
    }

    render() {
        return (
            <form className="form-horizontal" onSubmit={this.handleSubmit}>
                <fieldset className="box-form">
                    <legend>Informações Pessoais</legend>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="name">Nome completo</label>
                        <div className="col-md-4">
                            <input
                                id="name"
                                type="text"
                                placeholder="Seu nome completo"
                                className="form-control input-md"
                                value={this.state.name || ''}
                                onChange={this.onFieldChange('name').bind(this)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="cpf">CPF</label>
                        <div className="col-md-4">
                            <input
                                id="cpf"
                                type="text"
                                placeholder="Documento CPF"
                                className="form-control input-md"
                                value={this.state.cpf || ''}
                                onChange={this.onFieldChange('cpf').bind(this)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="rg">RG</label>
                        <div className="col-md-4">
                            <input
                                id="rg"
                                type="text"
                                placeholder="Documento RG"
                                className="form-control input-md"
                                value={this.state.rg || ''}
                                onChange={this.onFieldChange('rg').bind(this)} />
                        </div>
                    </div>

                    <div className="form-group">
                        <label className="col-md-4 control-label" htmlFor="birthDate">Data de nascimento</label>
                        <div className="col-md-4">
                            <input
                                id="birthDate"
                                type="text"
                                placeholder="Data de nascimento"
                                className="form-control input-md"
                                value={this.state.birthDate || ''}
                                onChange={this.onFieldChange('birthDate').bind(this)} />
                        </div>
                    </div>
                </fieldset>

                <ListAddress />
                <ListTelephone />
                <ListSocialNetwork onFieldChange={this.onFieldChange} ListSocialNetwork={this.state.socialNetwork} />

                <div className="box-form">
                    <input className="btn btn-default" type="submit" value="Salvar" />
                    <a className="btn btn-default" href={'/'}>Cancelar</a>
                </div>
            </form>
        );
    }
}