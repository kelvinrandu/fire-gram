import React, { useState } from "react";
import useFirestore from "../hooks/useFirestore";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  useDisclosure,
} from "@chakra-ui/react";

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
          <div
            onClick={() => handleClick(doc.url)}
            className="img-wrap"
            key={doc.id}
          >
            <img src={doc.url} alt="uploaded pic" />
          </div>
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
