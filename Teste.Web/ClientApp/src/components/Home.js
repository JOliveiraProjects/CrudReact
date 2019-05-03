import React, { Component } from 'react';

export class Home extends Component {
  displayName = Home.name

    constructor(props) {
        super(props);
        this.state = { clients: [], loading: true };

        fetch('api/client')
            .then(response => response.json())
            .then(data => {
                this.setState({ clients: data, loading: false });
            });
    }

    static renderClientTable(clients) {
        return (
            <table className='table'>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>CPF</th>
                        <th>Data de Nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        clients.map(client =>
                            <tr key={client._id}>
                                <td>{client.name}</td>
                                <td>{client.cpf}</td>
                                <td>{client.birth_date}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : Home.renderClientTable(this.state.clients);

        return (
            <div>
                <h1>Lista de clientes</h1>
                {contents}
                <a className="btn btn-default" href={'/client'}>Novo Cliente</a>
            </div>
        );
    }
}
