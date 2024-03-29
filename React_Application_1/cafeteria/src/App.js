import React, { useState } from "react";
import Main from "./components/main";
import Book from "./components/book";
import ThankYou from "./components/thankYou";
import Navbar from "./components/navbar";
import Menu from "./components/menu"

function App() {
  const [page, setPage] = useState(0);

  return (
    <div>
      <Navbar setPage={setPage} />
      {page === 0 ? <Main setPage={setPage} /> : null}
      {page === 1 ? <Book setPage={setPage} /> : null}
      {page === 2 ? <ThankYou /> : null}
      {page === 3 ? <Menu setPage={setPage} /> : null}
    </div>
  );
}

export default App;
