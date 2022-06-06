
import { replaceHTML } from '../utils/utils.js';
import { addEvents } from '../events/allPostEvents.js';

const getHTMLTemplate = () => `<h1>allPosth1/>`;
const AllPost = () => {
    const template = getHTMLTemplate();
    replaceHTML(template);
    addEvents();
};
export default AllPost;
