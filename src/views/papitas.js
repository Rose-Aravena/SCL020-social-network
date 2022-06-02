/** @format */
import { replaceHTML } from '../utils/utils.js';

const getHTMLTemplate = () => {
  const tempate = '<h1>papitas</h1>';
  return tempate;
};
const Papitas = () => {
  const template = getHTMLTemplate();
  replaceHTML(template);
};
export default Papitas;
