/* globals localStorage */
import api from './api-service';

class ExampleAuthService {
  public login(email: string, pass: string, callback: (loggedIn: boolean) => void) {
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

  public loggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  public getToken(): string {
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
