import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SearchCom from "./SearchCom";
import { filial_type, url } from "../constant/constant";
interface DataType {
  name: string;
  key: number;
  filial_type: string;
}

const Fillial: React.FC = () => {
  const fillial = "filial";
  const [input, setInput] = useState("");
  const columns: ColumnsType<DataType> = [
    {
      title: "N",
      dataIndex: "key",
    },
    {
      title: <SearchCom title="Name" cb={setInput} item={input} />,
      dataIndex: "name",
    },
    {
      title: "Turi",
      dataIndex: "filial_type",
    },
  ];
  const [data, setData] = useState<DataType[]>();
  const fetchUrl = async () => {
    let query = input ? `?name=${input}` : "";
    try {
      const res = await fetch(url + fillial + query);

      const { data } = await res.json();

      const newData = data?.map((item: any, i: any) => {
        return {
          name: item.nomi,
          key: i + 1,
          filial_type: filial_type[item.turi],
        };
      });

      setData(newData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchUrl();
  }, [input]);

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

export default Fillial;
