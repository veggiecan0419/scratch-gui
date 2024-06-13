// TODO: Use Palestinian colours
import * as theme from './gray';

import watermelonBgStrip from './watermelon-bg-strip.svg';

const guiColors = {
    ...theme.guiColors,
    'menu-bar-background-image': `url("${watermelonBgStrip}")`,
    'menu-bar-background-size': 'contain',
    'menu-bar-background-repeat': 'repeat-x'
}

const blockColors = theme.blockColors;

export {
    guiColors,
    blockColors
}