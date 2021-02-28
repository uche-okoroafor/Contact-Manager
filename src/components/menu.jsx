import React, { useState } from 'react';
import SideButtons from './sideButtons';
import { useMediaQuery } from 'react-responsive';
import SearchBar from './Search';

function Menu(props) {
	const [ menuBarState, setMenuBarState ] = useState(true);
	const [ menuBar, setMenuBar ] = useState('Menu-off');
	const [ displayMenu, setDisplayMenu ] = useState({ display: 'none' });
	const isTabletOrMobile = useMediaQuery({ query: '(max-width: 992px)' });
	const [ displayMenuIcons, setDisplayMenuIcons ] = useState({ display: 'inline' });
	const [ displayMenuIcon, setDisplayMenuIcon ] = useState({ display: 'none' });
const [searchInput,setSearchInput]= useState('');

	function handleMenuBar() {
		if (menuBarState) {
			setDisplayMenu({ display: 'block' });
			setTimeout(() => {
				setMenuBar('menu-on');
			}, 10);
			return setMenuBarState(!menuBarState);
		}
		setMenuBar('menu-off');
		setTimeout(() => {
			setDisplayMenu({ display: 'none' });
		}, 800);

		return setMenuBarState(!menuBarState);
	}


	function handleSearchIcon() {
		if (menuBarState) {
			setDisplayMenuIcon({ display: 'inline' });
setMenuBarState(!menuBarState);
			return setDisplayMenuIcons({ display: 'none' });

		
		}
setMenuBarState(!menuBarState);
		setDisplayMenuIcon({ display: 'none' });
		return setDisplayMenuIcons({ display: 'inline' });
	}

	return (
		<React.Fragment>
			<div className="row p-2  menu-containner">
				<div className="menu-bar">
					{' '}
					<i className="fas fa-ellipsis-v  " onClick={handleMenuBar} style={displayMenuIcons} />{' '}
					<i class="fas fa-chevron-left" onClick={handleSearchIcon} style={displayMenuIcon} />
				</div>

				<h6 className="text-center pt-3" style={displayMenuIcons}>
				Contacts
				</h6>
				{/* <div className="search-icon"  /> */}
				<div className="Searchbar"  style={displayMenuIcon}>
					{/* <input
						type="text"
						name="searchInput"
						  value={searchInput}
						  onChange={(e)=>handleSearchInput(e)}
						placeholder={'SearchContacts...'}
						className="form-control "
					/> */}
<SearchBar className='searchbar-menu'  
expandContact={props.expandContact}
displaySearchReturn={props.displaySearchReturn}
searchList={props.searchList}									
toggleDisplay={props.toggleDisplay}
								/>
				</div>

				<div className="search-icon" onClick={handleSearchIcon} style={displayMenuIcons}>
					<i class="fas fa-search " />


				</div>
			</div>

			{isTabletOrMobile && (

				<div className={menuBar} style={displayMenu} onClick={handleMenuBar}>
					<div className="menu-options">
						<SideButtons
							toggleDisplay={props.toggleDisplay}
							displayDeleteBtn1={props.displayDeleteBtn1}
							displayDeleteBtn2={props.displayDeleteBtn2}
							toggleCheckbox={props.toggleCheckbox}
							handleDeleteSelectedContact={props.handleDeleteSelectedContact}
							handleDeleteSelectedCheckbox={props.handleDeleteSelectedCheckbox}
							reduceCheckboxArray={props.reduceCheckboxArray}
							createArray={props.createArray}
						/>
					</div><div className="backdrop">
</div>
	</div>
			)}
		</React.Fragment>
	);
}

export default Menu;
