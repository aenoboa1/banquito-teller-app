import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Card from "@mui/material/Card";
import {Grid} from "@mui/material";

export default function ContainedButtons() {
	return (

		<Grid
			container
			direction="column"
			alignItems="center"
			justify="center"
			style={{ minHeight: '100vh' }}
			columnSpacing={{ xs: 1, sm: 2, md: 3 }}
		>
		<Stack direction="column" spacing={2}>
			<Button variant="contained" href="/Depositos">
				Depositos
			</Button>
			<Button variant="contained" href="/Retiros">
				Retiros
			</Button>
			<Button variant="contained" href="/transferencias">
				Transferencias
			</Button>
		</Stack>
		</Grid>
	);
}