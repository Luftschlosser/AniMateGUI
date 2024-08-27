import React, { FC, useEffect, useState } from 'react';
import { Button } from '@mui/material';
import UsbOffIcon from '@mui/icons-material/UsbOff';
import UsbIcon from '@mui/icons-material/Usb';
const UsbDevice: FC = () => {
  const [connectedDevice, setConnectedDevice] = useState<USBDevice | null>(null);

  const handleConnect = (): void => {
    navigator.usb.requestDevice({ filters: [] }).then((selectedDevice) => {
      setConnectedDevice(selectedDevice);
      console.log('SELECTED', selectedDevice);
    });
  };

  return (
    <>
      {connectedDevice ? (
        <Button onClick={handleConnect} variant="contained" endIcon={<UsbIcon />} color="success">
          {connectedDevice.productName}
        </Button>
      ) : (
        <Button onClick={handleConnect} variant="contained" endIcon={<UsbOffIcon />} color="error">
          Connect to device
        </Button>
      )}
    </>
  );
};

export default UsbDevice;
