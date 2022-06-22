/** @format */
// eslint-disable-next-line import/no-unresolved
import { onNavigate } from '../router/routes.js';

if (window.localStorage.userName === undefined) {
  onNavigate('/');
} else {
  onNavigate('/post');
}
