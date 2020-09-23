import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';  
toast.configure() 
class Contact extends Component {
   constructor(props) {
      super(props);
      this.state = {
         contactName: '',
         contactEmail: '',
         contactSubject: '',
         contactMessage: '',
         contactEmail: ''
      };
  
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleSubmit(e) {
      e.preventDefault()    
      const { contactName, contactEmail, contactSubject, contactMessage } = this.state    
      let templateParams = {
        from_name: contactName,
        to_name: 'Spyros',
        from_email: contactEmail,
        subject: contactSubject,
        message: contactMessage,
       }     
       emailjs.send(
        'service_zl0tpot',
        'template_9m53emr',
         templateParams,
        'user_gXMtAHyHfX8VDrBbP3mD4'
       )
       toast("Message has been send");
       this.setState({
         contactName: '',
         contactEmail: '',
         contactSubject: '',
         contactMessage: ''
       }); 
      e.target.reset();
      };    
       
     
       handleChange(event) {
         this.setState({ [event.target.name]: event.target.value });
       }
      
   

  render() {

 if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">{message}</p>

            </div>

         </div>

         <div className="row">
            <div className="eight columns">

               <form action="" method="post" id="contactForm" name="contactForm" onSubmit={this.handleSubmit}>
					<fieldset>

                  <div>
						   <label htmlFor="contactName">Name <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactName" name="contactName" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
						   <input type="text" defaultValue="" size="35" id="contactEmail" name="contactEmail" onChange={this.handleChange}/>
                  </div>

                  <div>
						   <label htmlFor="contactSubject">Subject</label>
						   <input type="text" defaultValue="" size="35" id="contactSubject" name="contactSubject" onChange={this.handleChange}/>
                  </div>

                  <div>
                     <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                     <textarea cols="50" rows="15" id="contactMessage" name="contactMessage" onChange={this.handleChange}></textarea>
                  </div>

                  <div id="submitButton">
                     <button type="submit" >Submit</button>
                   
                  </div>
					</fieldset>
				   </form>

           <div id="message-warning"> Error boy</div>
				   <div id="message-success">
                  <i className="fa fa-check"></i>Your message was sent, thank you!<br />
				   </div>
           </div>


            
      </div>
   </section>
    );
  }
 
}

export default Contact;
