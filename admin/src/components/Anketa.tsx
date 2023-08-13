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
      title: <SearchCom title="vakansiya" cb={setBirthday} item={birthday} />,
      dataIndex: "birthday",
    },
    {
      title: (
        <SearchCom
          title="Oblast"
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
          title="rayon"
          cb={setLiving_region_id_nomi}
          item={living_region_id_nomi}
        />
      ),
      dataIndex: "living_region_id_nomi",
    },
    {
      title: (
        <SearchCom
          title="filial"
          cb={setliving_district_id_nomi}
          item={living_district_id_nomi}
        />
      ),
      dataIndex: "living_district_id_nomi",
    },
    {
      title: "data",
      dataIndex: "birthday",
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
      if (quer) {
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
      const res = await fetch(url + fillial + query);
      const data = await res.json();
      setData(data);
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
