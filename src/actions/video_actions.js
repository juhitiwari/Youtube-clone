import { ADD_VIDEO } from "./types"

export const fetchVideos=(videos)=>{
    return{
        payload:videos,
        type:ADD_VIDEO
    }
}