import Layout from "../components/Layout";

export default function Tips() {
  return (
    <Layout>
      <section className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-6 text-white">Szybkie wskazówki bezpieczeństwa</h2>
        <ul className="space-y-3 list-disc pl-5 text-white/90">
          <li>Używaj różnych haseł do różnych serwisów.</li>
          <li>Nie udostępniaj swoich haseł.</li>
          {/* Dodaj więcej wskazówek */}
        </ul>
      </section>
    </Layout>
  );
}
