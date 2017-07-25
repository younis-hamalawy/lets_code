import * as RegistrationsAPIUtil from '../util/registration_api_util';

// export const RECEIVE_ALL_REGISTRATIONS = 'RECEIVE_ALL_REGISTRATIONSS';

export const RECEIEVE_SINGLE_REGISTRATION = 'RECEIEVE_SINGLE_REGISTRATION';
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const DELETE_REGISTRATION = "DELETE_REGISTRATION";

// export const receiveAllRegistrations = registrations => ({
//   type: RECEIVE_ALL_REGISTRATIONS,
//   registrations
// });

export const receiveSingleRegistration = registration => ({
  type: RECEIEVE_SINGLE_REGISTRATION,
  registration
})

export const deleteRegistration = (registration) => ({
  type: DELETE_REGISTRATION,
  registration
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors
})

// export const fetchAllRegistrations = () => dispatch => (
//   RegistrationsAPIUtil.fetchAllRegistrations().then(Registrations => (
//       dispatch(receiveAllRegistrations(Registrations))
//   ))
// );

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
