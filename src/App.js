import React, { Component } from 'react';
import uuid from 'react-uuid';
import { connect } from 'react-redux';
import * as contactAction from './actions/contactAction';
import './App.css';
import SearchBar from './components/Search';
import ContactDetails from './components/contactDetails';
import AddContact from './components/addcontact';
import AllContacts from './components/allContacts';
import SideButtons from './components/sideButtons';
import DeleteContacts from './components/deleteContacts';
import EditContacts from './components/editContacts';
import RecentlyAdded from './components/recentlyAdded';
import contacticont from './images/contacticont.png';
import Menu from './components/menu';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '',
			firstName: '',
			lastName: '',
			cell: '',
			streetName: '',
			streetNumber: '',
			city: '',
			state: '',
			country: '',
			postcode: '',
			email: '',
			phone: '',
			pictureL: contacticont,
			pictureM: '',
			pictureT: '',
			index: '',
			id: uuid(),
			filteredSearch: [],
			isChecked: false,
			checkin: true,
			outline: {},
 searchInput: '',
			isMobileTablet: window.matchMedia('(min-width:992px)').matches,
			isMobile: window.matchMedia('(min-width:768px)').matches,
			checkbox: this.props.contacts.map((contact) => ({
				checkbox: contact.isChecked,
				id: contact.id,
				firstName: contact.firstName,
				lastName: contact.lastName,
				pictureL: contact.pictureL
			})),
			displayFormError: { color: 'red', display: 'none' },
			displayDetails: { color: 'red', display: 'none' },
			displayForm: { display: 'block' },
			displayEditBtn: { display: 'none' },
			displayAddBtn: { display: 'block' },
			displaySearchReturn: { display: 'none' },
			emptyContactDisplay: { display: 'none', color: 'red' },
			displayDeletecontacts: { display: 'none' },
			displayDeleteBtn1: { display: 'inline-block' },
			displayDeleteBtn2: { display: 'none' },
			displayEditcontacts: { display: 'none' },
			displayMobileRecentContact: { display: 'none' },
			displayAllContacts: { display: 'block' },
			targetContact: this.props.contacts
		};
	}

	async componentDidMount() {
		for (let i = 0; i < 30; i++) {
			const url = 'https://api.randomuser.me/';
			const response = await fetch(url);
			const info = await response.json();
			const data = info.results[0];

			let title = { title: data.name.title };
			let firstName = { firstName: data.name.first };
			let lastName = { lastName: data.name.last };
			let streetNumber = { streetNumber: data.location.street.number };
			let streetName = { streetName: data.location.street.name };
			let city = { city: data.location.city };
			let state = { state: data.location.state };
			let country = { country: data.location.country };
			let postCode = { postCode: data.location.postCode };
			let email = { email: data.email };
			let phone = { phone: data.phone };
			let cell = { cell: data.cell };
			let pictureL = { pictureL: data.picture.large };
			let pictureM = { pictureM: data.picture.medium };
			let pictureT = { pictureT: data.picture.thumbnail };
			let isChecked = { isChecked: false };
			let id = { id: uuid() };
			this.props.createContact(
				title,
				firstName,
				lastName,
				streetName,
				streetNumber,
				city,
				state,
				country,
				postCode,
				email,
				phone,
				cell,
				pictureL,
				pictureM,
				pictureT,
				isChecked,
				id
			);
			this.createArray();
		}

		const handlerMobile = (e) => this.setState({ isMobile: e.isMobile });
		window.matchMedia('(min-width: 768px)').addEventListener('change', handlerMobile);

		
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({
			[name]: value
		});
	};

	handleSubmit = (e) => {
		if (this.state.firstName !== '' && this.state.phone !== '') {
			e.preventDefault();
			let title = { title: this.state.title };
			let firstName = { firstName: this.state.firstName };
			let lastName = { lastName: this.state.lastName };
			let streetNumber = { streetNumber: this.state.streetNumber };
			let streetName = { streetName: this.state.streetName };
			let city = { city: this.state.city };
			let state = { state: this.state.state };
			let country = { country: this.state.country };
			let postCode = { postCode: this.state.postCode };
			let email = { email: this.state.email };
			let phone = { phone: this.state.phone };
			let cell = { cell: this.state.cell };
			let pictureL = { pictureL: this.state.pictureL };
			let pictureM = { pictureM: this.state.pictureM };
			let pictureT = { pictureT: this.state.pictureT };
			let isChecked = { isChecked: false };
			let id = { id: uuid() };
			this.props.createContact(
				title,
				firstName,
				lastName,
				streetName,
				streetNumber,
				city,
				state,
				country,
				postCode,
				email,
				phone,
				cell,
				pictureL,
				pictureM,
				pictureT,
				isChecked,
				id
			);
			this.setState({
				title: '',
				firstName: '',
				lastName: '',
				streetName: '',
				streetNumber: '',
				city: '',
				state: '',
				country: '',
				postCode: '',
				email: '',
				phone: '',
				cell: '',
				pictureL: '',
				pictureM: '',
				pictureT: ''
			});
		} else {
			this.toggleDisplay('displayFormError');
			e.preventDefault();
		}
	};

	toggleDisplay = (action) => {
		switch (action) {
			case 'displayContactDetails':
				this.setState({
					displayDetails: { display: 'block' },
					displayForm: { display: 'none' },
					displaySearchReturn: { display: 'none' },
					searchInput: '',
					displayDeletecontacts: { display: 'none' },
					displayDeleteBtn2: { display: 'none' },
					displayDeleteBtn1: { display: 'inline-block' },
					displayEditcontacts: { display: 'none' }
				});
				!this.state.isMobile &&
					this.setState({
						displayMobileRecentContact: { display: 'none' },
						displayAllContacts: { display: 'none' }
					});


				break;
			case 'displayCreateNewContact':
				this.setState({
					displayDetails: { display: 'none' },
					displayForm: { display: 'block' },
					displayDeletecontacts: { display: 'none' },
					displayDeleteBtn2: { display: 'none' },
					displayDeleteBtn1: { display: 'inline-block' },
					displayEditcontacts: { display: 'none' },
					displaySearchReturn: { display: 'none' },
					searchInput: '',
					displayEditBtn: { display: 'none' },
					displayAddBtn: { display: 'block' },
					pictureL: contacticont,
					displayMobileRecentContact: { display: 'none' }
				});
				!this.state.isMobile &&
					this.setState({
						displayMobileRecentContact: { display: 'none' },
						displayAllContacts: { display: 'none' }
					});
				break;

			case 'searchdisplay':
				this.setState({
					displayDetails: { display: 'none' },
					displayForm: { display: 'none' },
					displaySearchReturn: { display: 'block' },
					displayDeletecontacts: { display: 'none' },
					displayDeleteBtn2: { display: 'none' },
					displayDeleteBtn1: { display: 'inline-block' },
					displayEditcontacts: { display: 'none' }
				});
				!this.state.isMobile &&
					this.setState({
						displayMobileRecentContact: { display: 'none' },
						displayAllContacts: { display: 'none' }
					});
				break;

			case 'displayEditContact':
				this.setState({
					displayAddBtn: { display: 'none' },
					displayEditBtn: { display: 'block' },
					displayDetails: { display: 'none' },
					displayForm: { display: 'block' },
					displayDeletecontacts: { display: 'none' },
					displayEditcontacts: { display: 'none' }
				});

				!this.state.isMobile &&
					this.setState({
						displayMobileRecentContact: { display: 'none' },
						displayAllContacts: { display: 'none' }
					});
				break;

			case 'buttonDisplay2':
				this.setState({
					displayAddBtn: { display: 'block' },
					displayEditBtn: { display: 'none' }
				});

				break;

			case 'displayFormError':
				this.setState({
					displayFormError: {
						color: 'red',
						display: 'inline',
						fontSize: '14px',
						textAlign: 'left'
					},
					outline: { border: '1px solid red' }
				});
				break;

			case 'displayDeleteContacts':
				this.setState({
					displayDeletecontacts: { display: 'block' },
					displayDetails: { display: 'none' },
					displayForm: { display: 'none' },
					displayDeleteBtn2: { display: 'inline-block' },
					displayDeleteBtn1: { display: 'none' },
					displayEditcontacts: { display: 'none' },
					displaySearchReturn: { display: 'none' },
					searchInput: ''
				});
				!this.state.isMobile &&
					this.setState({
						displayMobileRecentContact: { display: 'none' },
						displayAllContacts: { display: 'none' }
					});
				break;

			case 'displayAll4edit':
				this.setState({
					displayDeletecontacts: { display: 'none' },
					displayEditcontacts: { display: 'block' },
					displayDetails: { display: 'none' },
					displayForm: { display: 'none' },
					displayDeleteBtn1: { display: 'inline-block' },
					displayDeleteBtn2: { display: 'none' },
					displaySearchReturn: { display: 'none' },
					searchInput: ''
				});
				!this.state.isMobile &&
					this.setState({
						displayMobileRecentContact: { display: 'none' },
						displayAllContacts: { display: 'none' }
					});

				break;

			case 'displayMobileRecentContact':
				this.setState({
					displayDeletecontacts: { display: 'none' },
					displayEditcontacts: { display: 'none' },
					displayDetails: { display: 'none' },
					displayForm: { display: 'none' },
					displayMobileRecentContact: { display: 'block' },
					displaySearchReturn: { display: 'none' },
					searchInput: ''
				});
				!this.state.isMobile &&
					this.setState({
						displayAllContacts: { display: 'none' }
					});
				break;

			case 'displayAllContacts':
				this.setState({
					displayAllContacts: { display: 'block' },
					displayDeletecontacts: { display: 'none' },
					displayEditcontacts: { display: 'none' },
					displayDetails: { display: 'none' },
					displayForm: { display: 'none' },
					displayMobileRecentContact: { display: 'none' },
					displaySearchReturn: { display: 'none' },
					searchInput: ''
				});
				break;

			case 'displayAllContactsBigScreen':
				this.setState({
					displayAllContacts: { display: 'block' }
				});
				break;

			default:
				break;
		}
	};

	expandContact = (id, e) => {
		const filtered = this.props.contacts.filter((data) => data.id === id);
		this.setState({ targetContact: filtered, index: id });
		this.toggleDisplay('displayContactDetails');
	};

	editContact = (e, index, parameter) => {
		this.setState({ index });
		switch (parameter) {
			case 'editContacts':
				const filtered = this.props.contacts.filter((contact) => contact.id === index);
				this.setState({
					title: filtered[0].title,
					firstName: filtered[0].firstName,
					lastName: filtered[0].lastName,
					streetNumber: filtered[0].streetNumber,
					streetName: filtered[0].streetName,
					city: filtered[0].city,
					state: filtered[0].state,
					country: filtered[0].country,
					postcode: filtered[0].postcode,
					email: filtered[0].email,
					phone: filtered[0].phone,
					cell: filtered[0].cell,
					pictureL: filtered[0].pictureL,
					pictureT: filtered[0].pictureT
				});
				break;

			case 'editContact':
				this.setState({
					title: this.state.targetContact[0].title,
					firstName: this.state.targetContact[0].firstName,
					lastName: this.state.targetContact[0].lastName,
					streetNumber: this.state.targetContact[0].streetNumber,
					streetName: this.state.targetContact[0].streetName,
					city: this.state.targetContact[0].city,
					state: this.state.targetContact[0].state,
					country: this.state.targetContact[0].country,
					postcode: this.state.targetContact[0].postcode,
					email: this.state.targetContact[0].email,
					phone: this.state.targetContact[0].phone,
					cell: this.state.targetContact[0].cell,
					pictureL: this.state.targetContact[0].pictureL,
					pictureT: this.state.targetContact[0].pictureT
				});

				break;

			default:
				break;
		}

		e.preventDefault();

		this.toggleDisplay('displayEditContact');
	};

	submitEdit = (e, i) => {
		this.deleteContact(e, this.state.index);
		this.handleSubmit(e);
		this.toggleDisplay('buttonDisplay2');
		setTimeout(() => {
			this.expandContact(this.props.contacts[this.props.contacts.length - 1].id);
		}, 100);
	};

	deleteContact = (e, index) => {
		e.preventDefault();
		this.props.deleteContact(index);
	};

	handleDeleteSelectedContact = (e) => {
		for (let i in this.state.checkbox) {
			if (this.state.checkbox[i].checkbox === true) {
				this.props.deleteContact(this.state.checkbox[i].id);
			}
		}
		this.displayContactEmpty();
	};

	handleDeleteSelectedCheckbox = () => {
		const filtered = this.state.checkbox.filter((contact) => contact.checkbox === false);
		this.setState({ checkbox: filtered });
	};

	cancelEdit = (e) => {
		this.setState({
			title: '',
			firstName: '',
			lastName: '',
			streetName: '',
			streetNumber: '',
			city: '',
			state: '',
			country: '',
			postCode: '',
			email: '',
			phone: '',
			cell: '',
			pictureL: '',
			pictureM: '',
			pictureT: ''
		});
		this.expandContact(this.state.index);
	};

	displayContactEmpty = () => {
		if (this.props.contacts.length === 0) {
			this.setState({ emptyContactDisplay: { display: 'block' } });
			return this.toggleDisplay('displayCreateNewContact');
		}

		return this.setState({ emptyContactDisplay: { display: 'none' } });
	};

	handleCheckboxChange = (index, e) => {
		let arr = this.state.checkbox;
		let filtered1 = arr.filter((contacts) => contacts.id === index);
		let filtered2 = arr.filter((contacts) => contacts.id !== index);
		filtered1[0].checkbox = e.target.checked;
		filtered2 = [ ...filtered2, filtered1[0] ];
		this.setState({
			checkbox: filtered2
		});
	};

	createArray = () => {
		this.setState({
			checkbox: this.props.contacts.map((contact) => ({
				checkbox: contact.isChecked,
				id: contact.id,
				firstName: contact.firstName,
				lastName: contact.lastName,
				pictureL: contact.pictureL,
				pictureT: contact.pictureT
			}))
		});
	};

	toggleCheckbox = () => {
		let arr = this.state.checkbox;
		for (let isCheck of this.state.checkbox) {
			isCheck.checkbox = this.state.checkin;
		}
		this.setState({
			checkbox: arr,
			checkin: !this.state.checkin
		});
	};

