import * as types from './types';
import axios from 'axios'



export const fetchJobPosts = profile => ({
  type: types.JOB_POSTS_FETCH,
  profile
});

// export const membershipFetch = profile => ({
//   type: types.MEMBERSHIP_FETCH,
//   profile
// });
// export const receiveMembership = (membership, profile) => {
//   return ({
//     type: types.MEMBERSHIP_USER,
//     profile,
//     membership
//   })
// }
//
// export const fetchMembership = (profile) => {
//   return axios.post('/m',{
//         seekerUserId: null,
//         accountPhoneNumber: null,
//         accountEmailAddress: profile.email,
//         isSeeker: true,
//         createdAt: new Date(),
//         updatedAt: new Date()
//     })
// }
//
// export const membershipUser = (membership, profile) => ({
//   type: types.MEMBERSHIP_USER,
//   payload: { membership },
//   profile,
// });
//
// export const membershipAccount = membership => ({
//   type: types.MEMBERSHIP_ACCOUNT,
//   error
// });
//
// export const seekerUser = (seeker) => ({
//   type: types.SEEKER_USER,
//   seeker,
// });
//
// export const updateSeekerAccountRequest = (membership,seeker) => {
//
//   console.log('gotcha bitch')
//   return {
//     type: types.SEEKER_UPDATE,
//     seeker,
//     membership
//   }
// };
// export const getSeekerAccountRequest = (membership) => {
//
//   return {
//     type: types.SEEKER_FETCH,
//     membership
//   }
// };
// export const updateSeekerAccount = (membership, seeker) => {
//   return axios.post('/seeker/update', {membership, seeker})
// }
// export const getSeekerAccount = (membership) => {
//   // console.log(membership)
//   return axios.get('/s/user/'+ membership.seekerUserId)
// }
//
// export const createSeekerAccount = (membership, seeker) => {
//   return axios.post('/seeker/signup', {membership, seeker})
// }
