import React, { useRef, useState, useContext } from 'react';
import "./contact.css";
import emailjs from "@emailjs/browser";
import Toast from "./Toast.jsx";
import Button from "./Button.jsx";
import { ThemeContext } from "../../context.js";

const Contact = () => {
	const formRef = useRef();
	const [buttonChange, setButtonChange] = useState("Submit")
	const [done, setDone] = useState(false);
	const [name, setName] = useState("");
	const [subject, setSubject] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [list, setList] = useState([]);  
	const theme = useContext(ThemeContext);
  	const darkMode = theme.state.darkMode;

	const clearFields = () => {
		setName("");
		setSubject("");
		setEmail("");
		setMessage("");
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if(name && subject && email && message) {
	       	setButtonChange("Sending...");
			 	
		    emailjs
		    	.sendForm(
		    		'service_kmxu2ia', 
		    		'template_4b65161', 
		    		formRef.current, 
		    		'iSH_B0Jhf97BjMuAD')
			    .then((result) => {
			    	 setButtonChange("Submit");
			    	 setDone(true);
			    	 // alert('Email Sent!');
			          console.log(result.text);
			          setTimeout(()=>{ setDone(false); clearFields();}, 3000);

			    }, (error) => {
			          console.log(error.text);
			    });			
		}
		else {
			alert("Fill all fields");
			console.log("Fill all fields");
		}
	}

	let toastProperties = null;
	const showToast = () => {
		toastProperties = {
			id:1,
			title: "Mail sent!",
			decription: "I'll respond to you shortly. Thank you!.",
			themeColor: '#7e57c2',
			svg: ""
		}
		setList([toastProperties]);
		console.log(list);
	}

	const onChangeName = (e) => {
		setName(e.target.value)
		console.log(name)
	}

	const onChangeSubject = (e) => {
		setSubject(e.target.value)
		console.log(subject)
	}

	const onChangeEmail = (e) => {
		setEmail(e.target.value)
		console.log(email)
	}

	const onChangeMessage = (e) => {
		setMessage(e.target.value)
		console.log(message)
	}


	return (
		<div className="c">
			<div className="c-bg"></div>
			<div className="c-wrapper">
				<div className="c-left">
					<h1 className="c-title">Let's discuss your next project</h1>
					<div className="c-info">
						<div className="c-info-item">
							<svg 
								version="1.1" 
								id="Capa_1" 
								xmlns="http://www.w3.org/2000/svg" 
								x="0px" y="0px"
								viewBox="0 0 420.514 420.514" 
								class="c-icon"
								fill = "#7e57c2">
								<path d="M293.814,254.728l-37.701,28.083l-7.636,24.527c-55.525-33.273-102.028-79.776-135.301-135.301l24.527-7.636l28.083-37.701
								L75.978,0L33.567,20.089L0,101.609l0.863,2.632c24.033,73.265,65.555,140.81,120.077,195.332
								c54.522,54.522,122.067,96.044,195.332,120.077l2.632,0.863l81.521-33.567l20.088-42.41L293.814,254.728z M147.246,126.481
								l-13.948,18.724L50.681,28.58l20.34-9.634L147.246,126.481z M318.327,404.53c-70.028-23.428-134.565-63.348-186.78-115.563
								C79.332,236.752,39.412,172.215,15.985,102.186l25.164-61.113l79.908,112.801l-30.221,9.409l4.594,8.095
								c36.402,64.154,89.554,117.306,153.708,153.708l8.096,4.594l9.408-30.221l112.801,79.907L318.327,404.53z M391.934,369.833
								l-116.626-82.617l18.724-13.948l107.536,76.225L391.934,369.833z"/>
								<g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
							</svg>

							+2347035858557
						</div>
						<div className="c-info-item">
						<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" class="c-icon" xmlns="http://www.w3.org/2000/svg">
							<g id="Iconly/Curved/Message">
							<g id="Message">
							<path id="Stroke 1" d="M17.5449 9.01904C17.5449 9.01904 14.3349 12.8717 11.987 12.8717C9.64016 12.8717 6.39404 9.01904 6.39404 9.01904" 
							stroke="#7e57c2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							<path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M2.45215 11.9688C2.45215 5.13075 4.8331 2.85205 11.976 2.85205C19.1188 2.85205 21.4998 5.13075 21.4998 11.9688C21.4998 18.8059 19.1188 21.0856 11.976 21.0856C4.8331 21.0856 2.45215 18.8059 2.45215 11.9688Z" 
							stroke="#7e57c2" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
							</g>
							</g>
						</svg>
							okereobinna11@gmail.com							
						</div>	
						<div className="c-info-item">
							<svg 
							version="1.1" 
							id="Layer_1" 
							xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
							class="c-icon"
							viewBox="0 0 315 315"
							fill = "#7e57c2"
							>
								<g><g><g><path d="M157.5,0C93.319,0,41.103,52.215,41.103,116.397c0,62.138,106.113,190.466,110.63,195.898
										c1.425,1.713,3.538,2.705,5.767,2.705c2.228,0,4.342-0.991,5.767-2.705c4.518-5.433,110.63-133.76,110.63-195.898
										C273.897,52.215,221.682,0,157.5,0z M157.5,295.598c-9.409-11.749-28.958-36.781-48.303-65.397
										c-34.734-51.379-53.094-90.732-53.094-113.804C56.103,60.486,101.59,15,157.5,15c55.91,0,101.397,45.486,101.397,101.397
										c0,23.071-18.359,62.424-53.094,113.804C186.457,258.817,166.909,283.849,157.5,295.598z"/>
									<path d="M195.657,213.956c-3.432-2.319-8.095-1.415-10.413,2.017c-10.121,14.982-21.459,30.684-33.699,46.67
										c-2.518,3.289-1.894,7.996,1.395,10.514c1.36,1.042,2.963,1.546,4.554,1.546c2.254,0,4.484-1.013,5.96-2.941
										c12.42-16.22,23.933-32.165,34.219-47.392C199.992,220.938,199.09,216.275,195.657,213.956z"/>
									<path d="M157.5,57.5C123.589,57.5,96,85.089,96,119s27.589,61.5,61.5,61.5S219,152.911,219,119S191.411,57.5,157.5,57.5z
										 M157.5,165.5c-25.64,0-46.5-20.86-46.5-46.5s20.86-46.5,46.5-46.5c25.641,0,46.5,20.86,46.5,46.5S183.141,165.5,157.5,165.5z"/>
								</g></g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
							</svg>
							Lagos, Nigeria.							
						</div>						
					</div>
				</div>
				<div className="c-right">
					<Toast status={done} toastList={list}/>
					{/*{done && <Toast toastList={list}/>}*/}
					<p className="c-desc">
						<b>What's your Story?</b> Get in touch.
					</p>
					<form ref={formRef} onSubmit = {handleSubmit}>
						<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" onChange={onChangeName} />
						<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" onChange={onChangeSubject}/>
						<input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" onChange={onChangeEmail}/>
						<textarea style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" onChange={onChangeMessage}/>
						{/*<button value={buttonChange}>{buttonChange}</button>*/}
						<Button handleClick={() => showToast()}>{buttonChange}</Button>
						{/*{done && "Thank You"}*/}
					</form>
				</div>
			</div>
		</div>
	)
}

export default Contact