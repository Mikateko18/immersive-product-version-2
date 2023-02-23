import React from "react";
import './UsersList.css';
import UserItem from './UserItem';
import Card from "../../shared/components/UIComponents/Card";

const UsersList = props =>{
    if(props.items.length === 0){
        return ( 
        <div className="center">
            <Card>
            <h2>No users who uploaded models found</h2>
            </Card>
        </div>
        );
    }
    return (<ul className="users-list">
        {
           props.items.map(user => (
              <UserItem  
              key={user.id} 
              id={user.id} 
              image={user.image} 
              name={user.name} 
              companyName={user.companyName}
              modelsCount={user.models.length}/>
           )) 
        }
    </ul>
    );
};

export default UsersList;