import * as actionTypes from "./actionTypes";

export const createContact = (
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
id,
       ) => {
  return {
    type: actionTypes.CREATE_NEW_CONTACT,
      title:title,
        firstName:firstName,
        lastName:lastName,
        streetName:streetName,
        streetNumber:streetNumber,
        city:city,
        state:state,
        country:country,
        postCode:postCode,
        email:email,
        phone:phone,
        cell:cell,
        pictureL:pictureL,
        pictureM:pictureM,
        pictureT:pictureT,
        isChecked:isChecked,
id:id,
        
  };
};

export const deleteContact = (id) => {
  return {
    type: actionTypes.REMOVE_CONTACT,
    id: id,
  };
};
