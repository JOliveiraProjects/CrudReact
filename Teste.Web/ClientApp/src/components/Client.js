import React, { Component } from 'react';
import { ListAddress } from './ListAddress';
import { ListTelephone } from './ListTelephone';
import { ListSocialNetwork } from './ListSocialNetwork';

export class Client extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null,
            cpf: null,
            rg: null,
            birthDate: null,
            telephones: [],
            address: [],
            socialNetwork: [],
            displayErrors: false
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

        if (!event.target.checkValidity()) {
            this.setState({ displayErrors: true });
            return;
        }
        this.setState({ displayErrors: false });

        const data = new FormData(event.target);

        const cliente = {
            id: null,
            name: data.nome,
            cpf: data.cpf,
            rg: data.rg,
            birthDate: data.birthDate
        };

        fetch('api/client/save', {
            method: 'POST',
            body: JSON.stringify(cliente)
        });

        console.log(cliente);
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
                                className={this.state.displayErrors ? 'form-control input-md displayErrors' : 'form-control input-md'}
                                value={this.state.name || ''}
                                onChange={this.onFieldChange('name').bind(this)}
                                required />
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
                                onChange={this.onFieldChange('cpf').bind(this)}
                                required
                            />
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
                                type="date"
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