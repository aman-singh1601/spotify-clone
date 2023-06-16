export const initialState={
    user:null,
    playlists:[],
    playing:false,
    item:null,
    token:'BQCKd35wyJovjfXSRNeMMCVVq-5r8hV3GhnSknKNUUjoGfyHrR2RQwUda4CpK4M75EsEF8ebaI1md1H5oTZtjJNft9kK5t2Pww8ADV_86DC9ZrTD2lGNKahtp_rqe5hNRPF9b6Z-COVKvcWHvI4kq5l0nvo5zRpWlxjHkomgRSgU6HPhoklELHlp1NYPNUWiMRQNX-r3KdH5rMWo'
}

const reducer=(state,action)=>{
    console.log(action);

    switch (action.type){
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }
        case 'SET_TOKEN':
            return {
                ...state,
                token:action.token
            }    
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists:action.playlists
            }    
        default :
            return state;    
    }
}
export default reducer