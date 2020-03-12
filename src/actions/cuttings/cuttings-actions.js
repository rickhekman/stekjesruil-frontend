import axios from 'axios'

const baseUrl = 'http://localhost:4000'

// Create a cutting
// export const CREATE_CUTTING = 'CREATE_CUTTING'

// export function cuttingCreate(cutting) {
//   return {
//     type: CREATE_CUTTING,
//     payload: cutting
//   }
// }

// export function createCutting(newCuttingData) {
//   return async function (dispatch, getState) {
//     try {

//       const state = getState()
//       const token = state.users.token

//       const response = await axios
//         .post(`${baseUrl}/cuttings`,
//           { newCuttingData },
//           {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           }
//         )

//       dispatch(cuttingCreate(response.data))

//     } catch (error) {
//       throw error
//     }
//   }
// }

// Read all cuttings
export const ALL_CUTTINGS = 'ALL_CUTTINGS'

export function allCuttings(cuttings) {
  return {
    type: ALL_CUTTINGS,
    payload: cuttings
  }
}

export function getAllCuttings() {
  return async function (dispatch) {
    try {


      const response = await axios
        .get(`${baseUrl}/cuttings`)

      console.log('ALL CUTTINGS RESPONSE', response)

      const { data } = response
      const action = allCuttings(data)
      dispatch(action)

    } catch (error) {
      throw error
    }

  }
}