imgSrc=(data)=>{
if(data[0] === 'h'){

return data;
}
return contacticont;
}

	searchReturn = (data, index) => {
		return (
			<div className="search-result-list" style={this.state.displaySearchReturn}>
				<li
					key={index}
					className="list-group-item clearfix  displaylist"
					onClick={(e) => {
						this.setState({ searchInput: '' });
						this.expandContact(index, e);
						this.toggleDisplay('displayContactDetails');
					}}
				>
					<img src={this.imgSrc(data.pictureT)} className="thumbnail" alt="icon" />
					<div className="searchimgframe" /> <span>{data.firstName} {data.lastName}</span>
				</li>
			</div>
		);
	};

	searchList=(data)=>{
		this.setState({
			filteredSearch: data
		});
	};



	render() {
		return (
			<div className="contact-body">
				<div className="contact-header">{/* <h1 className="text-center">Contacts Manager</h1> */} </div>
				<Menu
					toggleDisplay={this.toggleDisplay}
					displayDeleteBtn1={this.state.displayDeleteBtn1}
					displayDeleteBtn2={this.state.displayDeleteBtn2}
					toggleCheckbox={this.toggleCheckbox}
					handleDeleteSelectedContact={this.handleDeleteSelectedContact}
					handleDeleteSelectedCheckbox={this.handleDeleteSelectedCheckbox}
					reduceCheckboxArray={this.reduceCheckboxArray}
					createArray={this.createArray}
					expandContact={this.expandContact}
					displaySearchReturn={this.state.displaySearchReturn}
					searchList={this.searchList}
				/>
				<div className="container-fluid text-center pt-10">
					<div className="contact-container">
						<div className="allcontacts pt-10 allcontacts-mobile" style={this.state.displayAllContacts}>
							<AllContacts
								contacts={[ ...this.props.contacts ]}
								expandContact={this.expandContact}
								activeClick={this.state.activeClick}
								id={this.state.index}
								emptyContactDisplay={this.state.emptyContactDisplay}
							/>
							<div style={this.state.emptyContactDisplay}>contact is empty</div>
						</div>
						<div className="allcontacts pt-10 allcontacts-desktop">
							<AllContacts
								contacts={[ ...this.props.contacts ]}
								expandContact={this.expandContact}
								activeClick={this.state.activeClick}
								id={this.state.index}
								emptyContactDisplay={this.state.emptyContactDisplay}
							/>
							<div style={this.state.emptyContactDisplay}>contact is empty</div>
						</div>
						<div className="contact-form">
							<div className="desktop-searchbar">
								<SearchBar
									expandContact={this.expandContact}
									displaySearchReturn={this.state.displaySearchReturn}
									toggleDisplay={this.toggleDisplay}
									searchList={this.searchList}
								/>

							</div>
					<div className=' mobile-searchbar'>
								<ul className="mx-auto searchlist  " >

          {this.state.filteredSearch.map((contact)=>this.searchReturn(contact, contact.id))}

        </ul>
							</div>	

							<AddContact
								title={this.state.title}
								firstName={this.state.firstName}
								lastName={this.state.lastName}
								streetName={this.state.streetName}
								streetNumber={this.state.streetNumber}
								city={this.state.city}
								state={this.state.state}
								country={this.state.country}
								postCode={this.state.postCode}
								email={this.state.email}
								phone={this.state.phone}
								cell={this.state.cell}
								pictureL={this.state.pictureL}
								pictureM={this.state.pictureM}
								pictureT={this.state.pictureT}
								handleSubmit={this.handleSubmit}
								handleChange={this.handleChange}
								display={this.state.displayFormError}
								outline={this.state.outline}
								displayForm={this.state.displayForm}
								displayEditBtn={this.state.displayEditBtn}
								displayAddBtn={this.state.displayAddBtn}
								submitEdit={this.submitEdit}
								cancelEdit={this.cancelEdit}
								createArray={this.createArray}
							/>
	<div className="container-fluid mt--7 contact-details" style={this.state.displayDetails}>
							{this.state.targetContact.map((contact) => (
								<ContactDetails
									data={contact}
									index={this.state.index}
									editContact={this.editContact}
									deleteContact={this.deleteContact}
									expandContact={this.expandContact}
									toggleDisplay={this.toggleDisplay}
								/>
							))}
</div>
							<div className="deletecontacts" style={this.state.displayDeletecontacts}>
								<DeleteContacts
									deleteContact={this.deleteContact}
									toggleDisplay={this.toggleDisplay}
									checkbox={this.state.checkbox}
									handleCheckboxChange={this.handleCheckboxChange}
									createArray={this.createArray}
									contacts={this.props.contacts}
									displayContactEmpty={this.displayContactEmpty}
								/>
							</div>

							<div className="Editcontacts" style={this.state.displayEditcontacts}>
								<EditContacts editContact={this.editContact} toggleDisplay={this.toggleDisplay} />
							</div>
							<div style={this.state.displayMobileRecentContact}>
								<RecentlyAdded
									expandContact={this.expandContact}
									activeClick={this.state.activeClick}
									id={this.state.index}
									contacts={[ ...this.props.contacts ]}
								/>
							</div>
						</div>

						<div className="optionsbar">
							<div>
								<SideButtons
									toggleDisplay={this.toggleDisplay}
									displayDeleteBtn1={this.state.displayDeleteBtn1}
									displayDeleteBtn2={this.state.displayDeleteBtn2}
									toggleCheckbox={this.toggleCheckbox}
									handleDeleteSelectedContact={this.handleDeleteSelectedContact}
									handleDeleteSelectedCheckbox={this.handleDeleteSelectedCheckbox}
									reduceCheckboxArray={this.reduceCheckboxArray}
									createArray={this.createArray}
								/>
							</div>

							<div>
								<RecentlyAdded
									expandContact={this.expandContact}
									activeClick={this.state.activeClick}
									id={this.state.index}
									contacts={[ ...this.props.contacts ]}
									emptyContactDisplay={this.state.emptyContactDisplay}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		contacts: state.contacts
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		createContact: (
			title,
			firstName,
			lastName,
			streetName,
			streetNumber,
			city,
			state,
			country,
			postCode,
			email,
			phone,
			cell,
			pictureL,
			pictureM,
			pictureT,
			isChecked,
			id
		) =>
			dispatch(
				contactAction.createContact(
					title,
					firstName,
					lastName,
					streetName,
					streetNumber,
					city,
					state,
					country,
					postCode,
					email,
					phone,
					cell,
					pictureL,
					pictureM,
					pictureT,
					isChecked,
					id
				)
			),

		deleteContact: (index) => dispatch(contactAction.deleteContact(index))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
