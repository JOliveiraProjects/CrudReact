import React, { Component } from 'react';

export class ListAddress extends Component {
    state = {
        address: ['address']
    }

    handleText = i => e => {
        let address = [...this.state.address];
        address[i] = e.target.value;
        this.setState({ address });
    }

    handleDelete = i => e => {
        e.preventDefault();
        let address = [
            ...this.state.address.slice(0, i),
            ...this.state.address.slice(i + 1)
        ];
        this.setState({ address });
    }

    addAddress = e => {
        e.preventDefault();
        let address = this.state.address.concat(['']);
        this.setState({ address });
    }

    render() {
        return (
            <div>
                {this.state.address.map((address, index) => (
                    <fieldset key={index} className="box-form">
                        <legend>Endereços {index} <button className="btn btn-default float-right" onClick={this.handleDelete(index)}>X</button></legend>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="addressType">Tipo de endereço</label>
                            <div className="col-md-4">
                                <select
                                    id="addressType"
                                    name="addressType"
                                    className="form-control"
                                    required>
                                    <option value="1">Residencial</option>
                                    <option value="2">Comercial</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="thoroughfare">Logradouro</label>
                            <div className="col-md-4">
                                <input
                                    id="thoroughfare"
                                    name="thoroughfare"
                                    type="text"
                                    placeholder="Logradouro"
                                    className="form-control input-md"
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="number">Número</label>
                            <div className="col-md-4">
                                <input
                                    id="number"
                                    name="number"
                                    type="text"
                                    placeholder="Número"
                                    className="form-control input-md"
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="complement">Complemento</label>
                            <div className="col-md-4">
                                <input
                                    id="complement"
                                    name="complement"
                                    type="text"
                                    placeholder="Complemento"
                                    className="form-control input-md" />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="neighborhood">Bairro</label>
                            <div className="col-md-4">
                                <input
                                    id="neighborhood"
                                    name="neighborhood"
                                    type="text"
                                    placeholder="Bairro"
                                    className="form-control input-md"
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="city">Cidade</label>
                            <div className="col-md-4">
                                <input
                                    id="city"
                                    name="city"
                                    type="text"
                                    placeholder="Cidade"
                                    className="form-control input-md"
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="state">Estado</label>
                            <div className="col-md-4">
                                <input
                                    id="state"
                                    name="state"
                                    type="text"
                                    placeholder="Estado"
                                    className="form-control input-md"
                                    required />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-md-4 control-label" htmlFor="postcode">CEP</label>
                            <div className="col-md-4">
                                <input
                                    id="postcode"
                                    name="postcode"
                                    type="text"
                                    placeholder="CEP"
                                    className="form-control input-md"
                                    required />
                            </div>
                        </div>

                    </fieldset>
                ))}
                <button
                    className="btn btn-default"
                    onClick={this.addAddress}>Novo endereço</button>
            </div>
        );
    }
}