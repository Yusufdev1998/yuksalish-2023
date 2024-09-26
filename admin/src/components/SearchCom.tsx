import { Input } from "antd";
import { SearchOutlined, FilterOutlined } from "@ant-design/icons";
import React, { useState } from "react";

const SearchCom = (props: {
  title: string;
  cb: React.Dispatch<React.SetStateAction<any>>;
  item: string;
}) => {
  const [show, setShow] = useState<boolean>(false);

  return (
    <div className="titles">
      <p>{props?.title}</p>
      <div style={{ display: "flex", gap: "30px" }}>
        <FilterOutlined style={{ cursor: "pointer" }}></FilterOutlined>
        <SearchOutlined
          onClick={() => {
            setShow(!show);
          }}
        />
      </div>
      {show && (
        <div className="serches">
          <Input
            value={props.item}
            onChange={(e) => {
              props.cb(e.target.value);
            }}
          />
          <SearchOutlined />
        </div>
      )}
    </div>
  );
};

export default SearchCom;
