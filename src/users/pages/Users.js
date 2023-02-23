import React, {useEffect, useState} from "react";
import UsersList from "../components/UsersList";
import ErrorModal from '../../shared/components/UIComponents/ErrorModal';
import LoadingSpinner from '../../shared/components/UIComponents/LoadingSpinner';

const Users = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [LoadedUsers, setLoadedUsers] = useState();

    useEffect(() => {

        const sendRequest = async() => {
            setIsLoading(true);

            try{
                const response = await fetch('http://localhost:5000/api/users')

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                  }
     
                setLoadedUsers(responseData.users)
                setIsLoading(false);
            }catch (err) {
                
                setError(err.message || 'Something went wrong, please try again.');
              }

              setIsLoading(false);
        }

        sendRequest();
    }, 
    
    [])

    const errorHandler = () => {
        setError(null);
      };


return <React.Fragment>
    <ErrorModal error={error} onClear={errorHandler} />
    {isLoading && <div className="center">
        <LoadingSpinner asOverlay />
        </div>}
    {!isLoading && LoadedUsers && <UsersList  items={LoadedUsers}/>}

</React.Fragment>
}
export default Users;