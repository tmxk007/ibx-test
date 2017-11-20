import axios from 'axios'

export default {
    get(url, success) {
        axios.get(url).then(response => {
            success(response);
        }, response => {
            alert(response)
        })
    },
    post(url,success) {
        axios.get(url).then(response => {
            success(response);
        }, response => {
            alert(response)
        })
    }
}