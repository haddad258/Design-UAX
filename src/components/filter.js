import { datas } from "./datas";

export const filter = (id, data) => {
    const filterObject = Object
        .values(datas[data])
        .flat()
        .filter(_itm => _itm.id === id)[0];

    return filterObject;
}