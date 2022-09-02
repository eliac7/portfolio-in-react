import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable from "react-data-table-component";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import EditModal from "../EditModal/EditModal";
import DeleteModal from "../DeleteModal/DeleteModal";

const Users = ({ isAuthenticated }) => {
  const token = isAuthenticated?.accessToken;
  const id = isAuthenticated?.id;

  const [areUsers, setAreUsers] = useState([]);
  const [isError, setIsError] = useState("");

  //Edit useState
  const [isShowModalEdit, setIsShowModalEdit] = useState({
    open: false,
    updated: false,
    data: [],
  });

  //Delete useState
  const [isShowModal, setIsShowModal] = useState({
    open: false,
    deleted: false,
    data: [],
  });

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}/users/`, {
        headers: {
          authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setAreUsers(res.data.data);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(true);
        if (err) {
          if (err.response.data.errors) {
            setIsError(err.response.data.errors);
          } else if (err.response.message) {
            setIsError(err.message.toString());
          } else {
            setIsError("Request error. Please try again later.");
          }
        }
      });
  }, [isLoading, token]);

  useEffect(() => {
    setIsLoading();
  }, [isShowModalEdit]);

  useEffect(() => {
    if (isShowModal.deleted) {
      const UserToDeleteID = isShowModal.data._id;
      axios
        .delete(" /users/delete/" + UserToDeleteID, {
          headers: {
            authorization: "Bearer " + token,
          },
        })
        .then(() => {
          const newUsers = [...areUsers];
          const index = areUsers.findIndex(
            (user) => user._id === UserToDeleteID
          );
          setIsShowModal({
            open: false,
            deleted: false,
            data: [],
          });

          newUsers.splice(index, 1);
          setAreUsers(newUsers);
        });
    }
  }, [isShowModal, areUsers, token]);

  const handleDelete = (row) => {
    setIsShowModal((prevState) => ({
      ...prevState,
      open: true,
      data: row,
    }));
  };

  const handleEdit = (row) => {
    setIsShowModalEdit((prevState) => ({
      ...prevState,
      open: true,
      data: row,
    }));
  };

  const HeaderArray = [
    { name: "Home", link: "/admin/" },
    { name: "All Skills", link: "/admin/skills" },
    { name: "Add New Skill", link: "/admin/new" },
    { name: "Register user", link: "/admin/register" },
    { name: "All users", link: "/admin/users" },
  ];

  const columns = [
    {
      name: "ID",
      selector: (areUsers) => areUsers._id,
      sortable: true,
    },
    {
      name: "Username",
      selector: (areUsers) => areUsers.username,
      sortable: true,
    },
    {
      name: "Full Name",
      selector: (areUsers) => areUsers.fullName,
      sortable: true,
    },
    {
      name: "E-mail",
      selector: (areUsers) => areUsers.email,
      sortable: true,
    },
    {
      name: "Admin?",
      selector: (areUsers) => areUsers.isAdmin.toString(),
      sortable: true,
      style: {
        fontWeight: 700,
      },
    },
    {
      cell: (row) => (
        <button className="btn btn-secondary" onClick={() => handleEdit(row)}>
          Edit
        </button>
      ),
    },
    {
      cell: (row) => (
        <button
          className="btn btn-danger"
          onClick={() => handleDelete(row)}
          disabled={row._id === id}
        >
          Delete
        </button>
      ),
    },
  ];

  return (
    <>
      <EditModal show={isShowModalEdit} handleShow={setIsShowModalEdit} />
      <DeleteModal show={isShowModal} handleShow={setIsShowModal} />

      <Header items={HeaderArray}></Header>
      <div className="main">
        <div className="container-fluid">
          <h2 className="text-center mb-5">Users</h2>
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {!isError ? (
                <DataTable
                  columns={columns}
                  data={areUsers}
                  progressPending={isLoading}
                  pagination
                />
              ) : (
                <p className="text-center text-info fs-4">
                  An error occured. Please try again later.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Users;
