import { AppShell } from "@mantine/core";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import { Routes, Route } from "react-router";
import Header from "./components/Header";

const headerHeight = 60

function App() {

  return (
    <AppShell
      header={{ height: headerHeight }}
      navbar={{
        width: 300,
        breakpoint: 'sm',
        collapsed: {
          desktop: false, mobile: false
        }
      }}
      padding="md"
    >
      <Header headerHeight={headerHeight} />
      <Navbar />
      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Main />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  )
}

export default App
