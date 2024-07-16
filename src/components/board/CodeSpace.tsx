import React from 'react';
import { Paper } from '@mui/material';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

interface CodeSpaceProps {
  code: string;
  language?: string;
}

const CodeSpace: React.FC<CodeSpaceProps> = ({ code, language = 'python' }) => {
  return (
    <Paper elevation={0} variant="outlined">
      <SyntaxHighlighter language={language} style={tomorrow} customStyle={{margin: 0}}>
        {code}
      </SyntaxHighlighter>
    </Paper>
  );
};

export default CodeSpace;