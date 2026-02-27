type AddressType = {
  street: string; // ПОДПРАВЛЯЕМ any
  city: string; // ПОДПРАВЛЯЕМ any
};

type UserType = {
  id: number
  name: string
  age: number
  address: AddressType
  // ПРИДЕТСЯ САМОМУ)
};

type UserListPropsType = {
  users: UserType[]; // ПО МОЕМУ ЧЕГО-ТО НЕ ХВАТАЕТ...
};

export const UserList = ({users}: UserListPropsType) => {
  return (
    <div id={'hw01-users'}>
      <h2>User List:</h2>

      <ul>
       {users.map((props) => ( // ВСЕ ТОВАРЫ В СТРАНУ ПРИЕЗЖАЮТ В КОНТЕЙНЕРАХ, А В РЕАКТЕ...
         <li key={props.id} id={`hw01-user-${props.id}`}>
            <strong>{props.name}</strong> (Age: {props.age})<strong> Address:</strong>
            {props.address.street}, {props.address.city}
          </li>
        ))}
      </ul> 
    </div>
  );
};
