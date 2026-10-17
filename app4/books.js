/* ============================================================
   ANNA'S LIBRARY — BOOK LIST (shared by index.html + recorder.html)

   Fill in a slot when a book is ready. Empty slots show "Coming soon".
     title  — book name
     author — optional
     cover  — optional image, e.g. "covers/01.jpg"
     text   — the story; blank line = new paragraph

   Audio: put recordings in app4/audio/ named 01.mp3 … 10.mp3
   (the recorder downloads them with the right name).
   ============================================================ */
const BOOKS = [
  { title:"", author:"", cover:"", text:`` }, // 1
  { title:"", author:"", cover:"", text:`` }, // 2
  { title:"", author:"", cover:"", text:`` }, // 3
  { title:"", author:"", cover:"", text:`` }, // 4
  { title:"", author:"", cover:"", text:`` }, // 5
  { title:"", author:"", cover:"", text:`` }, // 6
  { title:"", author:"", cover:"", text:`` }, // 7
  { title:"", author:"", cover:"", text:`` }, // 8
  { title:"", author:"", cover:"", text:`` }, // 9
  { title:"", author:"", cover:"", text:`` }, // 10
];

const BOOK_COLORS = ["#c0632a","#2e8a55","#4a3bb3","#d0662a","#a62a3a","#167f86","#3a3ec4","#c79a1a","#127a6e","#b52f74"];
BOOKS.forEach((b,i)=>{ b.color = BOOK_COLORS[i % BOOK_COLORS.length]; });
