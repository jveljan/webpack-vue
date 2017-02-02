import axios from 'axios';

interface ILoginResp {
  authenticated: Boolean;
  token?: string;
}
interface ILoginCallback {
  (resp: ILoginResp): void;
}

class ExampleApiService {
  public getPosts() {
    return axios.get('api/posts');
  }
  public doLogin(user: string, pass: string, callback: ILoginCallback) {
    setTimeout( () => {
      if (user === 'joe@example.com' && pass === 'pass') {
        callback({
          authenticated: true,
          token: Math.random().toString(36).substring(7),
        });
      } else {
        callback({
          authenticated: false,
        });
      }
    }, 50);
  }
}
export default new ExampleApiService();
