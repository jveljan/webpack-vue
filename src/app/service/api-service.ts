import axios from 'axios';

class ExampleApiService {
  public getPosts() {
    return axios.get('api/posts');
  }
}

export default new ExampleApiService();
