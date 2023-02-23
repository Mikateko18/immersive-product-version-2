import React from 'react';

import Card from '../../shared/components/UIComponents/Card';
import ModelItem from './ModelItem';
import Button from '../../shared/components/FormElements/Button';
import './ModelList.css';

const ModelList = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Models found. Maybe create one?</h2>
          <Button to="/models/new">Share Model</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(model => (
        <ModelItem
          key={model.id}
          id={model.id}
          image={model.image}
          title={model.title}
          description={model.description}
          creatorId={model.creator}
          onDelete = {props.onDeleteModel}
         
        />
      ))}
    </ul>
  );
};

export default ModelList;
