import { createCategory } from "./components/createCategory.js";
import { createHeader } from "./components/createHeader.js";
import { createElement } from "./helper/createElemnt.js";
import { fetchCategories } from "./service/api_service.js";

const initApp = async () =>{ 
const headerParent = document.querySelector('.header');
const app = document.querySelector('#app');

const headerObj = createHeader(headerParent);
const categoryObj = createCategory(app); 



const returnIndex =  async  e => {
    e?.preventDefault();
    const categories = await fetchCategories();

 if(categories.error) {
    app.append(createElement('p', {
        className: 'server-error',
        textContent: 'Ошибка: Попробуй позже',
    }));
    return;
 }

 categoryObj.mount(categories); 

}

returnIndex();

headerObj.headerLogoLink.addEventListener('click', returnIndex);

headerObj.headerBtn.addEventListener('click', () => {
    categoryObj.unmount(); 
    headerObj.updateHeaderTitle('Новая категория');
})
};

initApp();