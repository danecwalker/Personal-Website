import NavBar from "./navbar";

export default function Layout({children}) {
  return (
    <>
      <NavBar />
      {children}
    </>
  )
}