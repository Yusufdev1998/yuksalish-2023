import React, { useState, useEffect } from "react";
import { Table } from "antd";
import type { ColumnsType } from "antd/es/table";
import SearchCom from "./SearchCom";
import { url } from "../constant/constant";
interface DataType {
  name: string;
  key: number;
}

const Lavozim: React.FC = () => {
  const lavozim = "lavozim";
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
  ];
  const [data, setData] = useState<DataType[]>();
  const fetchUrl = async () => {
    try {
      let query = input ? `?name=${input}` : "";
      const res = await fetch(url + lavozim + query);

      const { data } = await res.json();

      const newData = data?.map((item: any, i: any) => {
        return {
          name: item.nomi,
          key: i + 1,
        };
      });

      setData(newData);
    } catch (error: any) {
      console.log(error.message);
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

export default Lavozim;
