import { useState } from 'react';
import { format } from 'date-fns';
import Loading from "./Loading";
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './App.css';

function App() {
  const url = "https://swapi.dev/api/people/1/";
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const jsonData = await response.json();
      setUserData(jsonData);
      setLoading(false);
    } catch (error) {
      console.log("my error is" + error);
      setLoading(false);
    }
  }
  if (loading) {
    return <Loading />;
  }

  return (
    <div className="App">

      {/* Button to generate data */}
      <Button variant="outlined" style={{ margin: '10px' }} onClick={getData}>Get Data</Button>

      {/* Displaying data in tabular format */}
      {
        userData
          ? (<TableContainer component={Paper} style={{ width: '40%', position: 'absolute', left: '30%' }}>
            <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
              <TableBody>

                {/* Name */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Name
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.name}
                  </TableCell>
                </TableRow>

                {/* height */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Height
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.height}
                  </TableCell>
                </TableRow>

                {/* Mass */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Mass
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.mass}
                  </TableCell>
                </TableRow>

                {/*  Skin color */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Skin Color
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.skin_color}
                  </TableCell>
                </TableRow>

                {/* Hair color */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Hair color
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.hair_color}
                  </TableCell>
                </TableRow>

                {/* Birth year */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Birth year
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.birth_year}
                  </TableCell>
                </TableRow>

                {/* Gender */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Gender
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.gender}
                  </TableCell>
                </TableRow>

                {/* Created at */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Created At
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {format(new Date(userData.created), 'PP')}
                  </TableCell>
                </TableRow>

                {/* Edited */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Edited
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {format(new Date(userData.edited), 'PP')}
                  </TableCell>
                </TableRow>

                {/* Eye color */}
                <TableRow>
                  <TableCell component="th" scope="row">
                    Eye color
                  </TableCell>
                  <TableCell style={{ width: 160 }} align="right">
                    {userData.eye_color}
                  </TableCell>
                </TableRow>

              </TableBody>
            </Table>
          </TableContainer>) 
        : null
      }
    </div>
  );
}

export default App;
