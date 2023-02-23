
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import ModelList from '../components/ModelList';
import ErrorModal from '../../shared/components/UIComponents/ErrorModal';
import LoadingSpinner from '../../shared/components/UIComponents/LoadingSpinner';
import { useHttpClient } from '../../shared/hooks/http-hook';


const UserModels = () => {
      
    const [LoadedModels, setLoadedModels] = useState();
    const { isLoading, error, sendRequest, clearError } = useHttpClient();

    const userId = useParams().userId;

    useEffect(() => {

        const fetchModels = async () => {
            try{
                const responseData = await sendRequest(`http://localhost:5000/api/models/user/${userId}`);
                setLoadedModels(responseData.models)
            }catch(err){
            
            }
           
        }
        fetchModels();

    }, [sendRequest, userId]);

    const modelDeletedHandler = deletedModelId => {

        setLoadedModels(prevModels  => prevModels.filter(model => model.id !== deletedModelId) )
    }
    return (
    <React.Fragment>
        <ErrorModal error={error} onClear={clearError} />
        {isLoading && (<div className="center">
        <LoadingSpinner />
        </div>
        )
        }
        {!isLoading && LoadedModels && <ModelList items={LoadedModels} onDeleteModel={modelDeletedHandler}/>}

    
    </React.Fragment>
  )
}

export default UserModels;