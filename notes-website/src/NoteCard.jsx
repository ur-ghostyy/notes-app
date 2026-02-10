
function NoteCard(notes){
    
    return(
        <div className="note-card">
            <a href={notes.pdfUrl} >
                <img src={notes.coverImg}/>
            </a>
            
            <h1>{notes.title}</h1>
            
             <a href={notes.pdfUrl} download>
                <button>Download</button>
             </a>


            
        </div>
    )
}
export default NoteCard