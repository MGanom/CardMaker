import { firebaseAuth, githubProvier, googleProvider } from './firebase';

class AuthService {
  login(providerName) {
    const authProvider = this.getProvider(providerName);
    return firebaseAuth.signInWithPopup(authProvider);
  }

  logout() {
    firebaseAuth.signOut();
  }

  onAuthChange(onUserChange) {
    firebaseAuth.onAuthStateChanged(user => {
      onUserChange(user);
    });
  }

  getProvider(providerName) {
    switch (providerName) {
      case 'Google':
        return googleProvider;
      case 'Github':
        return githubProvier;
      default:
        throw new Error(`Unknown provider: ${providerName}`);
    }
  }
}

export default AuthService;
