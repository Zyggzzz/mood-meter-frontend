export default function Footer() {
  return (
    <footer className="fixed bottom-0 h-36 w-screen bg-whiteBg">
      <div className="tablet:grid-cols-8 grid h-full w-screen grid-cols-6 grid-rows-4 overflow-y-hidden">
        <div className="col-span-2 bg-greenAccent"></div>
        <div className="col-span-1 col-start-6 bg-redAccent"></div>
        <div className="col-span-3 col-start-3 bg-purpleAccent"></div>
        <div className="col-span-1 col-start-8 bg-yellowAccent"></div>
        <div className="col-span-1 bg-blackPrimary"></div>
        <div className="col-span-2 col-start-6 bg-greenAccent"></div>
        <div className="col-span-3 col-start-2 bg-redAccent"></div>
        <div className="col-span-1 col-start-8 bg-purpleAccent"></div>
      </div>
    </footer>
  );
}
