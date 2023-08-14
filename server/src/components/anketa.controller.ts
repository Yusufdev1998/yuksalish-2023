import { Request, Response } from "express";
import anketaModel, { IAnketa } from "../models/anketa.models";

export const getAnketa = async (req: Request, res: Response) => {
  try {
    let query = req.query;

    let one: any = {};
    let two: any = {};

    Object.keys(query).forEach((item) => {
      if (item === "languages") {
        one[item] = { $element: { $regex: query[item], $options: "i" } };
      } else if (item === "softwares") {
        one[item] = { $element: { $regex: `${query[item]}`, $options: "i" } };
      } else if (item.includes("sort")) {
        let newItem = item.split("_")[1];
        two["sort"] = { [`${newItem}`]: (query[item] as any) * 1 };
      } else if (item === "limit" || item === "skip") {
        two[item] = (query[item] as any) * 1;
      } else {
        one[item] = { $regex: query[item], $options: "i" };
      }
    });

    two["limit"] = two["limit"] ? two["limit"] : 20;
    two["skip"] = two["skip"] ? two["skip"] : 20;
    let data = await anketaModel.find(one, {}, two);
    const count = await anketaModel.count(one);

    let newData = data?.map((item: any, i: any) => {
      return {
        key: i + 1,
        fio: item.fio,
        birthday: item.birthday,
        specialization: item.specialization,
        living_region_id_nomi: item.living_region_id_nomi,
        living_district_id_nomi: item.living_district_id_nomi,
      };
    });
    res.send({
      data,
      newData,
      succes: true,
      count,
      limit: data.length,
      skip: (query["skip"] as any) * 1,
    });
  } catch (error: any) {
    console.log(error);

    res.send({ error: error.message, succes: false });
  }
};

export const createAnteka = async (req: Request, res: Response) => {
  try {
    const body: IAnketa = req.body;

    const fio = body?.name + body?.surname + body?.middleName + "";

    const data = await anketaModel.create({
      ...body,
      fio: body.fio ? body.fio : fio,
    });

    res.send({ data, succes: true });
  } catch (error: any) {
    res.send({ error: error.message, succes: false });
  }
};
