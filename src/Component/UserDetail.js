// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setUsers,
//   deleteUser,
//   searchUsers,
//   sortUsers,
// } from "../Features/userSlice";
// import { selectActiveUsers } from "../Features/userSlice";

// const UserDetails = () => {
//   const dispatch = useDispatch();
//   const activeUsers = useSelector(selectActiveUsers);
//   const [sortOrder, setSortOrder] = useState("ascending");

//   useEffect(() => {
//     // Simulate API call
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         dispatch(setUsers(data.map((user) => ({ ...user, isActive: true }))));
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [dispatch]);

//   const handleDelete = (userId) => {
//     dispatch(deleteUser(userId));
//     // dispatch(deleteUser({ id: userId, isActive: false }));
//   };

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     dispatch(searchUsers(searchTerm));
//   };

//   const handleSort = () => {
//     const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
//     dispatch(sortUsers(newSortOrder));
//     setSortOrder(newSortOrder);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name or phone"
//         onChange={handleSearch}
//       />
//       <div>
//         <button onClick={handleSort}>
//           Sort{sortOrder === "ascending" ? "(Ascending)" : "(Descending)"}
//         </button>
//       </div>
//       <ul>
//         {activeUsers.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.phone}
//             <button onClick={() => handleDelete(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

//attempt-2
// import React, { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   setUsers,
//   deleteUser,
//   searchUsers,
//   sortUsers,
// } from "../Features/userSlice";
// import { selectActiveUsers } from "../Features/userSlice";

// const UserDetails = () => {
//   const dispatch = useDispatch();
//   const activeUsers = useSelector(selectActiveUsers);
//   const [sortOrder, setSortOrder] = useState("ascending");

//   useEffect(() => {
//     // Simulate API call
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((data) => {
//         // Sort data in ascending order by name
//         const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
//         dispatch(
//           setUsers(sortedData.map((user) => ({ ...user, isActive: true })))
//         );
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   }, [dispatch]);

//   const handleDelete = (userId) => {
//     dispatch(deleteUser(userId));
//   };

//   const handleSearch = (event) => {
//     const searchTerm = event.target.value;
//     dispatch(searchUsers(searchTerm));
//   };

//   const handleSort = () => {
//     const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
//     dispatch(sortUsers(newSortOrder));
//     setSortOrder(newSortOrder);
//   };

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search by name or phone"
//         onChange={handleSearch}
//       />
//       <div>
//         <button onClick={handleSort}>
//           Sort {sortOrder === "ascending" ? "(Ascending)" : "(Descending)"}
//         </button>
//       </div>
//       <ul>
//         {activeUsers.map((user) => (
//           <li key={user.id}>
//             {user.name} - {user.phone}
//             <button onClick={() => handleDelete(user.id)}>Delete</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default UserDetails;

//attempt-3
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsers,
  deleteUser,
  searchUsers,
  sortUsers,
} from "../Features/userSlice";
import { selectActiveUsers } from "../Features/userSlice";
import "./DataGrid.css";

const UserDetails = () => {
  const dispatch = useDispatch();
  const activeUsers = useSelector(selectActiveUsers);
  const [sortOrder, setSortOrder] = useState("ascending");

  useEffect(() => {
    // Simulate API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        // Sort data in ascending order by name
        const sortedData = data.sort((a, b) => a.name.localeCompare(b.name));
        dispatch(
          setUsers(sortedData.map((user) => ({ ...user, isActive: true })))
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [dispatch]);

  const handleDelete = (userId) => {
    dispatch(deleteUser(userId));
  };

  const handleSearch = (event) => {
    const searchTerm = event.target.value;
    dispatch(searchUsers(searchTerm));
  };

  const handleSort = () => {
    const newSortOrder = sortOrder === "ascending" ? "descending" : "ascending";
    dispatch(sortUsers(newSortOrder));
    setSortOrder(newSortOrder);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or phone"
        onChange={handleSearch}
      />
      <div>
        <button onClick={handleSort}>
          Sort {sortOrder === "ascending" ? "(Ascending)" : "(Descending)"}
        </button>
      </div>
      <table className="data-grid">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Website</th>
            <th>Company</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {activeUsers.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.address.street}</td>
              <td>{user.phone}</td>
              <td>{user.website}</td>
              <td>{user.company && user.company.name}</td>
              <td>
                <button onClick={() => handleDelete(user.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserDetails;
