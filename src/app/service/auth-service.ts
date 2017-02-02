/* globals localStorage */
function pretendRequest(email, pass, cb) {
  setTimeout(() => {
    if (email === 'joe@example.com' && pass === 'pass') {
      cb({
        authenticated: true,
        token: Math.random().toString(36).substring(7),
      });
    } else {
      cb({ authenticated: false });
    }
  }, 50);
}

class ExampleAuthService {
  public login(email: String, pass: String, callback) {
    if (this.loggedIn()) {
      callback(true);
      return;
    }

    pretendRequest(email, pass, (res) => {
      if (res.authenticated) {
        localStorage.setItem('token', res.token);
        callback(true);
      } else {
        callback(false);
      }
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
