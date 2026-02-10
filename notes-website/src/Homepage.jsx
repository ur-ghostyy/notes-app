import './homepage.css'
import React, { useState } from 'react'
import NoteCard from './NoteCard.jsx'

import mathsCover from './assets/covers/mathsCover.jfif'
import physicsCover from './assets/covers/physicsCover.jfif'
import csCover from './assets/covers/csCover.png'

import physicsChap7Xi from './assets/physicsNotes/physicsChapter7.pdf'
import physicsChap8Xi from './assets/physicsNotes/phys8.pdf'
import physicsChap9Xi from './assets/physicsNotes/phys9.pdf'

/* CS Notes */
import csChap1 from './assets/csNotes/cs1.pdf'
import csChap2 from './assets/csNotes/cs2.pdf'
import csChap3 from './assets/csNotes/cs3.pdf'
import csChap4 from './assets/csNotes/cs4.pdf'
import csChap5 from './assets/csNotes/cs5.pdf'
import csChap6 from './assets/csNotes/cs6.pdf'
import csChap7 from './assets/csNotes/cs7.pdf'

function HomePage() {

  const [notes] = useState([
    {
      title: "Physics Chapter 7",
      subject: "physics",
      grade: "xi",
      pdfUrl: physicsChap7Xi,
      coverImg: physicsCover
    },
    {
      title: "Physics Chapter 8",
      subject: "physics",
      grade: "xi",
      pdfUrl: physicsChap8Xi,
      coverImg: physicsCover
    },
    {
      title: "Physics Chapter 9",
      subject: "physics",
      grade: "xi",
      pdfUrl: physicsChap9Xi,
      coverImg: physicsCover
    },
    {
      title: "Computer Chapter 1",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap1,
      coverImg: csCover
    },
    {
      title: "Computer Chapter 2",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap2,
      coverImg: csCover
    },
    {
      title: "Computer Chapter 3",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap3,
      coverImg: csCover
    },
    {
      title: "Computer Chapter 4",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap4,
      coverImg: csCover
    },
    {
      title: "Computer Chapter 5",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap5,
      coverImg: csCover
    },
    {
      title: "Computer Chapter 6",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap6,
      coverImg: csCover
    },
    {
      title: "Computer Chapter 7",
      subject: "computer",
      grade: "xi",
      pdfUrl: csChap7,
      coverImg: csCover
    }
  ])

  const [search, setSearch] = useState('')
  const [subject, setSubject] = useState('')
  const [grade, setGrade] = useState('')

  // 🔍 Filtered notes (search + subject + grade)
  const filteredNotes = notes.filter(note => {
    const matchesSearch =
      note.title.toLowerCase().includes(search.toLowerCase())

    const matchesSubject =
      subject === '' || note.subject === subject

    const matchesGrade =
      grade === '' || note.grade === grade

    return matchesSearch && matchesSubject && matchesGrade
  })

  // 🚧 Check if notes EXIST for selected subject/grade (ignores search)
  const hasNotesForSelection = notes.some(note => {
    const matchesSubject = subject === '' || note.subject === subject
    const matchesGrade = grade === '' || note.grade === grade
    return matchesSubject && matchesGrade
  })

  return (
    <>
      <div>
        {/* Header */}
        <div className="Header">
          <div className="overlay"></div>
          <h1 className="mainheading">Akueb Notes</h1>

          <input
            type="text"
            className="user-search"
            placeholder="Find Notes"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* Filters */}
        <div className="user-selection">
          <div className="Subject-Selection">
            <select value={subject} onChange={(e) => setSubject(e.target.value)}>
              <option value="">Select Subject</option>
              <option value="biology">Biology</option>
              <option value="computer">Computer</option>
              <option value="chemistry">Chemistry</option>
              <option value="physics">Physics</option>
              <option value="maths">Maths</option>
            </select>
          </div>

          <div className="Grade-Selection">
            <select value={grade} onChange={(e) => setGrade(e.target.value)}>
              <option value="">Select Class</option>
              <option value="xi">11th / XI</option>
            </select>
          </div>
        </div>

        {/* Notes Grid */}
        <div className="NotesGrid">
          {filteredNotes.length > 0 ? (
            filteredNotes.map((note, index) => (
              <NoteCard
                key={index}
                title={note.title}
                pdfUrl={note.pdfUrl}
                coverImg={note.coverImg}
              />
            ))
          ) : hasNotesForSelection ? (
            <p className="status-text">No notes found 🔍</p>
          ) : (
            <p className="status-text">Coming soon… 🚧</p>
          )}
        </div>
      </div>
    </>
  )
}

export default HomePage
