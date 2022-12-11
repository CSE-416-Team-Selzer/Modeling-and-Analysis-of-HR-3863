const axios = require('axios');
const api = axios.create({
    baseURL: 'http://localhost:8080/',
    
})


export const getStateDemographics = (name) => api.get(`/state/demographics?name=${name}`)

export const getSmdPlanByTag = (tag, name) => api.get(`/state/plans/smd?tag=${tag}&name=${name}`)

export const getMmdPlanByTag = (tag, name) => api.get(`/state/plans/mmd?tag=${tag}&name=${name}`)

export const getSmdEnsembleData = (name) => api.get(`/state/plans/smd/ensemble?name=${name}`)

export const getMmdEnsembleData = (name) => api.get(`/state/plans/mmd/ensemble?name=${name}`)

export const getSmdBoxAndWhisker = (name) => api.get(`/state/plans/smd/boxandwhisker?name=${name}`)

export const getMmdBoxAndWhisker = (name) => api.get(`/state/plans/mmd/boxandwhisker?name=${name}`)

export const getNumSeats = (name) => api.get(`/state/seats?name=${name}`)

export const getVoteShare = (name) => api.get(`/state/voteshare?name=${name}`)

const apis = {
    getStateDemographics,
    getSmdPlanByTag,
    getMmdPlanByTag,
    getSmdEnsembleData,
    getMmdEnsembleData,
    getSmdBoxAndWhisker,
    getMmdBoxAndWhisker,
    getNumSeats,
    getVoteShare
}


export default apis