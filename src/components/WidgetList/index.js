import React, { useEffect } from 'react';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import WidgetDisplay from '../WidgetDisplay';
import Header from '../AppHeader';
import { fetchAllWidgets } from '../../lib/apiConnect';
import Container from '@mui/material/Container';
import { setWidgets } from '../../services/Actions/actions';

const WidgetList = () => {
  const widgets = useSelector((state) => state.widgets.widgets || []);
  console.log('widget length', widgets.length)
  const dispatch = useDispatch();
  useEffect(() => {
    // Call the API to fetch widgets or dispatch an action
    fetchAllWidgets().then((data) => {
      dispatch(setWidgets(data));
    }).catch((err)=> {

    })
  }, [dispatch]);

  return (
    <div>
      <Header />
      <Container sx={{ paddingTop: '2em' }}>
        <Stack spacing={4} sx={{ margin: 'auto', maxWidth: 900, paddingTop: '4em', width: '100%' }}>
       
          {widgets.length === 0 ? 
            <Typography component="div" gutterBottom variant="h5">
              No widgets to display.Click + icon to create widget!!
            </Typography>
          : (
            <Grid container justifyContent="center" spacing={4} sx={{ paddingRight: 4, width: '100%' }}>
              {widgets.map((widget) => (
                <WidgetDisplay key={widget.name} widget={widget} />
              ))}
            </Grid>
          )}
        </Stack>
      </Container>
    </div>
  );
};

export default WidgetList;
