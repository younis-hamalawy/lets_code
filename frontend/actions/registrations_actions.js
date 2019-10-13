import * as RegistrationsAPIUtil from '../util/registration_api_util';

export const RECEIVE_SINGLE_REGISTRATION = 'RECEIVE_SINGLE_REGISTRATION';
export const DELETE_REGISTRATION = "DELETE_REGISTRATION";

export const receiveSingleRegistration = registration => ({
  type: RECEIVE_SINGLE_REGISTRATION,
  registration
});

export const deleteRegistration = (registration) => ({
  type: DELETE_REGISTRATION,
  registration
});

export const fetchSingleRegistration = (registrationId) => dispatch => (
  RegistrationAPIUtil.fetchSingleRegistration(registrationId).then(registration => dispatch(receiveSingleRegistration(registration)))
);


export const createRegistration = ( registration ) => (dispatch) => (
  RegistrationsAPIUtil.createRegistration( registration )
    .then((registration) => dispatch(receiveSingleRegistration(registration)),
                  (errors) => dispatch(receiveErrors(errors)))
);

export const destroyRegistration = (registrationId) => dispatch => (
  RegistrationsAPIUtil.destroyRegistration(registrationId).then(registration => dispatch(deleteRegistration(registration)))
);
