import axios from 'axios';

class ExampleApiService {
  getPosts() {
    return axios.get('api/posts');
  }
}

export default new ExampleApiService();