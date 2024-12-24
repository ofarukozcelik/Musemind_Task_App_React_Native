import { ThemeColors } from '../theme/colors';
import { statusTypes } from './constants';

const setColor = status => {
    switch (status) {
        case statusTypes.COMPLETED:
            return ThemeColors.green;
        case statusTypes.ONHOLD:
            return ThemeColors.yellow;
        case statusTypes.INREVIEW:
            return ThemeColors.pink;
        case statusTypes.INPROGRESS:
            return ThemeColors.blue;
        default:
            return ThemeColors.white;
    }
};

export default setColor;
