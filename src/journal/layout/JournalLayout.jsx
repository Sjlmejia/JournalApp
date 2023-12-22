import { Box } from '@mui/system'
import { Navbar, SideBar } from '../components';

const drawerWitdh = 240;
// eslint-disable-next-line react/prop-types
export const JournalLayout = ({children}) => {
  return (
    <Box sx={{ display: 'flex'}}>
      
      <Navbar drawerWitdh={ drawerWitdh }/>
      <SideBar drawerWitdh={ drawerWitdh }/>

      <Box 
        component='main'
        sx={{ flexGrow: 1, p: 3 }}
        >
        
        {/* Toolbar */}
        
        { children }
      </Box>
    </Box>
  )
}
