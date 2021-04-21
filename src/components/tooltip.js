import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Tooltip from '@material-ui/core/Tooltip';
import './matmenu.css';

import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';

const useStyles = makeStyles((theme) => ({
  fab: {
    margin: theme.spacing(2),
  },
  absolute: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(3),
  },
}));

export default function SimpleTooltips() {


  return (
    <div>
     
      <Tooltip title="Show Projects" aria-label="add">
        <div>
                <DynamicFeedIcon className="projectIconStyle"/>
        </div>
        
      </Tooltip>
     
    </div>
  );
}