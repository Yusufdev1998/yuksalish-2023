import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SearchCom from "./SearchCom";
import { url } from "../constant/constant";

interface DataType {
  fio: string;
  key: number;
  birthday: string;
  specialization: string;
  living_region_id_nomi: string;
  living_district_id_nomi: string;
}

const Anketa: React.FC = () => {
  const fillial = "anketa";
  const [query, setQuery] = useState("");
  const [fio, setFio] = useState("");
  const [birthday, setBirthday] = useState("");
  const [specialization, setSpecialization] = useState("");
  const [living_region_id_nomi, setLiving_region_id_nomi] = useState("");
  const [living_district_id_nomi, setliving_district_id_nomi] = useState("");
  const columns: ColumnsType<DataType> = [
    {
      title: "N",
      dataIndex: "key",
      width: "40px",
    },
    {
      title: <SearchCom title="fio" cb={setFio} item={fio} />,
      dataIndex: "fio",
    },
    {
      title: <SearchCom title="birthday" cb={setBirthday} item={birthday} />,
      dataIndex: "birthday",
    },
    {
      title: (
        <SearchCom
          title="vakansiya"
          cb={setSpecialization}
          item={specialization}
        />
      ),
      dataIndex: "specialization",
      width: "200px",
      ellipsis: true,
    },
    {
      title: (
        <SearchCom
          title="Oblast"
          cb={setLiving_region_id_nomi}
          item={living_region_id_nomi}
        />
      ),
      dataIndex: "living_region_id_nomi",
    },
    {
      title: (
        <SearchCom
          title="Rayon"
          cb={setliving_district_id_nomi}
          item={living_district_id_nomi}
        />
      ),
      dataIndex: "living_district_id_nomi",
    },
  ];
  const [data, setData] = useState<DataType[]>([]);
  let querys: any = {
    fio,
    birthday,
    specialization,
    living_region_id_nomi,
    living_district_id_nomi,
  };

  useEffect(() => {
    let query = "?";
    Object.keys(querys).map((quer) => {
      if (querys[quer]) {
        query += quer + "=" + querys[quer] + "&";
      }
    });
    setQuery(query);
  }, [
    fio,
    birthday,
    specialization,
    living_region_id_nomi,
    living_district_id_nomi,
  ]);

  const fetchUrl = async () => {
    try {
      console.log(query);

      const res = await fetch(url + fillial + query);
      console.log(res);

      const { data } = await res.json();

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
      console.log(newData);

      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUrl();
  }, [query]);

  return (
    <>
      <Table
        columns={columns}
        dataSource={data}
        size="middle"
        style={{ height: "100%" }}
      />
    </>
  );
};

{
  /*  */
}

export default Anketa;
