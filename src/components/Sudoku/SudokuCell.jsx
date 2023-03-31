import * as React from 'react';
import { Button } from "@mui/material";
import { styled } from '@mui/material/styles';

const BootstrapButton = styled(Button)({
    // display: "flex",
    // justifyContent: "center",
    // alignItems: "center",
    fontSize: "2vmin",
    fontWeight: "bold",

    // height: "calc((50vmin - 10px) / 9)",
    // width: "calc((50vmin - 10px) / 9)",
    backgroundColor: "#b0d8e3",
    border: '2px solid ',
    borderRadius: 0,
    aspectRatio: "1 / 1",

    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
});

export default function SudokuCell({ value, rowIndex, columnIndex }) {
    return (
        <React.Fragment>
            <BootstrapButton>
                {value}
            </BootstrapButton>
            {/* <div className="cell">

            </div> */}
        </React.Fragment >
    );
}