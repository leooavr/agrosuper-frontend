import React from 'react';
import {
    CardHeader,
    Typography,
    Accordion,
    AccordionSummary,
    AccordionDetails
} from '@mui/material';
import { LiveHelp, ExpandMore } from '@mui/icons-material';
import { instructionMessageStyles } from './styles';

interface InstructionMessagePops {
    subtitle: string;
    message: string;
}

export const InstructionMessage: React.FC<InstructionMessagePops> = ({ subtitle, message }) => {
    return (
        <Accordion style={{ ...instructionMessageStyles.card }} defaultExpanded={false}>
            <AccordionSummary
                style={{ ...instructionMessageStyles.header }}
                expandIcon={<ExpandMore />}>
                <CardHeader
                    className="px-0 py-2"
                    avatar={<LiveHelp color="primary" />}
                    title={
                        <Typography style={{ ...instructionMessageStyles.title }}>
                            INSTRUCCIONES
                        </Typography>
                    }
                    subheader={<Typography color="textSecondary">{subtitle}</Typography>}
                    disableTypography
                />
            </AccordionSummary>

            <AccordionDetails style={{ ...instructionMessageStyles.body }}>
                <Typography component={'span'} variant="body2">
                    {message}
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};
