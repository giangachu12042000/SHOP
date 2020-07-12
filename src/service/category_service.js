import { restApiClient } from 'utils/createRestApiClient' 

export default () => {
    const apiServer = restApiClient
    return {
      postCategory: (data) => {
        return apiServer.request({
          method: 'POST',
          data,
          url: `/api/category/add`, 
          responseType: 'json'
        })
      }, 
    }
  }