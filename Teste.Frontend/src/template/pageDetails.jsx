import React from 'react'

export default props => {

    const data = () => {
        if(props.proposed !== null) {
            return (
                <div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Dados Pessoais</div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required uppercase col-12 col-sm-6" id="form-group-Nome">
                            <label htmlFor="Nome">Nome Completo</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Nome" value={props.proposed[0].ds_Name} type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-CpfPessoa">
                            <label htmlFor="CpfPessoa">CPF</label>
                            <input className="form-control form-control-sm" disabled="disable" name="CpfPessoa" type="text" value={props.proposed[0].nr_Cpf} />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-Nascimento">
                            <label htmlFor="Nascimento">Data Nascimento</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Nascimento" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-4 col-lg-3" id="form-group-Genero">
                            <label htmlFor="Genero">Sexo</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Genero" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-EstadoCivil">
                            <label htmlFor="EstadoCivil">Estado Civil</label>
                            <input className="form-control form-control-sm" disabled="disable" name="EstadoCivil" type="text" />
                        </div>
                    </div>
                    <div className="row ng-hide">
                        <div className="col-12 a7 mb-3"></div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-Email">
                            <label htmlFor="Email">Email Pessoal</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Email"  />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-4 col-lg-3" id="form-group-TelefoneCelular">
                            <label htmlFor="TelefoneCelular">DDD+Celular</label>
                            <input className="form-control form-control-sm" disabled="disable" name="TelefoneCelular" type="text"/>
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-4 col-lg-3" id="form-group-TelefoneResidencial">
                            <label htmlFor="TelefoneResidencial">DDD+Telefone</label>
                            <input className="form-control form-control-sm" disabled="disable" name="TelefoneResidencial" type="text" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Naturalidade</div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-PaisNatural">
                            <label htmlFor="PaisNatural">País</label>
                            <input className="form-control form-control-sm" disabled="disable" name="PaisNatural" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-EstadoNatural">
                            <label htmlFor="EstadoNatural">Estado</label>
                            <input className="form-control form-control-sm" disabled="disable" name="EstadoNatural" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-CidadeNatural">
                            <label htmlFor="CidadeNatural">Cidade</label>
                            <input className="form-control form-control-sm" disabled="disable" name="CidadeNatural" type="text" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Documento de Indentificação</div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-TipoDocIdentificacao">
                            <label htmlFor="TipoDocIdentificacao">Tipo de Documento</label>
                            <input className="form-control form-control-sm" disabled="disable" name="TipoDocIdentificacao" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-DocIdentificacao">
                            <label htmlFor="DocIdentificacao">Número do Documento</label>
                            <input className="form-control form-control-sm" disabled="disable" name="DocIdentificacao" type="text"/>
                        </div>
                        <div className="form-group col-12 col-sm-6 col-lg-3" id="form-group-OrgaoExpedidorDoc">
                            <label htmlFor="OrgaoExpedidorDoc">Orgão Expedidor</label>
                            <input className="form-control form-control-sm" disabled="disable" disabled="disable" name="OrgaoExpedidorDoc" type="text" />
                        </div>
                        <div className="form-group  col-12 col-sm-6 col-lg-3" id="form-group-EstadoExpedidorDoc">
                            <label htmlFor="EstadoExpedidorDoc">Estado Expedidor</label>
                            <input className="form-control form-control-sm" disabled="disable" name="EstadoExpedidorDoc" type="text" />
                        </div>
                    </div>
                    <div className="row ng-hide">
                        <div className="col-12 a7 mb-3"></div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-img  col-12 col-sm-6 col-lg-4" id="form-group-DocumentoCNH">
                            <label htmlFor="DocumentoCNH">Foto CNH</label>
                            <label htmlFor="img-DocumentoCNH" id="label-img-DocumentoCNH" className="label-img-upload fa fa-camera"></label>
                        </div>
                        <div className="form-group form-group-img  col-12 col-sm-6 col-lg-4" id="form-group-DocumentoFrente">
                            <label htmlFor="DocumentoFrente">Foto Frente RG</label>
                            <label htmlFor="img-DocumentoFrente" id="label-img-DocumentoFrente" className="label-img-upload fa fa-camera"></label>
                        </div>
                        <div className="form-group form-group-img  col-12 col-sm-6 col-lg-4" id="form-group-DocumentoVerso">
                            <label htmlFor="DocumentoVerso">Foto Verso RG</label>
                            <label htmlFor="img-DocumentoVerso" id="label-img-DocumentoVerso" className="label-img-upload fa fa-camera"></label>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Endereço</div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required col-12 col-sm-4 col-lg-3" id="form-group-Cep">
                            <label htmlFor="Cep">CEP</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Cep" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6" id="form-group-Endereco">
                            <label htmlFor="Endereco">Endereço (Rua)</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Endereco" type="text"/>
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-2 col-lg-3" id="form-group-EnderecoNumero">
                            <label htmlFor="EnderecoNumero">Número</label>
                            <input className="form-control form-control-sm" disabled="disable" name="EnderecoNumero" type="text" />
                        </div>
                        <div className="form-group  col-12 col-sm-6 col-lg-3" id="form-group-Complemento">
                            <label htmlFor="Complemento">Complemento</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Complemento" type="text" />
                        </div>
                        <div className="form-group  col-12 col-sm-6 col-lg-3" id="form-group-Bairro">
                            <label htmlFor="Bairro">Bairro</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Bairro" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-Cidade">
                            <label htmlFor="Cidade">Cidade</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Cidade" type="text" />
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-Estado">
                            <label htmlFor="Estado">UF</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Estado" type="text" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Dados Profissionais</div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-Cargo">
                            <label htmlFor="Cargo">Cargo</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Cargo" type="text"/>
                        </div>
                        <div className="form-group  col-12 col-sm-6 col-lg-3" id="form-group-PhoneCommercial">
                            <label htmlFor="PhoneCommercial">DDD+Telefone</label>
                            <input className="form-control form-control-sm" disabled="disable" name="PhoneCommercial" type="text"/>
                        </div>
                        <div className="form-group form-group-required col-12 col-sm-6 col-lg-3" id="form-group-ProfessionalMail">
                            <label htmlFor="ProfessionalMail">Email Profissional</label>
                            <input className="form-control form-control-sm" disabled="disable" name="ProfessionalMail" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Informações Adicionais</div>
                    </div>
                    <div className="row">
                        <div className="form-group  form-check col-12">
                            <input  className="form-check-input" disabled="disable" name="NorteAmericano" type="checkbox" />
                            <label htmlFor="NorteAmericano">Cidadão Norte-Americano (EUA)</label>
                        </div>
                        <div className="form-group  form-check col-12 col-sm-4">
                            <input className="form-check-input" disabled="disable" name="Pep" type="checkbox" />
                            <label htmlFor="Pep">Pessoa Politicamente Exposta (PEP)</label>
                        </div>
                        <div className="form-group  col-12 col-sm-5" id="form-group-TipoRelacPep">
                            <label htmlFor="TipoRelacPep">Tipo de PEP</label>
                            <input className="form-control form-control-sm" disabled="disable" name="TipoRelacPep" type="text" />
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-12 a7 mb-3">Dados Bancários</div>
                    </div>
                    <div className="row">
                        <div className="form-group form-group-required col-12 col-md-6 col-lg-4" id="form-group-Banco">
                            <label htmlFor="Banco">Banco</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Banco" type="text" />
                        </div>
                        <div className="form-group form-group-required col-9 col-md-4 col-lg-3" id="form-group-Agencia">
                            <label htmlFor="Agencia">Agência</label>
                            <input className="form-control form-control-sm" disabled="disable" name="Agencia" type="text" />
                        </div>
                        <div className="form-group form-group-required col-9 col-md-4 col-lg-3" id="form-group-ContaCorrente">
                            <label htmlFor="ContaCorrente">Conta Corrente</label>
                            <input className="form-control form-control-sm" disabled="disable" name="ContaCorrente" type="text" />
                        </div>
                        <div className="form-group col-3 col-md-2 col-lg-1" id="form-group-DigitoContaCorrente">
                            <label htmlFor="DigitoContaCorrente">Dig</label>
                            <input className="form-control form-control-sm" disabled="disable" name="DigitoContaCorrente" type="text" />
                        </div>
                    </div>
                </div>
            )
        }

        
    }

    return (
        <div className="cd-panel cd-panel--from-right js-cd-panel-main">
            
            <header className="cd-panel__header">
                <h2>Detalhe da Operação</h2>
                <a href="#0" className="cd-panel__close js-cd-close">Close</a>
            </header>
            <div className="cd-panel__container">
                <div className="cd-panel__content">
                    <form id="FormCadastro" name="FormCadastro" >
                        {data()}
                    </form>
                </div>
            </div>
        </div>
    )
}
