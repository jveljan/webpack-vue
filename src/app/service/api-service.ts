import axios from 'axios';

interface ILoginResp {
  authenticated: boolean;
  token?: string;
}

class ExampleApiService {
  public getPosts() {
    return axios.get('api/posts')
      .then(res => {
        return res.data;
      });
  }
  public getPostDetails(id: number) {
    return Promise.all([
      axios.get(`api/posts/${id}`),
      axios.get(`api/post/${id}/comments`)
    ]).then(res => {
      return {
        comments: res[1].data,
        post: res[0].data
      };
    });
  }
  public doLogin(user: string, pass: string, callback: (resp: ILoginResp) => void) {
    setTimeout( () => {
      if (user === 'joe@example.com' && pass === 'pass') {
        callback({
          authenticated: true,
          token: Math.random().toString(36).substring(7)
        });
      } else {
        callback({
          authenticated: false
        });
      }
    }, 500);
  }
}
export default new ExampleApiService();
