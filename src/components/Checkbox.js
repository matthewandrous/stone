import {firebase} from '../firebase';
import React from 'react';

// eslint-disable-next-line react/prop-types
export const Checkbox = ({id}) => {
    const archiveTask = () => {
        firebase
            .firestore()
            .collection('tasks')
            .doc(id)
            .update({
                archived: true,
            });
    };


    return (
        <div className="checkbox-holder"
        data-testid="checkbox-action"
        onClick={() => archiveTask()}
        >
            <span className="checkbox" />
        </div>
    );
};