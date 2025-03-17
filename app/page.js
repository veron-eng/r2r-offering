import ButtonLogin from "@/components/ButtonLogin";
import FAQListItem from "@/components/FAQListItem";
import Image from "next/image";
import productDemo from "./productDemo.jpeg";
import  {auth} from "@/auth"

export default async function Home() {

  const session = await auth() 
  console.log(session)

  const pricingFeaturesList = [
    "Collect customer feedback",
    "Unlimited boards",
    "Admin dashboard",
    "24/7 support"
  ]


  return (
    <main>
      {/* HEADER SECTION */}
      <section className="bg-base-200">
        <div className="max-w-5xl mx-auto flex justify-between items-center px-8 py-2">
          <div className="font-bold">CodefastSass</div>
          <div className="space-x-4 max-md:hidden">
            <a className="link link-hover" href="#pricing">Pricing</a>
            <a className="link link-hover" href="#faq">FAQ</a>
          </div>
          <div className="">
            <ButtonLogin session ={session} />
          </div>
        </div>
      </section>
      {/* HERO SECTION */}
      <section className="text-center lg:text-left px-8 py-32 max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center lg:items-start">
        <Image src={productDemo} alt="Product demo" className="w-96 rounded-xl"/>
        <div>
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">Collect customer feedback to build better products</h1>
          <div className="opacity-90 mb-10">
            create a feedback board in minutes, prioritize features and build products your customers will love
          </div>
          <ButtonLogin session={session} />
        </div>
      </section>
      {/* PRICING SECTION */}
      <section className="bg-base-200" id="pricing">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            Pricing
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            A Pricing that adapts to your needs
          </h2>

          <div className="p-8 bg-base-100 w-96 rounded-3xl mx-auto space-y-6">
            <div className="flex gap-2 items-baseline ">
              <div className="text-4xl font-black">£12</div>
              <div className="uppercase text-sm font-medium opacity-60">/month</div>
            </div>

            <ul className="space-y-2 ">
              {pricingFeaturesList.map((priceItem) => {
                return (
                  <li key={priceItem} className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="text-green-600 size-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                    </svg>
                    {priceItem}
                  </li>
                )

              })}
            </ul>
            <ButtonLogin session={session} extraStyle="w-full" />
          </div>
        </div>

      </section>

      {/* FAQ SECTION */}
      <section className="bg-base-200" id="faq">
        <div className="px-8 py-32 max-w-3xl mx-auto">
          <p className="text-sm uppercase font-medium text-center text-primary">
            FAQ
          </p>
          <h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
            Frequently Asked Questions
          </h2>

          <ul className="max-w-lg mx-auto">
            {
              [
                { question: "first question", answer: "first answer" },
                { question: "second question", answer: "second answer" },
                { question: "third quesion", answer: "third answer" },
              ].map((qa) => (
                <FAQListItem key={qa.question} qa={qa}></FAQListItem>
              ))
            }
          </ul>
        </div>
      </section>
    </main>
  )
}