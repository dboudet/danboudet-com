import Link from 'react-dom'
import { Button } from '@material-ui/core'
import ResumeLink from './ResumeLink'

export default function Resume() {
    return(
        <>
        <Link to={ResumeLink}>
          <Button />
        </Link>
        </>
    )
}