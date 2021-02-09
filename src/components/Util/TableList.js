import React, { Component } from "react";
import "antd/dist/antd.css";
import { Table, Input, Button, Space, message } from "antd";
import Highlighter from "react-highlight-words";
import {
  SearchOutlined,
  DeleteTwoTone,
  DownloadOutlined,
} from "@ant-design/icons";
import { saveAs } from "file-saver";
import axios from "axios";
import URL from "../../config/config";

class TableUser extends Component {
  state = {
    searchText: "",
    searchedColumn: "",
  };

  getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            this.searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() =>
            this.handleSearch(selectedKeys, confirm, dataIndex)
          }
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => this.handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              this.setState({
                searchText: selectedKeys[0],
                searchedColumn: dataIndex,
              });
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex]
            .toString()
            .toLowerCase()
            .includes(value.toLowerCase())
        : "",
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => this.searchInput.select(), 100);
      }
    },
    render: (text) =>
      this.state.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[this.state.searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ""}
        />
      ) : (
        text
      ),
  });

  handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    this.setState({
      searchText: selectedKeys[0],
      searchedColumn: dataIndex,
    });
  };

  handleReset = (clearFilters) => {
    clearFilters();
    this.setState({ searchText: "" });
  };

  handleClick = (id, type) => {
    console.log(id);
    axios({
      method: "DELETE",
      url: `${URL}${this.props.url}${id}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    })
      .then((res) => {
        message.success(`${type} Deleted`);
        window.location.reload();
      })
      .catch((err) => err.response.data.message);
  };

  handleDownload = (fileName) => {
    console.log(fileName);
    axios({
      method: "get",
      url: `${URL}/api/cours/downloadCours/${fileName}`,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
        
      },
      responseType: "arraybuffer",
      
    })
      .then((response) => {
        let url = window.URL.createObjectURL(new Blob([response.data]));
        let a = document.createElement("a");
        a.href = url;
        a.download = fileName;
        a.click();
      })
      .catch((err) => message.error(err));
  };
  render() {
    const { title, data, type } = this.props;
    const columns = () => {
      let columns = [];
      for (let i = 0; i < title.length; i++) {
        columns.push({
          title: title[i],
          dataIndex: title[i].toLowerCase(),
          key: title[i].toLowerCase(),
          width: "30%",
          ...this.getColumnSearchProps(title[i].toLowerCase()),
        });
      }
      if (type === "COURS")
        columns.push({
          title: "Download",
          dataIndex: "",
          key: "y",
          render: (record) => {
            return (
              <Button
                type="link"
                onClick={(e) => this.handleDownload(record.cours)}
              >
                <DownloadOutlined style={{ fontSize: "20px" }} />
              </Button>
            );
          },
        });
      columns.push({
        title: "Action",
        dataIndex: "",
        key: "x",
        render: (record) => {
          return (
            <Button
              type="text"
              danger
              onClick={(e) => this.handleClick(record.id, type)}
            >
              <DeleteTwoTone
                style={{ fontSize: "20px" }}
                twoToneColor="#eb2f96"
              />
            </Button>
          );
        },
      });
      return columns;
    };
    console.log(columns());
    console.log(data);
    return <Table columns={columns()} dataSource={data} />;
  }
}

export default TableUser;
