import React from 'react';
import { Form , FormGroup } from 'reactstrap';
import { Link , Redirect } from 'react-router-dom';


class ApartmentNew extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            success: false,
            form: {
                street_address: '',
                city: '',
                state: '',
                zip: '',
                country: '',
                manager_name: '',
                manager_number: '',
                hours: '',
                image: '',
                user_id: this.props.current_user.id
            }
        }
    }

    handleSubmit = () => {
        this.props.onSubmit(this.state.form)
        .then(() => {
            this.setState({success:true})
        })
    }
    handleChange = (event) => {
        let {form} = this.state
        form[event.target.name]= event.target.value
        this.setState({form: form})
    }
    render(){
        let {street_address, city, state, zip, country, manager_name, manager_number, hours} = this.state.form
    return(
        <div>
            <h1> New Component: Apartment New </h1>
            <Form>
              <fieldset>
                <legend>Add a new apartment</legend>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Street Address</label>
                            <input name="street_address" type="text" className="form-control" id="street_address" aria-describedby="emailHelp" placeholder="Street Address" value={street_address} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">City</label>
                            <input name="city" type="text" className="form-control" id="city" aria-describedby="emailHelp" placeholder="City" value={city} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">State</label>
                            <input name="state" type="text" className="form-control" id="state" aria-describedby="emailHelp" placeholder="State" value={state} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Postal Code</label>
                            <input name="zip" type="text" className="form-control" id="zip" aria-describedby="emailHelp" placeholder="Postal Code" value={zip} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Country</label>
                            <input name="country" type="text" className="form-control" id="country" aria-describedby="emailHelp" placeholder="Country" value={country} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Manager Name</label>
                            <input name="manager_name" type="text" className="form-control" id="manager_name" aria-describedby="emailHelp" placeholder="Manager Name" value={manager_name} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Manager Phone</label>
                            <input name="manager_number" type="text" className="form-control" id="manager_number" aria-describedby="emailHelp" placeholder="Manager Phone" value={manager_number} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1">Contact Hours</label>
                            <input name="hours" type="text" className="form-control" id="hours" aria-describedby="emailHelp" placeholder="Contact Hours" value={hours} onChange={this.handleChange}/>
                    </FormGroup>
                    <FormGroup className="form-group">
                        <label for="exampleInputEmail1"> Image link </label>
                            <input name="image" type="text" className="form-control" id="image" aria-describedby="emailhelp" placeholder="Add an image url" value={image} onChange={this.handleChange} />
                    </FormGroup>
                    <Link to={"/apartments"}>
                    <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Add Apartment!</button>
                    {this.state.success &&
                <Redirect to="/apartments" />
            }
                    </Link>
             </fieldset>
            </Form>
            
        </div>
    )
    }
}

export default ApartmentNew;