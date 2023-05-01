import { createElement } from "../helper/createElemnt.js"
import { declofnum } from "../helper/declofnum.js";

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
            textContent: data.title, 
        });
        item.dataset.id = data.id;

        const btnCard = createElement('button', {
            className: 'category__card',
        });
        const titleText = createElement('span', {
            className: 'category__title', 
            textContent: data.title,
        });
        const countPairs = createElement('span', {
            className: 'category__pairs',
            textContent: declofnum(data.length, ['пара', 'пары', 'пар'])
        });

        btnCard.append(titleText, countPairs);

        const btnEdit = createElement('button', {
            className: 'category__btn category__edit',
            ariaLable: 'редактировать',
        });

        const btnDel = createElement('button', {
            className: 'category__btn category__del',
            ariaLable: 'удалить',
        });

        item.append(btnCard, btnEdit, btnDel)

        return item;

    }


    const mount = (data) => {
        categoryList.textContent = '';
        const cards =  data.map(createCategoryCard);
        categoryList.append(...cards);
        app.append(category);
    };
    const unmount = () => {
        category.remove();
    }
    return {mount, unmount, categoryList};

}