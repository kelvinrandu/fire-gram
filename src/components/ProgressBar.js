import React,{useEffect} from 'react';
import {
  Progress,
  Text,
} from "@chakra-ui/react";
import useStorage from '../hooks/useStorage';

const ProgressBar = ({file,setFile}) => {
    const {url, progress } = useStorage(file);
    
    useEffect(()=>{
        if (url){
            setFile(null);
        }

    },[url,setFile])
    return(
        <>
         <Progress hasStripe value={progress} />
         <Text>{Math.floor(progress)}% </Text>
         </>
        );
}

export default ProgressBar
