import React from 'react';
import {
  Progress,
} from "@chakra-ui/react";
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file,setFile}) => {
    const {url, progress } = useStorage(file);
    console.log(progress, url)
    return <Progress hasStripe value={progress} />;
}

export default ProgressBar
