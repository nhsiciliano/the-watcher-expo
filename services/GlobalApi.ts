import { create } from "apisauce";


const api = create({
    baseURL: 'https://newsapi.org/v2',
})

const apiKey = '?country=us&apiKey=74108b34fad343e4aa0adb43feb5f469'

const getTopHeadline = api.get('/top-headlines' + apiKey)

export default { getTopHeadline }