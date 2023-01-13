// You can write your own logic here to determine the actual url
window.remoteComponentUrl = 'http://localhost:3002';
// window.remoteComponentUrl = 'https://dsciuistaticsstorage.blob.core.windows.net/releases/remote-component';

// Use dynamic import here to allow webpack to interface with module federation code
import('./bootstrap');
