import React from 'react'
import "./modal.css"

const Modal = ({open, onClose, image, alt}) => {

	if (!open) return null;
	return (
		<div className='overlay'>
			<div className='modalContainer'>
				<div>
					<img className="modalImage" src={image} alt={alt}/>
					<div className="modalContent">{alt}</div>	
				</div>
				<div className="modalRight">
					<p onClick={onClose} className="closeBtn">x</p>
				</div>
			</div>
			{/*"Hi Can you see Modal?"*/}
		</div>
	)
}

export default Modal