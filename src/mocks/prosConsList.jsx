import eat from "/src/assets/eat.svg";
import sprout from "/src/assets/sprout.svg";
import garbage from "/src/assets/garbage.svg";
import no_meat from "/src/assets/no-meat.svg";

export const prosList = [
  {
    id: 0,
    src: eat,
    category: "Фермерские продукты",
    title: "Еда намного вкуснее",
    description:
      "Домашняя колбаса из мяса, соли и специй и колбаса из магазина — два настолько разных продукта, что они даже не родственники."
  },
  {
    id: 1,
    src: sprout,
    category: "Фермерские продукты",
    title: "Натуральные продукты",
    description:
      "Поставляем местные органические продукты выращенные без пестицидов и химических удобрений."
  }
];

export const consList = [
  {
    id: 2,
    src: garbage,
    category: "Магазинные продукты",
    title: "Просроченные продукты",
    description:
      "Из-за большого количество товара сотрудники магазинов не успевают своевременно производить замену товара."
  },
  {
    id: 3,
    src: no_meat,
    category: "Магазинные продукты",
    title: "Некачественное мясо",
    description:
      "Мясные полуфабрикаты, в которых содержится чрезмерно много натрия, вредных жиров, консервантов."
  }
];
