import { createTheme } from '@material-ui/core/styles';
import {blue, red} from '@material-ui/core/colors';

export default createTheme({
    typography: {
        useNextVariants: true,
        color: '#fff',
    },
    palette: {
        type: 'dark',
        primary: {
            main: '#e52e33'
        },
        secondary: blue,
        error: red,
        contrastThreshold: 3,
        tonalOffset: 0.2,
        contrastText: '#fff',
    }
});