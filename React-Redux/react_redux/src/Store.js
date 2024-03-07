import {configureStore} from "@reduxjs/toolkit"

const store = configureStore({
    reducer:{
        counter:function(count=10, actions){
            if(actions.type === "INC"){
                count=count+1
            } else{
                count=count-1
            }
            return count
        }
    }
})

export default store