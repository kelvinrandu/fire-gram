import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";
import {motion} from 'framer-motion';

const ImageGrid = () => {
  const { docs } = useFirestore("images");
  const [url, setUrl] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();
  console.log(docs);

  const handleClick = (url) => {
    onOpen();
    setUrl(url);
  };

  return (
    <div className="img-grid">
      {docs &&
        docs.map((doc) => (
          <motion.div
            layout
            whileHover={{ opacity:1}}
            onClick={() => handleClick(doc.url)}
            className="img-wrap"
            key={doc.id}
          >
            <motion.img src={doc.url} alt="uploaded pic" 
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{delay:1}}
            />
          </ motion.div>
        ))}
      <>
        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <img src={url} alt="uploaded pic" />
          </ModalContent>
        </Modal>
      </>
    </div>
  );
};

export default ImageGrid;
