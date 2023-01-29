import { Box } from '@chakra-ui/react';
import React from 'react';

import Message from './Message/Message';

import './Messages.css';

const Messages = ({ messages, name }:{messages:any,name:any}) => (
  <Box className="messages">
    {messages.map((message:any, i:any) => <div key={i}><Message message={message} name={name}/></div>)}
  </Box>
);

export default Messages;