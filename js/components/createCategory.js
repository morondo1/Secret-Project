import { createElement } from "../helper/createElemnt.js"

export const createCategory = (app) => {

    const category = createElement('section', {
        className: 'category section-offset',

    });
    const container = createElement('div', {
        className : 'container',
    });

    category.append(container);

    const categoryList =  createElement('ul', {
        className : 'category__list',
    });

    container.append(categoryList); 

    const createCategoryCard = (data) => {
        const item = createElement('li', {
            className: 'category__item',
            textContent: data.title, //ybratb
        });
        item.dataset.id = data.id;

        //написать функционал создания html карточки
        return item;

    }


    const mount = (data) => {
        categoryList.textContent = '';
        app.append(category);
        const cards =  data.map(createCategoryCard);
        categoryList.append(...cards);
    };
    const unmount = () => {
        category.remove();
    }
    return {mount, unmount, categoryList};

}