const axios = require('axios');
const api = axios.create({
    baseURL: 'http://localhost:8080/',
    
})


export const getState = (name) => api.get(`/state?name=${name}`)

export const getStateDemographics = (name) => api.get(`/state/demographics?name=${name}`)

export const getPlan = (id) => api.get(`/plans?id=${id}`)

export const getPlanGeoJson = (id) => api.get(`/plans/geojson?id=${id}`)

export const getPlanWinners = (id) => api.get(`/plans/winners?id=${id}`)


export const getSmdEnsembleDistrictsByTag = (tag) => api.get(`/state/ensemble/smd/district?tag=${tag}`)

export const getMmdEnsembleDistrictsByTag = (tag) => api.get(`/state/ensemble/mmd/district?tag=${tag}`)

export const getSmdPlanByTag = (tag, name) => api.get(`/state/plans/smd?tag=${tag}&name=${name}`)

export const getMmdPlanByTag = (tag, name) => api.get(`/state/plans/mmd?tag=${tag}&name=${name}`)



const apis = {
    getState,
    getPlan,
    getPlanGeoJson,
    getStateDemographics,
    getPlanWinners,
    getSmdEnsembleDistrictsByTag,
    getMmdEnsembleDistrictsByTag,
    getSmdPlanByTag,
    getMmdPlanByTag
}


export default apis