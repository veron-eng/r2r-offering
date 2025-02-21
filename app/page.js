import ButtonLogin from "@/components/ButtonLogin";

export default function Home() {
  const isLoggedIn = true;
  const name = "Veron"
  return (
    <main>
      <h1>Collect customer feedback to build better products</h1>
      <div>
        create a feedback board in minutes, prioritize features and build products your customers will love
      </div>
      <ButtonLogin isLoggedIn={isLoggedIn} name={name}/>
    </main>
  )
}