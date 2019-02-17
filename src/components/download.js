import Resume from '../assets/MattWestoverResume.pdf';
import {Button} from 'semantic-ui-react'

<Button color='green' onClick={() => document.getElementById('link').click()}>Download</Button>
<a id="link" href={Resume} download hidden></a>