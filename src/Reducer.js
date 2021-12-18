
export default (state, action) => {
    switch(action.type){
        case 'SUMMARY':
            return action.payload
        
        case 'COUNTRY_SUMMARY':
            return action.payload
        
        default:
            return state;
    }
}