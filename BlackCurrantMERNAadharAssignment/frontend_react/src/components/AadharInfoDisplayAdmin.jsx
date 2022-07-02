import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Axios from "axios";

function AadharInfoDisplayAdmin() {
  const [aadharDataList, setAadharDataList] = useState([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/displayAadharList").then((response) => {
      setAadharDataList(response.data);
      console.log(response.data, "response on aadhar display info list");
    });
  }, []);

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Phone Number",
      dataIndex: "phoneNumber",
      key: "phoneNumber",
    },
    {
      title: "Email Address",
      dataIndex: "emailAddress",
      key: "emailAddress",
    },
    {
      title: "Password",
      dataIndex: "password",
      key: "password",
    },
    {
      title: "Home Address",
      dataIndex: "homeAddress",
      key: "homeAddress",
    },
    {
      title: "State",
      dataIndex: "state",
      key: "state",
    },
  ];

  return (
    <div>
      <Table dataSource={aadharDataList} columns={columns}></Table>
    </div>
  );
}

export default AadharInfoDisplayAdmin;
