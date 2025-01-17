import Accordion from '@mui/material/Accordion'
import AccordionActions from '@mui/material/AccordionActions'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Button from '@mui/material/Button'
import { Link, Stack, Typography } from '@mui/material'
import { useState } from 'react'
function ModelCard (props: { model: ModelAI, selected: boolean, setSelectedModel: (model: ModelAI) => void}) {
  const [isExpanded, setIsExpanded] = useState(false)

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded)
  }

  return (
    <Accordion
      expanded={isExpanded}
      sx={{
        outlineColor: 'text.primary',
        outlineStyle: 'solid',
        outlineWidth: 2,
        outline: props.selected ? '' : 'none',
      }}
    >
      <AccordionSummary
        onClick={() => { props.setSelectedModel(props.model) }}
        expandIcon={<ExpandMoreIcon sx={{ p: 1 }} onClick={(event) => { event.stopPropagation(); toggleExpanded() }} />}
        aria-controls='panel1-content'
        id='panel1-header'
      >
        <Stack
          alignItems='baseline'
          direction='row'
          gap={1}
        >
          <Typography variant='h5'>{props.model.name}</Typography>
          <Typography variant='body2' color='text.secondary'>{props.model.summary}</Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ gap: 2, display: 'flex', flexDirection: 'column' }}>
        <Stack direction='row' gap={1} alignItems='baseline'>
          <Typography variant='h5'>Model url: </Typography>
          <Link color='secondary' href={props.model.linkUrl}>{props.model.linkUrl}</Link>
        </Stack>
        <Typography>{props.model.description}</Typography>
      </AccordionDetails>
      <AccordionActions>
        <Button color='secondary' size='small'>Learn More</Button>
        <Button variant='contained' size='small' onClick={() => { props.setSelectedModel(props.model) }}>Select</Button>
      </AccordionActions>
    </Accordion>
  )
}

export default ModelCard
