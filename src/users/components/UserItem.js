import React from "react";
import './UserItem.css'
import Avatar from "../../shared/components/UIComponents/Avatar";
import Card from "../../shared/components/UIComponents/Card";
import {Link} from 'react-router-dom';

const UserItem = props =>{
return(
    <li className="user-item">
        
            <Card className="user-item__content">
            <Link to={`/${props.id}/models`}>
            <div className="user-item__image">
               <Avatar image={props.image}  alt={props.name}/>
            </div>
            <div className="user-item__info">
                <h2>{props.name}</h2>
                <h3>{props.modelsCount} {props.modelsCount ===1 || props.modelsCount ===0 ? 'model' : 'models'}</h3>

            </div>
            </Link>
            </Card>
       

    </li>
)
}

export default UserItem;