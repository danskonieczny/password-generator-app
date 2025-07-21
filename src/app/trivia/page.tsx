import Layout from "../components/Layout"
export default function Trivia() {
  return (
    <Layout>
      <h2 className="text-2xl font-bold mb-6">Ciekawostki o Hasłach</h2>
      <ul className="list-disc pl-5 space-y-2">
        <li>Najczęstsze hasło na świecie to "123456".</li>
        <li>Hasła powyżej 16 znaków są wielokrotnie trudniejsze do złamania.</li>
        {/* Dodaj więcej ciekawostek */}
      </ul>
    </Layout>
  )
}
