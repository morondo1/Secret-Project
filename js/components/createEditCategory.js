import { createElement } from "../helper/createElemnt.js"

const TITLE = 'введите название категории';

export const createEditCategory = (app) => {

    const editCategory = createElement ('section', {
        className: 'edit section-offset',
    });

    const container = createElement ('div', {
        className: 'container edit__container',
    });

    const title = createElement ('h2', {
        className: '  ',
        contenteditable: true,
        title: 'Можно редактировать',
    });

    const table = createElement('table', {
        className: 'edit__table table',
    });

    const thead = createElement('thead');
    const trThead = createElement('tr');

    const tableHeadCellmain = createElement('th', {
        className: 'table__cell',
        textContent: 'main',
    });

    const tableHeadCellsecond = createElement('th', {
        className: 'table__cell',
        textContent: 'second',
    });

    const tableHeadCellEmpty = createElement('th', {
        className: 'table__cell',
    });

    const tbody = createElement('tbody');

    const btnWrapper = createElement('div', {
        className: 'edit__btn-wrapper',
    });

    const btnAddRow = createElement('button', {
        className: 'edit__btn edit__add-row',
        textContent: 'Добавить пару', 
    });

    const btnSave = createElement('button', {
        className: 'edit__btn edit__save',
        textContent: 'Сохранить категорию',
    });

    const btnCancel = createElement('button', {
        className: 'edit__btn edit__cancel',
        textContent: 'Отмена',
    });

    editCategory.append(container);
    table.append(thead, tbody);
    thead.append(trThead);
    trThead.append(tableHeadCellmain, tableHeadCellsecond, tableHeadCellEmpty)
    btnWrapper.append(btnAddRow, btnSave, btnCancel);
    container.append(table, title, btnWrapper);

    const createTrCell = (dataArr) => {
        const tr = createElement('tr');

        const tableCellmain = createElement('th', {
            className: 'table__cell table__cell_one',
            textContent: dataArr[0],
            contentEditable: true,
        });

        const tableCellsecond = createElement('th', {
            className: 'table__cell table__cell_two',
            textContent: dataArr[1],
            contentEditable: true,
        });

        const tableCellDel = createElement('th', {
            className: 'table__cell',
        });

        const delRow = createElement('button', {
            className: 'table__del',
            textContent: 'x'
        });

        delRow.addEventListener('click', () => {
            if(confirm('вы уверены что хотите удалить строку?')) {
                tr.remove(); 
            }
        });
        tableCellDel.append(delRow);
        tr.append(tableCellmain, tableCellsecond, tableCellDel);

        return tr;
    };

    const clearTitle = () => {
        if(title.textContent === TITLE){
            title.textContent === '';
        }
    };

    const checkTitle = () => {
        if(title.textContent === ''){
            title.textContent === TITLE;
        }
    };

    title.addEventListener('focus', clearTitle);
    title.addEventListener('blur', checkTitle);


    btnAddRow.addEventListener('click', () => {
        const emptyRow = createTrCell(['', '']);

        tbody.append(emptyRow);
    });

const mount = (data = { title: TITLE, pairs: []}) => {
    console.log('data', data);
    tbody.textContent = '';
    title.textContent = data.title;

    if(title.textContent === TITLE) {
        title.classList.add('edit__title_change');
    } else {
        title.classList.remove('edit__title_change');
    }

    const rows = data.pairs.map(createTrCell); 
    const emptyRow = createTrCell(['','']);
    tbody.append(...rows, emptyRow);

    app.append(editCategory);

};

const unmount = () => {
    editCategory.remove();
}; 
    return { mount, unmount }
};