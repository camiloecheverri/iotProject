import React, { Component } from 'react'
import { Button, Form, FormGroup } from 'reactstrap'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../actions/authActions";
import axios from 'axios';
import styled from 'styled-components'
const Styles = styled.div`
.login-form{
    width: 100%;
    max-width: 330px;
    padding: 15px;
    margin: auto;
    height: 100%;
}
`
class setSchedule extends Component {
    state = {
        userName: "",
        password: "",
        error: "",
        encender: false,
        startHour: "",
        startMinute: "",
        finishHour: "",
        finishMinute: "",
    }
    handleChange = (event) => {
        const { name, value } = event.target
        this.setState({ [name]: value })
    }
    handleSubmit = event => {
        event.preventDefault();
        if (this.state.encender) {
            axios.get("http://10.146.106.215/LED=OFF?")
        } else {
            axios.get("http://10.146.106.215/LED=ON?")
        }
        this.setState({ encender: !this.state.encender })
    };
    handleSubmitSchedule = event => {
        event.preventDefault();
        let inicio = Date.parse("01/01/2000 "+this.state.startHour + ":" + this.state.startMinute)
        let final = Date.parse("01/01/2000 "+this.state.finishHour + ":" + this.state.finishMinute)
        let diferencia = final - inicio
        console.log(diferencia);
        
        if (diferencia>0) {
            axios.get("http://10.146.106.215/HOUR"+diferencia+"?")
            this.setState({startHour:"",startMinute:"",finishHour:"",finishMinute:""})
        } else {
            this.setState({ error: "La hora de inicio no puede ser superior a la fecha de fin" })
        }
    }
    handleClick = () => {
        this.setState({ error: "" })
    }
    render() {
        const { error } = this.state;
        return (
            <Styles>
                <div className="container-fluid">
                    {error !== "" &&
                        <div className="alert alert-danger alert-block">
                            <button type="button" className="close" data-dismiss="alert" onClick={this.handleClick}>×</button>
                            <strong>{this.state.error}</strong>
                        </div>}
                    <div className="row">
                        <div className="col-md-4 my-auto">
                            {/** This form component should have a onSubmit atrribute to work well */}
                            <Form onSubmit={this.handleSubmit}>
                                <div className="login-form">
                                    <h1 className="text-center">Control de <span className="font-weight-bold">luces</span></h1>
                                    <FormGroup>
                                        {this.state.encender === false
                                            ? <Button className="btn btn-large btn-block waves-effect waves-light hoverable blue">Encender</Button>
                                            : <Button className="btn btn-large btn-block waves-effect waves-dark hoverable red">Apagar</Button>}
                                    </FormGroup>
                                </div>
                            </Form>
                        </div>
                        <div className="col-md-8">
                            <Form onSubmit={this.handleSubmitSchedule}>
                                <div className="login-form">
                                    <h1 className="text-center">Programar horario</h1>
                                    <FormGroup>
                                        <label >Hora de inicio</label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="hour1">Hora</label>
                                                <input type="number" id="hour1" name="startHour" min="1" max="24" onChange={this.handleChange} value={this.state.startHour} required={true}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="minute1">Minuto</label>
                                                <input type="number" id="minute2" name="startMinute" min="0" max="59" onChange={this.handleChange} value={this.state.startMinute} required={true}/>
                                            </div>
                                        </div>
                                        <label htmlFor="finish">Hora de finalizar</label>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <label htmlFor="hour2">Hora</label>
                                                <input type="number" id="hour2" name="finishHour" min="1" max="24" onChange={this.handleChange} value={this.state.finishHour} required={true}/>
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="minute2">Minuto</label>
                                                <input type="number" id="minute2" name="finishMinute" min="0" max="59" onChange={this.handleChange} value={this.state.finishMinute} required={true}/>
                                            </div>
                                        </div>
                                    </FormGroup>
                                    <FormGroup>
                                        <Button className="btn btn-large btn-block waves-effect waves-light hoverable blue">Declarar</Button>
                                    </FormGroup>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </Styles>
        )
    }
}
setSchedule.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(setSchedule);