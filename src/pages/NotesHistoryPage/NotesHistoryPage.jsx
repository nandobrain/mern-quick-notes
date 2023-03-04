import { checkToken } from '../../utilities/users-service'
import NewNotesPage from '../NewNotesPage/NewNotesPage'

export default function NotesHistoryPage({notes}) {

    async function handleCheckToken() {
        const expDate = await checkToken()
        console.log(expDate)
    }

    return (
        <>
            <ul>
                <h1>All Notes</h1>
                {notes.map((notes, idx) =>
                <NewNotesPage notes={notes} key={idx} index={idx} />
                )}
            </ul>
           
        </>
    )
}