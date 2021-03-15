import React from 'react';
import { connect } from 'react-redux';
import * as contactAction from '../actions/contactAction';
import contacticonl from '../images/contacticonl.png';

function ListView(props) {
	function deleteContact(e, index) {
		e.preventDefault();
		props.deleteContact(index);
		props.toggleDisplay('displayDeleteContacts');
	}

	function imgSrc() {
		if (props.data.pictureL[0] !== 'h') {
			return contacticonl;
		}
		return props.data.pictureL;
	}

function textAreaState(text) {
return	text?text:'Not Provided'
}


	return (
		<React.Fragment>
		
				<div className="row">
					<div className="col-xl-12 order-xl-2 mb-5 mb-xl-0  div2">
						<div className="card card-profile shadow">
							<div className="row justify-content-center">
								<div className="col-lg-3 order-lg-2">
									<div className="card-profile-image">
										<a href="#dead">
											<img
												src={imgSrc()}
												key={props.index}
												className="rounded-circle"
												alt="contactimg"
											/>
										</a>
									</div>
								</div>
							</div>
							<div className="card-header text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
								<div className="d-flex justify-content-between" />
							</div>
							<div className="card-body pt-0 pt-md-4">
								<div className="row">
									<div className="col">
										<div className="card-profile-stats d-flex justify-content-center mt-md-5">
											<div />
										</div>
									</div>
								</div>
								<div className={'text-center '}>
									<h3>
										{props.data.title} {props.data.firstName} {props.data.lastName}
									</h3>
									<div className="h5 font-weight-300">
										<i className="fas fa-phone-square-alt" /> {props.data.phone}
									</div>
									<div className="h5 font-weight-300">
										<i className="fas fa-mobile-alt" /> {props.data.cell}{' '}
									</div>

									<div className="h5 font-weight-300">
										<i className="fas fa-at" /> {props.data.email}{' '}
									</div>

									<hr className="my-4" />
									<div className="h5 font-weight-300">
										<i className="fas fa-street-view" /> {textAreaState(props.data.streetNumber) + ','}{' '}
										{ textAreaState(props.data.streetName)}
									</div>

									<div className="h5 font-weight-300">
										<i className="fas fa-map-marker-alt" /> { textAreaState(props.data.city) + ','}{' '}
										{textAreaState(props.data.state) + ','} {textAreaState(props.data.country)}
									</div>
									<button
										className="btn btn-info  m-2"
										onClick={(e) => props.editContact(e, props.index, 'editContact')}
									>
										Edit Contact
									</button>

									<button
										onClick={(e) => deleteContact(e, props.index)}
										className="btn btn-danger  m-2"
									>
										Delete Contact
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
		
		</React.Fragment>
	);
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
			streetNum,
			streetName,
			city,
			state,
			country,
			postcode,
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
					streetNum,
					streetName,
					city,
					state,
					country,
					postcode,
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

export default connect(mapStateToProps, mapDispatchToProps)(ListView);
