/* globals localStorage */
import api from './api-service';

interface IBooleanArgCallback {
  (arg: Boolean): void;
}

class ExampleAuthService {
  public login(email: string, pass: string, callback: IBooleanArgCallback) {
    if (this.loggedIn()) {
      callback(true);
      return;
    }
    api.doLogin(email, pass, (resp) => {
      if (resp.authenticated) {
        localStorage.setItem('token', resp.token);
      }
      callback(resp.authenticated);
    });
  }

  public loggedIn(): Boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): String {
    return localStorage.getItem('token');
  }

  public logout(callback) {
    localStorage.removeItem('token');
    if (callback) {
      callback();
    }
  }
}

export default new ExampleAuthService();
