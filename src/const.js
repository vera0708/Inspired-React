export const API_URL = 'https://adaptable-lake-motorcycle.glitch.me/';
export const GOODS_URL = `${API_URL}api/goods`;
export const CATEGORIES_URL = `${API_URL}api/categories`;
export const COLORS_URL = `${API_URL}api/colors`;
export const ORDER_URL = `${API_URL}api/order`;

//GET/api/goods - получить список всех товаров с пагинацией
// GET/api/goods/{id} - получить товар по его ID
// GET/api/categories - получить список категорий
// GET/api/colors - получить список цветов
// GET/api/goods?[param]

// Параметры:
// gender
// category&gender
// search = поиск
// count = количество товаров(12)
// page = страница(1)
// list = {id}, {id} - получить список товаров по id
// exclude=id - исключить id
// top=true - топ товары

// POST /api/order - оформить заказ (
// {
//   fio: str,
//   address: str,
//   phone: str,
//   email: str,
//   delivery: bool,
//   goods: [{id, count}]
// })
//    no validate

