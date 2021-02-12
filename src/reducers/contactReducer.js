import * as actionTypes from "../actions/actionTypes";

const initialState = [
  {
    title: "miss",
    firstName: "Mary",
    lastName: " Jane ",
    streetName: "",
    streetNumber: "",
    city: "",
    state: "",
    country: "country",
    postCode: "postCode",
    email: "email",
    phone: "phone",
    cell: "cell",
    pictureL: "contacticonl",
    pictureM: "contacticon",
    pictureT: "contacticon",
isChecked:false,
 
  },
  {
    title: "master",
    firstName: "John",
    lastName: " Smith",
    streetName: "jumeria",
    streetNumber: "",
    city: "",
    state: "",
    country: "country",
    postCode: "postCode",
    email: "email",
    phone: "0816522666",
    cell: "cell",
    pictureL: "contacticonl",
    pictureM: "contacticon",
    pictureT: "contacticon",
   isChecked:false,
  },
  {
    title: "master",
    firstName: "James",
    lastName: " Bond",
    streetName: "dubai",
    streetNumber: "",
    city: "",
    state: "",
    country: "country",
    postCode: "postCode",
    email: "email",
    phone: "0816522666",
    cell: "cell",
    pictureL: "contacticonl",
    pictureM: "contacticon",
    pictureT: "contacticon",
    isChecked:false,
  },
];

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CREATE_NEW_CONTACT:
      return [
        ...state,
        Object.assign(
          {},
          action.title,
          action.firstName,
          action.lastName,
          action.streetName,
          action.streetNumber,
          action.city,
          action.state,
          action.country,
          action.postCode,
          action.email,
          action.phone,
          action.cell,
          action.pictureL,
          action.pictureM,
          action.pictureT,
         action.isChecked
        ),
      ];
    case actionTypes.REMOVE_CONTACT:
      return state.filter((data, i) => i !== action.id);
    default:
      return state;
  }
}
