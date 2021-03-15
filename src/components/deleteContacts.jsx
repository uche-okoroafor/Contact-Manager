import React, { useEffect } from 'react';
import contacticont from '../images/contacticont.png';

function DeleteContacts(props) {
	useEffect(
		() => {
			props.createArray();
			props.displayContactEmpty();
		},
		[ props.contacts ]
	);

	const isChecked = (index) => {
		let value = null;
		const filtered = props.checkbox.filter((contacts) => contacts.id === index);
		value = filtered[0].checkbox;
		return value;
	};

	const deleteContact = (e, index) => {
		e.preventDefault();
		props.deleteContact(e, index);
		props.createArray();
	};

	const imgSrc = (contact) => {
		if (contact.pictureL[0] === 'h') {
			return contact.pictureL;
		}

		return contacticont;
	};

	const allCountacts = () => {
		props.checkbox.sort(function(a, b) {
			var nameA = a.firstName.toUpperCase();
			var nameB = b.firstName.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});

		const mappedList = props.checkbox.map((contact) => (
			<li key={contact.id} className={'list-group-item  clearfix displaylist checking'}>
				{' '}
				<img src={imgSrc(contact)} alt="icon" className="thumbnail ml-2" /><span> {contact.firstName}{' '}
				 {contact.lastName}</span>
				<button
					onClick={(e) => deleteContact(e, contact.id)}
					className="btn btn-danger form-control  deletebutton"
				>
					Delete
				</button>
				<input
					type="checkbox"
					className="checkbox"
					name="checkbox"
					checked={isChecked(contact.id)}
					onChange={(e) => props.handleCheckboxChange(contact.id, e)}
				/>
			</li>
		));

		return mappedList;
	};

	return (
		<React.Fragment>
			<ul>{allCountacts()}</ul>
		</React.Fragment>
	);
}

export default DeleteContacts;
