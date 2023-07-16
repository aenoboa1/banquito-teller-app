// third-party
import {merge} from 'lodash';

// project import
import Badge from './Badge.js';
import Button from './Button.js';
import CardContent from './CardContent.js';
import Checkbox from './Checkbox.js';
import Chip from './Chip.js';
import IconButton from './IconButton.js';
import InputLabel from './InputLabel.js';
import LinearProgress from './LinearProgress.js';
import Link from './Link.js';
import ListItemIcon from './ListItemIcon.js';
import OutlinedInput from './OutlinedInput.js';
import Tab from './Tab.js';
import TableCell from './TableCell.js';
import Tabs from './Tabs.js';
import Typography from './Typography.js';

// ==============================|| OVERRIDES - MAIN ||============================== //

export default function ComponentsOverrides(theme) {
    return merge(
        Button(theme),
        Badge(theme),
        CardContent(),
        Checkbox(theme),
        Chip(theme),
        IconButton(theme),
        InputLabel(theme),
        LinearProgress(),
        Link(),
        ListItemIcon(),
        OutlinedInput(theme),
        Tab(theme),
        TableCell(theme),
        Tabs(),
        Typography()
    );
}
