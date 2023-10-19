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

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setUsers,
  deleteUser,
  searchUsers,
  sortUsers,
} from "../Features/userSlice";
import { selectActiveUsers } from "../Features/userSlice";

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
      <ul>
        {activeUsers.map((user) => (
          <li key={user.id}>
            {user.name} - {user.phone}
            <button onClick={() => handleDelete(user.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserDetails;
