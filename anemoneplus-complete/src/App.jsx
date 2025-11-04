import { useState } from "react";

const HERO_IMG = "https://images.unsplash.com/photo-1518837695005-2083093ee35b?q=80&w=2000&auto=format&fit=crop";

function TabButton({active, onClick, children}){
  return (
    <button
      onClick={onClick}
      className={`px-5 py-2 rounded-xl text-sm font-medium transition ${active ? "bg-sky-600 text-white shadow" : "bg-white text-slate-700 hover:bg-slate-100 border border-slate-200"}`}
    >
      {children}
    </button>
  )
}

export default function App(){
  const [tab, setTab] = useState("anemone");
  return (
    <div className="min-h-screen w-full bg-slate-50 text-slate-900">
      <header className="relative isolate overflow-hidden">
        <img src={HERO_IMG} alt="Black Sea waters" className="h-[42vh] w-full object-cover"/>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/20 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 mx-auto max-w-6xl px-6 pb-6">
          <div className="backdrop-blur-sm bg-white/70 rounded-2xl shadow-xl p-4 md:p-6">
            <h1 className="text-2xl md:text-4xl font-semibold">ANEMONE & ANEMONE PLUS</h1>
            <p className="text-slate-700 mt-1">A shared gateway for Black Sea ecosystem knowledge, tools and outreach.</p>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 mt-8">
        <div className="inline-flex gap-2 p-1 bg-slate-100 rounded-2xl">
          <TabButton active={tab==="anemone"} onClick={()=>setTab("anemone")}>ANEMONE</TabButton>
          <TabButton active={tab==="plus"} onClick={()=>setTab("plus")}>ANEMONE PLUS</TabButton>
        </div>

        {tab === "anemone" ? (
          <section className="mt-6 bg-white rounded-2xl shadow ring-1 ring-slate-200 p-6">
            <h2 className="text-xl font-semibold">ANEMONE (legacy)</h2>
            <p className="mt-2 text-slate-700">
              This section will preserve access to all information hosted on <a className="text-sky-700 underline" href="https://www.anemoneproject.eu" target="_blank" rel="noreferrer">anemoneproject.eu</a>.
              If iframe embedding is blocked by the remote server, we will link out directly.
            </p>
          </section>
        ) : (
          <section className="mt-6 space-y-6">
            <div className="bg-white rounded-2xl shadow ring-1 ring-slate-200 p-6">
              <h2 className="text-xl font-semibold">ANEMONE PLUS</h2>
              <p className="mt-2 text-slate-700">Add your new activities here: Stakeholder Database, Strategic Toolbox, Joint Pilot, Open Day, etc.</p>
            </div>
          </section>
        )}

        <footer className="mt-16 mb-10 grid md:grid-cols-3 gap-6 text-sm text-slate-600">
          <div>
            <h3 className="text-slate-900 font-semibold">Brand & Identity</h3>
            <p className="mt-2">Follow Interreg NEXT BSB visibility rules and partner logos.</p>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold">Quick links</h3>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li><a className="hover:underline" href="https://www.anemoneproject.eu" target="_blank" rel="noreferrer">anemoneproject.eu</a></li>
              <li><a className="hover:underline" href="#" >Strategic Toolbox</a></li>
              <li><a className="hover:underline" href="#" >Events</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-slate-900 font-semibold">Contact</h3>
            <p className="mt-2">Lead Partner: NIMRD “Grigore Antipa”, Constanța, Romania</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
