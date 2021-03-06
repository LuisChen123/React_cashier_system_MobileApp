import JsonP from 'jsonp'

export default class Axios {
    static handleJsonP(options){
        return new Promise((resolve,reject)=>{
            JsonP(options.url,{
                param:'callback'
            },function(err,response){
               if(response.status === 'success'){
                   resolve(response)
               }else{
                reject(response.message);
               }
            })
         })
    }
}