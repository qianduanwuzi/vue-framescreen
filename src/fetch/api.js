import api from "./baseApi";

const http = {
  post: function(action, params) {
    return api.post(action, params).then( res => res).catch(err => err)
  },
  get: function(action, params) {
    return api.get(action, { params: params })
            .then( res => res.data)
            .catch(err => err)
  },
  put: function(action, params) {
    return api.put(action, params).then(res => res)
  },
  delete: function(action, params) {
    return api.delete(action, { data: params }).then(res => res)
  },
}


export default http
