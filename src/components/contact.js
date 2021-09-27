import React, {Component} from "react";
import axios from "axios";

class Contact extends Component {
      constructor (){
       super();
	this.state = {
        	name: '',
		email: '',
		message: '',
		send: false
       };
	this.handleChange = this.handleChange.bind(this);
	this.handleSubmit = this.handleSubmit.bind(this);
      }

	handleChange(event) {
		this.setState({[event.target.name]: event.target.value});
	}

	async handleSubmit(event) {
		event.preventDefault();
		const {name, email, message} = this.state;
		await axios.post("/form/contactForm",{
			name,
			email,
			message
		})
		.then((res) => {
			if(res.data.send === true){
				this.setState({send: true});
			};
		})
		.catch((error) => {
			console.log(error.res)
		})
	}

      render(){	
	return(
	<div className="formContainer">	
	 <h1 className="skills-title">Get in touch with me</h1>
	 <form onSubmit={this.handleSubmit}>
	 	<label>Name</label> <br/>
	 	<input 
			type="text" 
			value={this.state.name}
			onChange={this.handleChange}
			name="name" 
			placeholder="First and Last name"/> <br/>
	 	<label>Email</label><br/>
	 	<input 
			type="email" 
			value={this.state.email}
			onChange={this.handleChange}
			name="email" 
			placeholder="Write your email"/><br/>
	 	<label>Message</label><br/>
	 	<textarea 
			value={this.state.message}
			onChange={this.handleChange}
			name="message" 
			rows="10" 
			cols="100" 
			placeholder="Talk to me..."></textarea><br/>
		
		{this.state.send === true ? <p>Message successfully send! </p> :<p></p> }
	 	<input 
		        className="submit-btn"
			type="submit" 
			value="Submit"/>
	 </form>

	</div>
	);
      }	      
}

export default Contact;
