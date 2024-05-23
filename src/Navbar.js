import React from 'react';
import { Menubar } from 'primereact/menubar';
import { Button, Card, CardContent, Grid, Typography } from '@mui/material';
import loginpage from './Component/Home';
export default function Navbar() {
  const menuItemStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    // marginLeft: 80,
    fontSize: 18,
    fontWeight: 500,
    color: 'white',
    marginTop: 15,
  };

  const items = [
    {
      label: (
        <Typography style={{ ...menuItemStyle, marginLeft: 250 }}>
          About
        </Typography>
      ),
    },
    {
      label: (
        <Typography style={{ ...menuItemStyle, marginLeft: 50 }}>
          Blog
        </Typography>
      ),
    },
    {
      label: (
        <Typography style={{ ...menuItemStyle, marginLeft: 50 }}>
          Location
        </Typography>
      ),
    },
    {
      label: (
        <Typography style={{ ...menuItemStyle, marginLeft: 50 }}>
          Pricing
        </Typography>
      ),
    },
    {
      label: (
        <Button
          style={{
            backgroundColor: '#1976d2',
            color: '#fafafa',
            marginLeft: 250,
            marginTop: 15,
          }}
        >
          Hire Us
        </Button>
      ),
    },
  ];

  const start = (
    <div style={{ display: 'flex' }}>
      <img alt='logo' src='logo.png' height='50' className='mr-2'></img>
      <Typography
        style={{
          letterSpacing: '0.3em',
          marginLeft: 20,
          marginTop: 15,
          color: 'white',
        }}
      >
        {' '}
        Mango Digitals{' '}
      </Typography>
    </div>
  );

  return (
    <>
      <div
        className='container-fluid'
        style={{
          backgroundImage: 'url(/bground.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '80vh',
        }}
      >
        <Grid className='container' style={{ alignItems: 'center' }}>
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
            }}
          ></div>
          <Menubar model={items} start={start} style={{ zIndex: 1 }} />
        </Grid>
        <Grid xs={12} className='container' style={{ display: 'flex' }}>
          <Grid xs={5} style={{ marginTop: 100 }}>
            <Typography style={{ color: 'white' }}>
              We have now launched operations in Europe.
            </Typography>
            <Typography
              variant='h2'
              style={{ color: 'white', fontWeight: 900 }}
            >
              Hire The Best
            </Typography>
            <Typography
              variant='h2'
              style={{
                color: 'blue',
                backgroundColor: 'white',
                fontWeight: 900,
                padding: '10px',
                borderRadius: '10px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              }}
            >
              Marketing Team.
            </Typography>
            <Button
              style={{
                backgroundColor: 'white',
                marginTop: 50,
                fontWeight: 900,
                fontSize: 13,
                height: 50,
                color: 'blue',
              }}
            >
              {' '}
              Read Customer Stories
            </Button>
          </Grid>
          <Grid xs={5} style={{ marginTop: 100, marginLeft: 80 }}>
            <Card style={{ backgroundColor: 'black', color: 'white' }}>
              <CardContent style={{ textAlign: 'center', height: 300 }}>
                <Typography
                  variant='h6'
                  style={{ marginTop: 80, fontWeight: 700 }}
                >
                  Sign in to watch video
                </Typography>
                <Typography>
                  You may need to allow cookies first , if asked , select Allow
                  to continue.
                </Typography>

                <Button
                  variant='contained'
                  style={{ color: 'black', fontWeight: 700, marginTop: 20 }}
                >
                  Sign In
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
}
