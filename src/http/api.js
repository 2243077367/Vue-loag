import axios from "axios";
let baseURL=process.env.VUE_APP_API;
console.log(baseURL);
let instate=axios.create({
    baseURL,
})
export default instate;