import React from 'react';
import "./Toast.css";
import successSVG from "../../svg/success(obinna-custom).svg"

const Toast = ({toastList}) => {

	return (
		<>
			{
				toastList.map((toast, i) => (
					<div className="t-body" key={i}>
						<div className="t-body-left">
							<svg 
							version="1.1" 
							id="Layer_1" 
							xmlns="http://www.w3.org/2000/svg"  
							x="0px" y="0px"	 
							viewBox="0 0 512 512"
							className="t-icon"
							fill={toast.themeColor}
							>
							<g>
								<g>
									<path d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M386.594,226.664
										L252.747,360.511c-7.551,7.551-17.795,11.794-28.475,11.794s-20.923-4.243-28.475-11.795l-70.388-70.389
										c-15.726-15.726-15.726-41.223,0.001-56.95c15.727-15.725,41.224-15.726,56.95,0.001l41.913,41.915l105.371-105.371
										c15.727-15.726,41.223-15.726,56.951,0.001C402.319,185.44,402.319,210.938,386.594,226.664z"/>
								</g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g>
							</svg>
							{/*<img src={successSVG}/>}*/}			
						</div>
						<div className="t-body-middle">
							<p> <strong>{toast.title}</strong></p>
							<p>{toast.decription}</p>
						</div>
						<button id="t-body-right">
							&times;
						</button>
					</div>
				))
			}
		</>

	)
}

export default Toast