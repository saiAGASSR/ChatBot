import LoginForm from "@/components/Login/LoginForm";



export default function Home() {


  return (
    <div className="grid grid-rows items-center justify-items-center  p-1 pb-0 gap-1 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2  items-center ">
       
       <LoginForm />


      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
       
      </footer>
    </div>
  );
}
